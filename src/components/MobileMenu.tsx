import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface MobileMenuProps {
  currentStory: string;
  currentLanguage: string;
  onStoryChange: (story: string) => void;
  onLanguageChange: (lang: string) => void;
}

const MobileMenu = ({
  currentStory,
  currentLanguage,
  onStoryChange,
  onLanguageChange,
}: MobileMenuProps) => {
  const navigate = useNavigate();

  const handleStoryChange = (story: string) => {
    onStoryChange(story);
    navigate(`/${story}?lang=${currentLanguage}`);
  };

  const handleLanguageChange = (lang: string) => {
    onLanguageChange(lang);
    navigate(`/${currentStory}?lang=${lang}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-blue-700/80 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleStoryChange("funding")}>
          Funding Opportunity Plugin
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleStoryChange("course")}>
          Course Plugin
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleStoryChange("support")}>
          Product Support Plugin
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange(currentLanguage === "en" ? "pt" : "en")}>
          {currentLanguage === "en" ? "Portuguese" : "English"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;