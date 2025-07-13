import React from "react";

const Username = ({ params }) => {
  return (
    <>
      {/* {params.username} */}
      <div className="cover bg-amber-400 w-full h-[35vh] relative -z-6 ">
        <img
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/688268/8628ef60983c4806867cccd45545ce07/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/10.jpeg?token-hash=CXtl1WXVA3lA2EwcdNQiTaXNKMjs3jT5TwEix2u0X44%3D&token-time=1754265600"
          alt=""
          className="object-cover w-full h-[35vh]"
        />
      </div>
      <div className="w-full flex items-center justify-center absolute top-[35vh] ">
        <img
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/688268/8628ef60983c4806867cccd45545ce07/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/10.jpeg?token-hash=CXtl1WXVA3lA2EwcdNQiTaXNKMjs3jT5TwEix2u0X44%3D&token-time=1754265600"
          className="object-cover h-40 w-40 rounded-3xl border border-gray-400/50 "
          alt=""
        />
      </div>
      <div className="content flex flex-col ">
        <div className="bar h-25  p-2 px-4 text-right">options</div>
        <div className="flex flex-col gap-2 items-center my-4">
          <h2 className="text-4xl font-semibold">{params.username}</h2>
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
            <li>one person donated $50000</li>
            <li>one person donated $50000</li>
            <li>one person donated $50000</li>
            <li>one person donated $50000</li>
            <li>one person donated $50000</li>
            <li>one person donated $50000</li>
            <li>one person donated $50000</li>
            <li>one person donated $50000</li>
            <li>one person donated $50000</li>
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
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-300 font-semibold mb-2"
                  htmlFor="amount"
                >
                  Amount ($)
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-400/50 rounded-lg focus:outline-none focus:ring focus:border-blue-400/50"
                  type="number"
                  id="amount"
                  placeholder="Enter amount"
                  min="1"
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
                  id="name"
                  placeholder="Write a Massage"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-purple-700 to-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:from-purple-800 hover:to-blue-700 transition"
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

export default Username;
