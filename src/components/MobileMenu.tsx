import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, RefreshCw, SkipForward } from "lucide-react";
import { Button } from "./ui/button";
import ShareButton from "./ShareButton";

interface MobileMenuProps {
  onReset: () => void;
  onAdvance: () => void;
}

const MobileMenu = ({
  onReset,
  onAdvance,
}: MobileMenuProps) => {
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
        <DropdownMenuItem className="gap-2" onClick={onAdvance}>
          <SkipForward className="h-4 w-4" />
          Skip
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onClick={onReset}>
          <RefreshCw className="h-4 w-4" />
          Reset
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <ShareButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;