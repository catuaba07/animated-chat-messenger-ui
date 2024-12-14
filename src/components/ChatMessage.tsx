import React from "react";
import { Message } from "@/data/messages";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileText, Video } from "lucide-react";

interface ChatMessageProps {
  message: Message;
  showSender: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, showSender }) => {
  const highlightMentions = (text: string) => {
    return text.split(" ").map((word, index) => {
      if (word.startsWith("@")) {
        return (
          <span key={index} className="text-chat-mention cursor-pointer">
            {word}{" "}
          </span>
        );
      }
      if (word.match(/(?:\+\d{1,2}-\d{3}-\d{4}|\d{3}-\d{4}|\d{10})/)) {
        return (
          <span key={index} className="text-chat-mention cursor-pointer">
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  };

  const renderMedia = () => {
    if (!message.mediaType) return null;

    switch (message.mediaType) {
      case "document":
        return (
          <div className="mt-2 bg-gray-100 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-200">
            <FileText className="h-8 w-8 text-blue-500" />
            <div className="flex-1">
              <div className="text-sm font-medium">{message.mediaTitle}</div>
              <div className="text-xs text-gray-500">{message.mediaSize}</div>
            </div>
          </div>
        );
      case "video":
        return (
          <div className="mt-2 bg-gray-100 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-200">
            <Video className="h-8 w-8 text-red-500" />
            <div className="flex-1">
              <div className="text-sm font-medium">{message.mediaTitle}</div>
              <div className="text-xs text-gray-500">{message.mediaSize}</div>
            </div>
          </div>
        );
      case "button":
        return (
          <Button
            className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => console.log("Button clicked:", message.buttonText)}
          >
            {message.buttonText}
          </Button>
        );
      default:
        return null;
    }
  };

  const isBot = message.sender.includes("(Bot)");
  const avatarUrl = isBot
    ? "https://st5.depositphotos.com/72897924/62255/v/450/depositphotos_622556394-stock-illustration-robot-web-icon-vector-illustration.jpg"
    : `https://i.pravatar.cc/300?u=${message.sender}`;

  return (
    <div
      className={cn(
        "animate-message-in opacity-0 group flex gap-3 px-4",
        message.isSentByMe ? "flex-row-reverse" : "flex-row",
      )}
    >
      <div className="flex-shrink-0 w-8">
        {showSender && (
          <Avatar className="w-8 h-8">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>{message.sender[0]}</AvatarFallback>
          </Avatar>
        )}
      </div>
      <div
        className={cn(
          "flex flex-col max-w-[70%]",
          message.isSentByMe && "items-end",
        )}
      >
        {showSender && !message.isSentByMe && (
          <span className="text-xs text-gray-400 mb-1">{message.sender}</span>
        )}
        <div
          className={cn(
            "rounded-lg px-4 py-2 break-words w-fit",
            message.isSentByMe
              ? "bg-chat-bubble-sent text-white"
              : "bg-chat-bubble-received text-gray-100",
          )}
        >
          <p className="text-sm whitespace-pre-line">
            {highlightMentions(message.text)}
          </p>
          {renderMedia()}
          <span className="text-[10px] text-gray-300 block text-right mt-1">
            {message.timestamp}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;