import React from "react";
import { Message } from "@/data/messages";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
        "animate-message-in opacity-0 group flex gap-3 px-4",
        message.isSentByMe ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div className="flex-shrink-0 w-8">
        {showSender && (
          <Avatar className="w-8 h-8">
            <AvatarImage src={`https://i.pravatar.cc/300?u=${message.sender}`} />
            <AvatarFallback>{message.sender[0]}</AvatarFallback>
          </Avatar>
        )}
      </div>
      <div className={cn("flex flex-col max-w-[70%]", message.isSentByMe && "items-end")}>
        {showSender && !message.isSentByMe && (
          <span className="text-xs text-gray-400 mb-1">{message.sender}</span>
        )}
        <div
          className={cn(
            "rounded-lg px-4 py-2 break-words w-fit",
            message.isSentByMe
              ? "bg-chat-bubble-sent text-white"
              : "bg-chat-bubble-received text-gray-100"
          )}
        >
          <p className="text-sm">{highlightMentions(message.text)}</p>
          <span className="text-[10px] text-gray-300 block text-right mt-1">
            {message.timestamp}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;