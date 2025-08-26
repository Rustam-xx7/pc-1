"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false)

  const { data: session } = useSession();

  return (
    <nav className="bg-[#0E0720] text-lg py-6 text-white px-6 h-[8vh] items-center flex justify-between">
      <div className="logo font-bold text-[#9368ff] text-2xl ">
        <Link href="/"> Get Me a Chai</Link>
      </div>
      <ul className="flex justify-around gap-4">
        <li className="">
          <div className="relative">
          {session && (
            <>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                type="button" onClick={() => {setshowdropdown(!showdropdown)}} 
              >
                <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Welcome {session.user.email}
                  </span>
                
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdown"
                className={`z-10 ${showdropdown?"":"hidden"} absolute right-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`} onBlur={() => { setTimeout(() => {},200); setshowdropdown(false)}}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${session.user.name}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Your Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => {signOut()}} 
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
          </div>
          {!session && (
            <Link href={"/login"}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  login
                </span>
              </button>
            </Link>
          )}
        </li>
        <li>
          
          {!session && (
            <Link href={"/sign-up"}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Sign Up
                </span>
              </button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
