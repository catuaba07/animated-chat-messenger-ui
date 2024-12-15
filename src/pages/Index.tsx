import { messages as fundingMessages } from "@/data/grant_messages";
import { messages as courseMessages } from "@/data/course_messages";
import { messages as supportMessages } from "@/data/support_messages";
import ChatContainer from "@/components/ChatContainer";
import { Button } from "@/components/ui/button";
import { RefreshCw, Info, SkipForward } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate, useLocation } from "react-router-dom";
import ShareButton from "@/components/ShareButton";
import MobileMenu from "@/components/MobileMenu";

const Index = () => {
  const [key, setKey] = useState(0);
  const [immediate, setImmediate] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Parse URL parameters
  const searchParams = new URLSearchParams(location.search);
  const [language, setLanguage] = useState(searchParams.get("lang") || "en");
  const [story, setStory] = useState(searchParams.get("story") || "funding");

  const [importedMessages, setImportedMessages] = useState(null);

  useEffect(() => {
    // Update URL when story or language changes
    navigate(`/${story}?lang=${language}`, { replace: true });

    if (language === "pt") {
      let messageFile = "";
      switch (story) {
        case "funding":
          messageFile = "@/data/messages_pt.json";
          break;
        case "course":
          messageFile = "@/data/course_messages_pt.json";
          break;
        case "support":
          messageFile = "@/data/support_messages_pt.json";
          break;
      }
      import(messageFile).then((module) => {
        setImportedMessages(module.default);
      });
    }
  }, [language, story, navigate]);

  const getMessages = () => {
    if (language === "pt") {
      return importedMessages || [];
    }
    
    switch (story) {
      case "funding":
        return fundingMessages;
      case "course":
        return courseMessages;
      case "support":
        return supportMessages;
      default:
        return fundingMessages;
    }
  };

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

  const stories = {
    funding: "Funding Opportunity Plugin",
    course: "Course Plugin",
    support: "Product Support Plugin"
  };

  return (
    <div className="min-h-screen bg-chat-bg">
      <div className="max-w-3xl mx-auto h-screen flex flex-col">
        <div className="bg-chat-bubble-received/30 p-4 flex justify-between items-center">
          <div className="hidden md:block">
            <Select value={story} onValueChange={(value) => setStory(value)}>
              <SelectTrigger className="w-[200px] bg-chat-bubble-received/60 border-none text-white">
                <SelectValue placeholder="Select story" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(stories).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <ShareButton />
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-blue-700/80"
                >
                  <Info className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>About Earth Defenders Assistant</DialogTitle>
                  <DialogDescription>
                    <p className="mt-2">
                      Earth Defenders Assistant is an AI-powered chat interface designed to help environmental activists and organizations.
                    </p>
                    <p className="mt-2">
                      Visit our{" "}
                      <a
                        href="https://github.com/yourusername/earth-defenders-assistant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        GitHub repository
                      </a>
                      {" "}for more information.
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Button
              variant="ghost"
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="text-white hover:text-blue-700/80 hidden md:inline-flex"
            >
              {language === "en" ? "PT" : "EN"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleAdvance}
              className="text-white hover:text-blue-700/80"
            >
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleReset}
              className="text-white hover:text-blue-700/80"
            >
              <RefreshCw className="h-5 w-5" />
            </Button>
            <MobileMenu
              currentStory={story}
              currentLanguage={language}
              onStoryChange={setStory}
              onLanguageChange={setLanguage}
            />
          </div>
        </div>
        <div
          className="flex-1 overflow-y-auto chat-scroll-container relative"
          onScroll={handleScroll}
        >
          <ChatContainer
            key={key}
            messages={getMessages()}
            immediate={immediate}
            reset={handleReset}
          />
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
