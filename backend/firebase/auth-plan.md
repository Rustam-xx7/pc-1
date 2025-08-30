# Firebase + Next.js Restaurant Ordering System

This document contains the full code flow for building a restaurant
ordering system with Firebase Firestore, Firebase Auth, and Next.js.

------------------------------------------------------------------------

## 🔹 Step 1: Setup Firebase

Create a Firebase project → enable: - Authentication → **Google +
Email/Password** - Firestore Database

Install packages in your Next.js app:

``` bash
npm install firebase
```

Create a file **`firebase.js`** in `lib/` or `utils/`:

``` js
// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
```

------------------------------------------------------------------------

## 🔹 Step 2: Authentication (User + Admin)

### Google Sign-In

``` js
// pages/api/auth/google.js
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export async function googleLogin() {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      email: user.email,
      name: "",
      contact: "",
      location: "",
      cart: [],
      role: "user", // default role
    });
  }

  return user;
}
```

### Admin Login (Email + Password)

``` js
// pages/api/auth/admin.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function adminLogin(email, password) {
  const result = await signInWithEmailAndPassword(auth, email, password);
  const user = result.user;

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (snap.exists() && snap.data().role === "admin") {
    return user;
  } else {
    throw new Error("Not an admin");
  }
}
```

👉 In Firestore, make one user's `role: "admin"` manually.

------------------------------------------------------------------------

## 🔹 Step 3: Profile Completion Form

``` js
// pages/profile.js
"use client";
import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export default function Profile() {
  const [profile, setProfile] = useState({ name: "", contact: "", location: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      const ref = doc(db, "users", auth.currentUser.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setProfile(snap.data());
      }
    };
    fetchProfile();
  }, []);

  const saveProfile = async () => {
    const ref = doc(db, "users", auth.currentUser.uid);
    await updateDoc(ref, profile);
  };

  return (
    <div>
      <h1>Complete Your Profile</h1>
      <input placeholder="Name" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})}/>
      <input placeholder="Contact" value={profile.contact} onChange={e => setProfile({...profile, contact: e.target.value})}/>
      <input placeholder="Location" value={profile.location} onChange={e => setProfile({...profile, location: e.target.value})}/>
      <button onClick={saveProfile}>Save</button>
    </div>
  );
}
```

------------------------------------------------------------------------

## 🔹 Step 4: Cart System

``` js
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

export async function addToCart(uid, item) {
  const ref = doc(db, "users", uid);
  await updateDoc(ref, {
    cart: arrayUnion(item),
  });
}
```

``` js
import { doc, getDoc } from "firebase/firestore";

export async function getCart(uid) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  return snap.data().cart || [];
}
```

------------------------------------------------------------------------

## 🔹 Step 5: Place Order

``` js
import { doc, updateDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";

export async function placeOrder(uid, cartItems) {
  await addDoc(collection(db, "orders"), {
    userId: uid,
    items: cartItems,
    status: "pending",
    createdAt: serverTimestamp(),
  });

  // empty cart
  const ref = doc(db, "users", uid);
  await updateDoc(ref, { cart: [] });
}
```

------------------------------------------------------------------------

## 🔹 Step 6: Admin Dashboard

``` js
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getAllOrders() {
  const snap = await getDocs(collection(db, "orders"));
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function markDelivered(orderId) {
  const ref = doc(db, "orders", orderId);
  await updateDoc(ref, { status: "delivered" });
}
```

------------------------------------------------------------------------

## 🔹 Step 7: Protect Admin Dashboard

### Client-side Protection

``` jsx
"use client";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;
      if (!user) {
        router.push("/admin-login");
        return;
      }
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists() && snap.data().role === "admin") {
        setAllowed(true);
      } else {
        router.push("/");
      }
      setLoading(false);
    };
    checkAdmin();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!allowed) return null;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Only admins can see this page 🚀</p>
    </div>
  );
}
```

------------------------------------------------------------------------

## ✅ Flow Summary

1.  User logs in (Google / Email-password).
2.  If new → Firestore user doc created.
3.  Profile completion form saves details.
4.  User browses menu → adds items to cart (`users/{uid}/cart`).
5.  Place order → moves cart items to `orders` collection.
6.  Admin logs in (email/password) → sees all orders → marks delivered.
7.  On delivery, order status updates → user cart clears.

------------------------------------------------------------------------
