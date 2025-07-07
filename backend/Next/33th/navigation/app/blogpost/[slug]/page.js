"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const page = () => {
  const params = useParams();
  const router = useRouter();
  return (
    <div>
      <div>{params.slug}</div>
      <button type="button" onClick={() => router.push("/")}>
        Home
      </button>
    </div>
  );
};

export default page;
