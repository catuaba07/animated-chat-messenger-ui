import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-2 p-4">
      <div className="flex space-x-1">
        <div className="w-2 h-2 rounded-full bg-gray-400 animate-typing-dot"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400 animate-typing-dot" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-2 h-2 rounded-full bg-gray-400 animate-typing-dot" style={{ animationDelay: "0.4s" }}></div>
      </div>
    </div>
  );
};

export default TypingIndicator;