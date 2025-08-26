// NOTE THAT : ALL PAYMENT METHOD WILL ACTUALLY 100% WORK AFTER GETING THE CORRECT RAZOR PAY KEY_ID AND KEY_SECRET . UNTILL THEN BAKI BISOY IS WORKING !

"use client";

import React from "react";
import Script from "next/script";
import { initiate } from "@/actions/useractions";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { fetchuser, fetchpayments } from "@/actions/useractions";

const paymentpage = ({ username }) => {
  const { data: session } = useSession();
  const [paymentform, setpaymentform] = useState({});
  const [currentUser, setcurrentUser] = useState({});
  const [payments, setpayments] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.mame]: e.target.value });
  };

  const getData = async (params) => {
    let u = await fetchuser(username);
    setcurrentUser(u);
    let dbpayments = await fetchpayments(username);
    setpayments(dbpayments);
  };

  const pay = async (amount) => {
    //Get the Order Id
    let a = await initiate(amount, username, paymentform);
    console.log(session.user.name);
    let orderId = a.id;

    var options = {
      key: currentUser.razorpayId, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits.
      currency: "INR",
      name: "Get me a Chai", //your business name
      deScription: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, // This is a sample Order ID. Pass the id obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "+919876543210", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="cover bg-amber-400 w-full h-[35vh] relative -z-6 ">
        <img
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/688268/8628ef60983c4806867cccd45545ce07/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/10.jpeg?token-hash=CXtl1WXVA3lA2EwcdNQiTaXNKMjs3jT5TwEix2u0X44%3D&token-time=1754265600"
          alt=""
          className="object-cover w-full h-[35vh]"
        />
      </div>
      <div className="profilePhoto w-full flex items-center justify-center absolute top-[35vh] overflow-hidden">
        <img
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/688268/8628ef60983c4806867cccd45545ce07/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/10.jpeg?token-hash=CXtl1WXVA3lA2EwcdNQiTaXNKMjs3jT5TwEix2u0X44%3D&token-time=1754265600"
          className="object-cover h-40 w-40 rounded-3xl border border-gray-400/50 "
          alt=""
        />
      </div>
      <div className="content flex flex-col ">
        <div className="bar h-25  p-2 px-4 text-right">options</div>
        <div className="flex flex-col gap-2 items-center my-4">
          <h2 className="text-4xl font-semibold">{username}</h2>
          <div>
            <div>
              <span>
                Creating a podcast with ben avery, devan costa and jace avery
              </span>
            </div>
            <div className="text-center font-light text-gray-400">
              <span>10,268 members | 387 Posts | $34,890/month</span>
            </div>
          </div>
        </div>
      </div>
      <div className="payment flex gap-10 w-full justify-center my-4">
        <div className="supporters w-[40vw] bg-gray-700/40 border border-gray-400/30 min-h-[60vh] rounded-2xl p-4 px-6 overflow-y-auto">
          <h3 className=" font-semibold text-xl mb-4">Supporters</h3>
          <ul className="mx-6">
            {(Array.isArray(payments) ? payments : []).map((p, i) => {
              return (
                <li key={i}>
                  {p.name} donated &#8377;{p.amount}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="makePayment w-[40vw] bg-gray-700/40 border border-gray-400/30 min-h-[60vh] rounded-2xl p-4 px-6 overflow-y-auto">
          <h3 className="text-center font-semibold text-xl mb-4">
            Make a Payment
          </h3>
          <div className="rounded-xl shadow-md p-6 max-w-md mx-auto">
            <form>
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
                  placeholder="Enter your name"
                  onChange={handleChange}
                  value={paymentform.name}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-300 font-semibold mb-2"
                  htmlFor="amount"
                >
                  Amount (&#8377;)
                  <div>
                    <button
                      className="bg-zinc-800 p-2 border border-gray-900 mr-3 text-green-500 rounded-lg"
                      onClick={() => {
                        pay(1000);
                      }}
                    >
                      Pay &#8377;10{" "}
                    </button>
                    <button
                      className="bg-zinc-800 p-2 border border-gray-900 mr-3 text-green-500 rounded-lg"
                      onClick={() => {
                        pay(2000);
                      }}
                    >
                      Pay &#8377;20{" "}
                    </button>
                    <button
                      className="bg-zinc-800 p-2 border border-gray-900 mr-3 text-green-500 rounded-lg"
                      onClick={() => {
                        pay(5000);
                      }}
                    >
                      Pay &#8377;50{" "}
                    </button>
                  </div>
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-400/50 rounded-lg focus:outline-none focus:ring focus:border-blue-400/50"
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="Enter amount"
                  min="1"
                  onChange={handleChange}
                  value={paymentform.amount}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-300 font-semibold mb-2"
                  htmlFor="name"
                >
                  Write a Massage
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-400/50 rounded-lg focus:outline-none focus:ring focus:border-blue-400/50"
                  type="text"
                  id="massage"
                  name="massage"
                  placeholder="Write a Massage"
                  onChange={handleChange}
                  value={paymentform.massage}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-purple-700 to-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:from-purple-800 hover:to-blue-700 transition"
                onClick={() => pay(paymentform.amount)}
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default paymentpage;
