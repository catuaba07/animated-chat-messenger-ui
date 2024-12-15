import { Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import { useToast } from "./ui/use-toast";

const ShareButton = () => {
  const location = useLocation();
  const { toast } = useToast();

  const handleShare = async () => {
    const url = window.location.origin + location.pathname + location.search;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Earth Defenders Assistant',
          url: url
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "The URL has been copied to your clipboard.",
        });
      } catch (error) {
        console.error('Error copying to clipboard:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to copy the URL.",
        });
      }
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={handleShare}
      className="hover:text-blue-700/80 flex gap-2 items-center"
    >
      <Share2 className="h-5 w-5" />
      Share
    </Button>
  );
};

export default ShareButton;