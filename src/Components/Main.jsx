import { useState } from 'react';
import { suggestions } from '../data';
import "./main.css";
import { generateMessage } from '../utils/openai';

// import Starter from "./Starter";

const Main = () => {

  const [prompt, setPrompt]=useState("");
  const [messages,setMessages]=useState([])

  const handleClick=async()=>{
    try{
      const text=prompt
      setPrompt("")
      const res=await generateMessage(prompt)
      setMessages([
        ...messages,
        {text:text,isUser:true},
        {text:res,isUser:false}
      ])
    }
    catch(err) {
      console.log(err)
    }

    }
  }


  return (
    <div className="bg-[#343541] h-screen flex flex-col justify-between">
      <div>
        <h1 className="font-bold text-xl text-white p-4">ChatGPT 3.5 Clone</h1>
        {/* <Starter/> */}
        
        {/* messages */}
        <div className="overflow-y-scroll h-[70vh] md:h-[75vh] w-full md:w-[70%] mx-auto md:p-0 p-4  flex flex-col">
        {/* messages */}
          <div className="flex items-start space-x-4 my-4 my-6 p-2">
            <img className="h-8 w-8 rounded-full" src="/assets/nklogo.png" alt="nklogo" />
            <div className="flex flex-col items-start">
              <p className="text-[#ececf1] font-bold">You</p>
              <p className="text-[#ececf1]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 my-4 my-6 p-2">
            <img className="h-8 w-8 rounded-full" src="/assets/nklogo.png" alt="nklogo" />
            <div className="flex flex-col items-start">
              <p className="text-[#ececf1] font-bold">You</p>
              <p className="text-[#ececf1]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 my-4 my-6 p-2">
            <img className="h-8 w-8 rounded-full" src="/assets/nklogo.png" alt="nklogo" />
            <div className="flex flex-col items-start">
              <p className="text-[#ececf1] font-bold">You</p>
              <p className="text-[#ececf1]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>

      </div>
    </div>

    <div>
      {/* suggestions */}
      <div className="my-8 md:p-0 mx-auto w-full md:w-[65%] grid gap-2 grid-cols-2">
        {suggestions.map((s, index) =>(
          <div key={index} className="flex flex-col items-start p-2 rounded-lg border border-gray-600 cursor-pointer">
            <p className="text-sm text-[#c5c5d2]">{s.title}</p>
            <p className="text-sm font-bold text-[#585757]">{s.desc}</p>
          </div>
        ))}
        {/* input */}
        <div className="w-full flex justify-center items-center flex-col p-4 md:p-0">
        <div className="w-full md:w-[65%] h-[55px] border border-gray-600 flex items-center rounded-1g p-2">
          <input value={prompt} onChange={(e) => setPrompt(e.target.value)} className="text-white h-full w-full p-2 outline-none bg-inherit" type="text" placeholder="Message ChatGPT clone" />
          <button onClick={handleClick} className="bg-gray-600 h-full p-2 rounded-1g">
            <img src="/assets/upload_icon_128711 (1).svg" alt="upload" />
          </button>
          </div>
          <p className="text-xs text-white p-2 text-center">ChatGPT can make mistakes. Consider checking important information.</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Main;
