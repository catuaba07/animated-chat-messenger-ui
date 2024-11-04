import React from "react";
import { Message } from "@/data/messages";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: Message;
  showSender: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, showSender }) => {
  const highlightMentions = (text: string) => {
    return text.split(" ").map((word, index) => {
      if (word.startsWith("@")) {
        return (
          <span key={index} className="text-chat-mention">
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  };

  return (
    <div
      className={cn(
        "animate-message-in opacity-0 group",
        message.isSentByMe ? "flex flex-col items-end" : "flex flex-col items-start"
      )}
    >
      {showSender && !message.isSentByMe && (
        <span className="text-xs text-gray-400 ml-3 mb-1">{message.sender}</span>
      )}
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%] break-words",
          message.isSentByMe
            ? "bg-chat-bubble-sent text-white"
            : "bg-chat-bubble-received text-gray-100"
        )}
      >
        <p className="text-sm">{highlightMentions(message.text)}</p>
        <span className="text-[10px] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity float-right ml-2 mt-1">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;