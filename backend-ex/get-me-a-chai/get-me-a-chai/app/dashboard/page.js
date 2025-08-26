"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";

const dashboard = () => {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [form, setform] = useState({});

  useEffect(() => {
    
    if (!session) {
      router.push("/login");
    }else {
      getData();
    }
    
  }, [router, session]);

  const getData = async () => {
    let u = await fetchuser(session.user.name);
    setform(u);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(e)
    update();
    let a = await updateProfile(e, session.user.name);
    alert("profile Updated !");
  };

  return (
    <div>
      <div className="rounded-xl shadow-md p-6 max-w-md mx-auto">
        <form
          action={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-300 font-semibold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400/50 rounded-lg focus:outline-none focus:ring focus:border-blue-400/50"
              type="text"
              id="name"
              name="name"
              value={form.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 font-semibold mb-2"
              htmlFor="name"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400/50 rounded-lg focus:outline-none focus:ring focus:border-blue-400/50"
              type="text"
              id="email"
              name="email"
              value={form.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 font-semibold mb-2"
              htmlFor="name"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400/50 rounded-lg focus:outline-none focus:ring focus:border-blue-400/50"
              type="text"
              id="username"
              name="username"
              value={form.username}
              placeholder="Enter your username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 font-semibold mb-2"
              htmlFor="details"
            >
              Details
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400/50 rounded-lg focus:outline-none focus:ring focus:border-blue-400/50"
              type="text"
              id="details"
              name="details"
              value={form.details}
              placeholder="Enter details"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 font-semibold mb-2"
              htmlFor="name"
            >
              Razorpay Id
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400/50 rounded-lg focus:outline-none focus:ring focus:border-blue-400/50"
              type="text"
              id="razorpayId"
              name="razorpayId"
              value={form.razorpayId}
              placeholder="Razorpay Id"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 font-semibold mb-2"
              htmlFor="name"
            >
              Razorpay Secret
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400/50 rounded-lg focus:outline-none focus:ring focus:border-blue-400/50"
              type="text"
              id="razorpaysecret"
              name="razorpaysecret"
              value={form.razorpaysecret}
              placeholder="Razorpay Secret"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-purple-700 to-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:from-purple-800 hover:to-blue-700 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default dashboard;
