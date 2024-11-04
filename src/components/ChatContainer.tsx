import React, { useState, useEffect } from "react";
import { Message } from "@/data/messages";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

interface ChatContainerProps {
  messages: Message[];
}

const ChatContainer: React.FC<ChatContainerProps> = ({ messages }) => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setVisibleMessages([]); // Reset visible messages when messages prop changes
    const showMessages = async () => {
      for (let i = 0; i < messages.length; i++) {
        setIsTyping(true);
        const delay = Math.random() * 2500 + 500;
        await new Promise(resolve => setTimeout(resolve, delay));
        
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, messages[i]]);
        
        if (i < messages.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
    };

    showMessages();
  }, [messages]);

  return (
    <div className="flex flex-col space-y-4 p-4">
      {visibleMessages.map((message, index) => {
        const showSender =
          index === 0 || visibleMessages[index - 1].sender !== message.sender;
        return (
          <ChatMessage
            key={message.id}
            message={message}
            showSender={showSender}
          />
        );
      })}
      {isTyping && <TypingIndicator />}
    </div>
  );
};

export default ChatContainer;
