import { messages } from "@/data/messages";
import ChatContainer from "@/components/ChatContainer";

const Index = () => {
  return (
    <div className="min-h-screen bg-chat-bg">
      <div className="max-w-3xl mx-auto h-screen flex flex-col">
        <div className="bg-chat-bubble-received/30 p-4">
          <h1 className="text-white text-xl font-semibold">Chat Interface</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          <ChatContainer messages={messages} />
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