import { messages } from "@/data/messages";
import ChatContainer from "@/components/ChatContainer";
import { Button } from "@/components/ui/button";
import { RefreshCw, ChevronDown, SkipForward } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [key, setKey] = useState(0);
  const [immediate, setImmediate] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [language, setLanguage] = useState("en");

  const [importedMessages, setImportedMessages] = useState(null);

  // Load Portuguese messages if needed
  useEffect(() => {
    if (language === "pt") {
      import("@/data/messages_pt.json").then((module) => {
        setImportedMessages(module.default);
      });
    }
  }, [language]);

  const currentMessages =
    language === "en" ? messages : importedMessages || messages;

  const handleReset = () => {
    setKey((prev) => prev + 1);
    setImmediate(false);
  };

  const handleAdvance = () => {
    setImmediate(true);
  };

  const scrollToBottom = () => {
    const chatContainer = document.querySelector(".chat-scroll-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const isNotAtBottom =
      target.scrollHeight - target.scrollTop - target.clientHeight > 20;
    setShowScrollButton(isNotAtBottom);
  };

  return (
    <div className="min-h-screen bg-chat-bg">
      <div className="max-w-3xl mx-auto h-screen flex flex-col">
        <div className="bg-chat-bubble-received/30 p-4 flex justify-between items-center">
          <h1 className="text-white text-xl font-semibold">
            Earth Defenders Assistant
          </h1>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="text-white hover:text-blue-700/80"
            >
              {language === "en" ? "PT" : "EN"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleAdvance}
              className="text-white hover:text-blue-700/80"
            >
              <SkipForward />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleReset}
              className="text-white hover:text-blue-700/80"
            >
              <RefreshCw className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div
          className="flex-1 overflow-y-auto chat-scroll-container relative"
          onScroll={handleScroll}
        >
          <ChatContainer
            key={key}
            messages={currentMessages}
            immediate={immediate}
            reset={handleReset}
          />
          {showScrollButton && (
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToBottom}
              className="fixed bottom-20 right-4 bg-chat-bubble-received/60 rounded-full text-white hover:bg-chat-bubble-received/80"
            >
              <ChevronDown />
            </Button>
          )}
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
