"use client";
import Image from "next/image";
import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { get, ref } from "firebase/database";
import { database } from "./firebaseConfig";
import { useState, useEffect } from "react";
import React from "react";

// storing data to foirebase firestore
async function addDataToFireStore(name, email, message) {
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      name: name,
      email: email,
      message: message,
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}

// fetching data from firebase firestore
async function getDataFromFireStore() {
  const querySnapshot = await getDocs(collection(db, "contacts"));

  const data = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return data;
}

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fetchedData, setFetchedData] = useState([]); // for firestore database
  const [users, setUsers] = useState([]); // for real time database

  useEffect(() => {
    // fetching data from firestore database
    async function fetchData() {
      const data = await getDataFromFireStore();
      setFetchedData(data);
    }
    fetchData();

    // fetching data from real time database
    const usersRef = ref(database, "user");
    get(usersRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const usersList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setUsers(usersList);
      } else {
        console.log("No data available");
      }
    })
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isSuccess = await addDataToFireStore(name, email, message);
    if (isSuccess) {
      setName("");
      setEmail("");
      setMessage("");
      alert("Data added successfully!");
      // Fetch updated data from Firestore
    const data = await getDataFromFireStore();
    setFetchedData(data);
    } else {
      alert("Failed to add data.");
    }
  };

  return (
    <>
      <style jsx>{`
        .showData::-webkit-scrollbar {
          width: 6px;
        }
        .showData::-webkit-scrollbar-thumb {
          background: #a78bfa; /* Tailwind purple-400 */
          border-radius: 8px;
        }
        .showData::-webkit-scrollbar-track {
          background: transparent;
        }
        /* For Firefox */
        .showData {
          scrollbar-width: thin;
          scrollbar-color: #a78bfa transparent;
        }
      `}</style>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-2xl font-bold text-purple-300">Firebase testing</h1>
        <div className=" fireStoreDB flex gap-4 justify-center items-center">
          <div className="showData h-64 w-96 flex flex-col items-center justify-start gap-2 p-6 border border-gray-500 rounded-xl shadow-lg shadow-purple-500/30 overflow-y-auto">
            {fetchedData.map((data) => (
              <div
                key={data.id}
                className="flex flex-row gap-6 w-full justify-between items-center border-b border-gray-200 py-2"
              >
                <span className="font-semibold text-purple-700">
                  {data.name}
                </span>
                <span className="text-gray-700">{data.email}</span>
                <span className="text-gray-500">{data.message}</span>
              </div>
            ))}
          </div>
          <form action="" onSubmit={handleSubmit} className="">
            <div className=" h-fit flex flex-col items-center justify-center gap-4 p-6 border border-gray-500 rounded-xl shadow-lg shadow-purple-500/30">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-64 "
                required
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-64 "
                required
              />
              <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-64 "
                required
              />
              <button
                type="submit"
                className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition  duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <h2 className="text-2xl font-bold text-purple-300">
          Real time Database{" "}
        </h2>
        <div className=" realTimeDb flex gap-4 justify-center items-center">
          <div className="showData h-64 w-96 flex flex-col items-center justify-start gap-2 p-6 border border-gray-500 rounded-xl shadow-lg shadow-purple-500/30 overflow-y-auto">
            {users.map((data) => (
              <div
                key={data.id}
                className="flex flex-row gap-6 w-full justify-between items-center border-b border-gray-200 py-2"
              >
                <span className="font-semibold text-purple-700">
                  {data.name}
                </span>
                <span className="text-gray-500">{data.food}</span>
              </div>
            ))}
          </div>
          <form action="" onSubmit={handleSubmit} className="">
            <div className=" h-fit flex flex-col items-center justify-center gap-4 p-6 border border-gray-500 rounded-xl shadow-lg shadow-purple-500/30">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-64 "
                required
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-64 "
                required
              />
              <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-64 "
                required
              />
              <button
                type="submit"
                className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition  duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
