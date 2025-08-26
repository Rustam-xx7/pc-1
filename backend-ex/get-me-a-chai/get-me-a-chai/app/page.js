import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white ">
        <div className="flex justify-center text-white  min-h-[44vh] flex-col items-center gap-6 my-2">
          <div className="font-bold text-5xl">Bye Me a Chai</div>
          <p className="text-sm">
            A crowdfundig platform for creators. Get funded by your fans and
            followers . Start Now!
          </p>
          <div className="gap-6 flex">
            <button
              type="button"
              className="text-white bg-gradient-to-br to-[#2C1667] from-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-
              none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Start Here
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-br to-[#2C1667] from-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white h-1 opacity-5"></div>
        <div className="flex flex-col justify-center items-center gap-4 my-12 mb-16 container mx-auto ">
          <h2 className="text-2xl mb-6  font-bold">
            Your Fans can bye you a Chai !
          </h2>
          <div className="flex justify-around w-full ">
            <div className="space-y-3 flex flex-col justify-center items-center">
              <img
                src="https://assets-v2.lottiefiles.com/a/27c24aa4-1180-11ee-8524-df52dca6b910/3HwxblohFv.gif"
                alt=""
                className=" rounded-full w-24"
              />
              <p className="font-bold text-xl">Fund Your Self !</p>
              <p className="">Your fans are available for you to help you .</p>
            </div>
            <div className="space-y-3  flex flex-col justify-center items-center">
              <img
                src="https://cdnl.iconscout.com/lottie/premium/thumb/ripple-animation-download-in-lottie-json-gif-static-svg-file-formats--cryptocurrency-coin-crypto-pack-science-technology-animations-4699130.gif"
                alt=""
                className=" rounded-full w-24"
              />
              <p className="font-bold text-xl">Fund Your Self !</p>
              <p className="">Your fans are available for you to help you .</p>
            </div>
            <div className="space-y-3  flex flex-col justify-center items-center">
              <img
                src="https://assets-v2.lottiefiles.com/a/adf874ca-117d-11ee-b880-3fca0cf169e6/HaS7nwqux2.gif"
                alt=""
                className=" rounded-full w-24"
              />
              <p className="font-bold text-xl">Fund Your Self !</p>
              <p className="">Your fans are available for you to help you .</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-1 opacity-5"></div>
        <div className="flex flex-col justify-center items-center gap-4 my-12 mb-16 container mx-auto  ">
          <h2 className="text-2xl mb-6  font-bold ">Learn More About Us !</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/erjwCQ-UZyw?si=r8CAUNncAL5Xu3WC"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
