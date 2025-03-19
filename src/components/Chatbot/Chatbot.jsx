
// import { useState, useEffect, useRef } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import AiImg from "../../assets/NewAiImgForChatBot.jpeg";
// import './Chatbot.css';

// const App = () => {
//   const [userInput, setUserInput] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   // Reference for the latest message
//   const latestMessageRef = useRef(null);

//   // Initialize the Gemini API
//   const genAI = new GoogleGenerativeAI(
//     "AIzaSyCGeEZqf4MAQJrf8MNghDHearwdDe07njg"
//   );
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   // Toggle chat window visibility
//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   // Handle user input
//   const handleUserInput = (e) => {
//     setUserInput(e.target.value);
//   };

//   // Handle "Enter" key submission
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       sendMessage();
//     }
//   };

//   // Send user message to Gemini API
//   const sendMessage = async () => {
//     if (userInput.trim() === "") return;

//     setIsLoading(true);
//     try {
//       // Call Gemini API to get a response
//       const result = await model.generateContent(userInput);
//       const response = await result.response.text();

//       // Add user and bot messages to the chat history
//       setChatHistory((prevChatHistory) => [
//         ...prevChatHistory,
//         { type: "user", message: userInput },
//         { type: "bot", message: response },
//       ]);
//     } catch (error) {
//       console.error("Error sending message:", error);
//     } finally {
//       setUserInput("");
//       setIsLoading(false);
//     }
//   };

//   // Auto-scroll to the latest message when chat history updates
//   useEffect(() => {
//     if (latestMessageRef.current) {
//       latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [chatHistory]);

//   return (
//     <div className="pl-[600px] z-[90]">
//       {/* Glowing Text */}
//       {!isChatOpen && (
//         <p className="text-white text-lg font-semibold glow-animation mt-[75px] ml-12  absolute  ">
//           <strong className="h-4 w-3">Hey, Sara this side.......</strong> <br />  how can I help you?
//         </p>
//       )}
      
//       {/* Circular Button */}
//       <button
//         onClick={toggleChat}
//         className="w-16 h-16 rounded-full bg-yellow-500 text-black p-[1px] font-sans font-semibold flex items-center justify-center shadow-lg"
//       >
//         <img src={AiImg} alt="" className="rounded-full" />
//       </button>

//       {/* Chat Popup Window */}
//       {isChatOpen && (
//         <div className="w-80 h-96 bg-[#282A5D] shadow-lg rounded-lg p-4 flex flex-col right-4">
//           <h2 className="text-lg font-bold mb-2 text-black">
//             Hey!!!! How can I help you??
//           </h2>
//           <div className="flex-1 overflow-y-auto mb-4 bg-black">
//             {chatHistory.map((chat, index) => (
//               <div
//                 key={index}
//                 ref={index === chatHistory.length - 1 ? latestMessageRef : null}
//                 className={`my-2 p-2 rounded-lg text-black ${
//                   chat.type === "user"
//                     ? "bg-green-500 text-right"
//                     : "bg-white text-left"
//                 }`}
//               >
//                 {chat.message}
//               </div>
//             ))}
//           </div>
//           <div className="flex">
//             <input
//               type="text"
//               className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Type your message..."
//               value={userInput}
//               onChange={handleUserInput}
//               onKeyDown={handleKeyPress}
//             />
//             <button
//               className="px-4 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
//               onClick={sendMessage}
//               disabled={isLoading}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import AiImg from "../../assets/NewAiImgForChatBot.jpeg";
import "./Chatbot.css";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const latestMessageRef = useRef(null);

  const genAI = new GoogleGenerativeAI("AIzaSyDmqPAZtWS6SugZSlBRjdtyKTnuLmo6ISw");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    try {
      const result = await model.generateContent(userInput);
      const response = await result.response.text();

      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { type: "user", message: userInput },
        { type: "bot", message: response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <div className="relative ">
     
<button
  onClick={toggleChat}
   className=" relative rounded-[50%] h-[150px] w-[150px]   "
>
  <img
    src={AiImg}
    alt="Chatbot"
    className=" rounded-[50%] h-[120px] w-[150px] relative "
  />
</button>
     <div> 
      
     {/* Glowing Text */}
      {!isChatOpen && (
        <p className=" relative text-lg  glow-animation  pl-[50px]  ">
          <strong>Hey, Sara this side.......</strong>
          <br />
          How can I help you?
        </p>
      )}</div>


      {/* Chat Popup Window */}
      {isChatOpen && (
        <div className="w-[90%] sm:w-80 h-[500px] sm:h-96 bg-[#282A5D] shadow-lg rounded-lg p-4 flex flex-col">
          <h2 className="text-lg font-bold mb-2 text-black text-center">
            Hey!!!! How can I help you??
          </h2>
          <div className="flex-1 overflow-y-auto mb-4 bg-black rounded-md p-2 text-black">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                ref={index === chatHistory.length - 1 ? latestMessageRef : null}
                className={`my-2 p-2 rounded-lg ${
                  chat.type === "user"
                    ? "bg-green-500 text-right"
                    : "bg-white text-left"
                }`}
              >
                {chat.message}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={userInput}
              onChange={handleUserInput}
              onKeyDown={handleKeyPress}
            />
            <button
              className="px-4 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none text-black"
              onClick={sendMessage}
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
