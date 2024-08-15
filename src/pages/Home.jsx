import React, { useState, useEffect } from "react";
import { MdRefresh } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import logomail from "../assets/Logo_holder.svg";
import home from "../assets/home.svg";
import search from "../assets/Vector.svg";
import mail from "../assets/email.svg";
import send from "../assets/Frame 23.svg";
import options from "../assets/options.svg";
import frame19 from "../assets/Frame 19.svg";
import barchart from "../assets/bar_chart.svg";
import homeillus from "../assets/homeil.svg";
import ShowEmails from "../components/ShowEmails";
import ShowSelectedMail from "../components/ShowSelectedMail";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      setError("Authorization token is missing");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`HTTP error! status: ${response.status}`, errorText);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div
      className={`flex h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`flex flex-col py-1 items-center justify-between w-16 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-200"
        }`}
      >
        <div className="text-xl font-bold w-[48px] h-[70px]">
          <img src={logomail} alt="logomail" />
        </div>
        <div className="flex flex-col items-center space-y-4 mt-4 w-[48px] px-[16px] py-[80x] gap-[24px]">
          <div className="w-[28px] h-[28px] rounded">
            <img src={home} alt="home icon" />
          </div>
          <div className="w-[28px] h-[28px] rounded">
            <img src={search} alt="search icon" />
          </div>
          <div className="w-[28px] h-[28px] rounded">
            <img src={mail} alt="mail icon" />
          </div>
          <div className="w-[28px] h-[28px] rounded">
            <img src={send} alt="send icon" />
          </div>
          <div className="w-[28px] h-[28px] rounded">
            <img src={options} alt="options icon" />
          </div>
          <div className="w-[28px] h-[28px] rounded">
            <img src={frame19} alt="frame 19 icon" />
          </div>
          <div className="w-[28px] h-[28px] rounded">
            <img src={barchart} alt="barchart icon" />
          </div>
        </div>
        <div className="w-[48px] h-[48px] bg-green-500 rounded-full text-center justify-center items-center flex">
          AS
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Navbar */}
        <div
          className={`flex justify-between h-[70px] items-center p-4 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <div className="font-semibold">Onebox</div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`flex items-center justify-center w-8 h-8 rounded-full focus:outline-none ${
                isDarkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              {isDarkMode ? "🌙" : "☀️"}
            </button>
            <div className="flex flex-row items-center justify-center gap-2">
              <p>Tim's workspace</p>
              <FaAngleDown className="mt-1" />
            </div>
          </div>
        </div>

        {/* Centered Content */}
        <div className="w-full h-full flex">
          {/* Email List Section */}
          <div className="w-[278px] flex flex-col overflow-y-auto">
            {data.length > 0 ? (
              <ShowEmails data={data} onEmailClick={handleEmailClick} />
            ) : (
              <div className="flex-grow flex flex-col items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="rounded-full p-6 mb-4">
                    <img src={homeillus} alt="home illustration" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Detailed Email View Section */}
          {selectedEmail && (
            
            <div className="flex-grow p-4 border-l border-gray-700 overflow-y-auto">
              <ShowSelectedMail selectedEmail={selectedEmail} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
