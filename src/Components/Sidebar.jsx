import React from 'react';
import { questions } from '../data';
import nicon from "../assets/nicon.svg";
import kicon from "../assets/kicon.svg";
import openaiicon from "../assets/openai-icon.svg";
import glarestaricon from "../assets/glare-star-icon.svg";


const Sidebar = () => {
  return (

    <div className="bg-black flex flex-col items-start p-4 h-screen">
      <div className="flex items-center w-full p-1 rounded-lg hover:bg-[#202123]">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="bg-[#ececf1] rounded-full p-1 h-8 w-8">
            <img src={openaiicon} alt="OpenAI Logo" />
          </div>
          <h2 className="text-[#ececf1] font-semibold">New Chat</h2>
        </div>
      </div>
      
      {/* recent chats code */}
     

      <div className="flex flex-col justify-between h-full w-full">
        <div>
          <p className="text-[#666666] text-sm mt-12">Today</p>
          <div className="text-[#ecedf1] text-sm space-4 mt-4 w-full">
            {questions.map((q, index) => (
              <div key={index} className="p-1 w-full rounded-lg cursor-pointer hover:bg-[#202123]">
                {q}
              </div>
            ))}
          </div>
        </div>
        
        {/* Upgrade Plan to chatgpt 4.0 */}

        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="bg-[#ececf1] rounded-full p-1 h-8 w-8">
              <img src={glarestaricon} alt="Glare Star Icon" />
            </div>

            <div className="text-[#ececf1]">
              <p className="font-bold text-sm">Upgrade plan</p>
              <p className="text-sm">Get GPT-4, DALL-E and more</p>
            </div>
          </div>

          <div className="flex items-center space-x-1 cursor-pointer">
            <img src={nicon} alt="n Icon" className="w-8 h-8 rounded-full"/>
            <img src={kicon} alt="k Icon" className="w-8 h-8 rounded-full"/>
            <p className="text-[#ececf1]">Niki Khanam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
