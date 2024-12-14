export interface Message {
  id: number;
  sender: string;
  text: string;
  timestamp: string;
  isSentByMe: boolean;
}

export const messages: Message[] = [
  {
    id: 1,
    sender: "AI Assistant (Bot)",
    text: "Hello! I'm your Earth Defenders Tech Support assistant. I can help you with:\n- Solar panel installation\n- Water filtration systems\n- Eco-monitoring devices\n- Renewable energy solutions\n\nWhat can I help you with today?",
    timestamp: "10:00 AM",
    isSentByMe: false,
  },
  {
    id: 2,
    sender: "Maria",
    text: "Hi, I'm having issues with the solar panel system installed last week.",
    timestamp: "10:01 AM",
    isSentByMe: true,
  },
  {
    id: 3,
    sender: "AI Assistant (Bot)",
    text: "I'm sorry to hear that. Let me help you troubleshoot. Could you tell me:\n1. Is the system showing any error lights?\n2. Are you getting any power output?\n3. Have you checked the battery display?",
    timestamp: "10:02 AM",
    isSentByMe: false,
  },
  {
    id: 4,
    sender: "Maria",
    text: "The battery display shows 'Low Voltage' and there's a red light blinking.",
    timestamp: "10:03 AM",
    isSentByMe: true,
  },
  {
    id: 5,
    sender: "AI Assistant (Bot)",
    text: "I understand the issue. This usually indicates one of two things:\n1. The solar panels aren't receiving enough sunlight\n2. There might be a loose connection\n\nLet's check a few things:\n- Are the panels clean and free from debris?\n- Are there any new shade sources (tree growth, new structures)?\n- Can you verify all cables are firmly connected?\n\nWould you like me to guide you through these checks step by step?",
    timestamp: "10:04 AM",
    isSentByMe: false,
  }
];