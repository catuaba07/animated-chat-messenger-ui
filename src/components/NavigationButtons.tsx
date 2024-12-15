import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Share2, EllipsisVertical, RefreshCw, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useToast } from "./ui/use-toast";

export default ({
  onReset,
  onAdvance,
}: {
  onReset: () => void;
  onAdvance: () => void;
}) => {
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
    <div className="flex gap-2">
      <div className="hidden md:flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onAdvance}
          className="text-white hover:text-blue-700/80"
        >
          <SkipForward className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onReset}
          className="text-white hover:text-blue-700/80"
        >
          <RefreshCw className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleShare}
          className="text-white hover:text-blue-700/80"
        >
          <Share2 className="h-5 w-5" />
        </Button>
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-blue-700/80"
            >
              <EllipsisVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="gap-2" onClick={onAdvance}>
              <SkipForward className="h-4 w-4" />
              Skip
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2" onClick={onReset}>
              <RefreshCw className="h-4 w-4" />
              Reset
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
              Share
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};