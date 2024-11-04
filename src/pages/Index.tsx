import { messages } from "@/data/messages";
import ChatContainer from "@/components/ChatContainer";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [key, setKey] = useState(0);

  const handleReset = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-chat-bg">
      <div className="max-w-3xl mx-auto h-screen flex flex-col">
        <div className="bg-chat-bubble-received/30 p-4 flex justify-between items-center">
          <h1 className="text-white text-xl font-semibold">Earth Defenders Assistant</h1>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleReset}
            className="text-white hover:text-white/80"
          >
            <RefreshCw className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <ChatContainer key={key} messages={messages} />
        </div>
        <div className="p-4 bg-chat-bubble-received/30">
          <div className="bg-chat-bubble-received rounded-full px-4 py-2 text-gray-400">
            Type a message...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;