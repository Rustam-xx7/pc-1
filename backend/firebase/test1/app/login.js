"use client";
import React, { use } from "react";
import { app } from "./firebaseConfig";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("recaptcha resolved");
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          console.log("recaptcha expired");
        },
      }
    );
  }, [auth]);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };
  const handleSendOtp = async (e) => {
    try {
      const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, "")}`;
      const confirmation = await signInWithPhoneNumber(
        auth,
        formattedPhoneNumber,
        window.recaptchaVerifier
      );
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setPhoneNumber("");
      alert("OTP sent successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleOtpSubmit = async (e) => {
    try {
      e.preventDefault();
      if (otp.length !== 6) {
        alert("Please enter a valid 6-digit OTP.");
        return;
      }
      await confirmationResult.confirm(otp);
      setOtp("");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-fit gap-2">
      {!otpSent ? <div id="recaptcha-container"></div> : null}
      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Enter phone number with country code"
        className="border p-2 rounded mb-4"
      />
      <input 
      type="text"
      value={otp}
      onChange={handleOtpChange}
      placeholder="Enter OTP"
      className="border p-2 rounded mb-4"
       />
       <button
        onClick={otpSent ? handleOtpSubmit : handleSendOtp}
        className={`bg-&{otpSent ? 'green' : 'purple'}-500 text-white p-2 rounded-md`}
        style={{ backgroundColor: otpSent ? 'green' : 'darkviolet' }}
       > {otpSent ? "Submit OTP" : "Send OTP"}</button>
    </div>
  );
};

export default Login;
