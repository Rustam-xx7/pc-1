import React from 'react'

const dashboard = () => {
  return (
    <div>
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
                  Details
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-400/50 rounded-lg focus:outline-none focus:ring focus:border-blue-400/50"
                  type="text"
                  id="details"
                  placeholder="Enter details"
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
                  placeholder="Write a Massage"
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
  )
}

export default dashboard
