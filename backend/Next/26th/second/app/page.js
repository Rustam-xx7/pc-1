import Image from "next/image";

export default function Home() {
  return (
    <>
      This is a Home page .
      <div className=" w-full h-40 container">
        <Image
          src="https://assets1.ignimgs.com/2018/05/16/17-1526514889939.jpg"
          width={300}
          height={300}
          alt=""
          className="mx-auto"
        />
      </div>
    </>
  );
}
