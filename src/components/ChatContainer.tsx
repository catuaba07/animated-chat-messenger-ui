import React from "react";
import { Message } from "@/data/messages";
import ChatMessage from "./ChatMessage";

interface ChatContainerProps {
  messages: Message[];
}

const ChatContainer: React.FC<ChatContainerProps> = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {messages.map((message, index) => {
        const showSender =
          index === 0 || messages[index - 1].sender !== message.sender;
        return (
          <ChatMessage
            key={message.id}
            message={message}
            showSender={showSender}
          />
        );
      })}
    </div>
  );
};

export default ChatContainer;