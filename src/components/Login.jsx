import React from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/Frame.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/auth-callback";
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex flex-col flex-grow items-center justify-center">
        <div className="w-[460px] h-[312px] rounded-2xl border-[1px] border-[#343A40] px-[24px] py-[40px] flex flex-col items-center justify-around">
          <h1 className="text-[#FFFFFF] text-[20px] font-medium text-center">
            Create a new account
          </h1>
          <button
            onClick={handleSignIn}
            className="text-white mt-4 p-2 border-[#343A40] border-[1px] rounded-md flex flex-row items-center justify-center w-[380px]"
          >
            <img src={google} alt="google" className="w-[23.5px] h-[32px] mr-2" />
            <p className="font-normal text-[#CCCCCC] text-[16px]">
              Sign in with Google
            </p>
          </button>
          <div className="w-[380px] h-[97px] gap-[24px] flex flex-col items-center mt-4">
            <button className="w-[195px] h-[48px] px-[35px] py-[13px] gap-[10px] rounded-md text-[14px] bg-gradient-to-r from-[#4B63DD] to-[#0523BF] text-white">
              Create an account
            </button>
            <p className="text-[#909296] font-medium text-[16px] text-center">
              Already have an account?{" "}
              <span className="text-[#C1C2C5]">Sign In</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
