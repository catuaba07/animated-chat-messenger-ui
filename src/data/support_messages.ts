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
    sender: "AI Support Agent (Bot)",
    text: "Hello! Welcome to Earth Defenders Support. How can I assist you today?",
    timestamp: "10:00 AM",
    isSentByMe: false,
  },
  {
    id: 2,
    sender: "User",
    text: "Hi, I'm having trouble accessing the satellite monitoring feature.",
    timestamp: "10:01 AM",
    isSentByMe: true,
  },
  {
    id: 3,
    sender: "AI Support Agent (Bot)",
    text: "I'm sorry to hear that. Let me help you troubleshoot. Could you please tell me:\n1. Which browser are you using?\n2. Have you cleared your cache recently?\n3. Are you getting any specific error messages?",
    timestamp: "10:02 AM",
    isSentByMe: false,
  },
  {
    id: 4,
    sender: "User",
    text: "I'm using Chrome, haven't cleared the cache, and I get a 'Loading Failed' message.",
    timestamp: "10:03 AM",
    isSentByMe: true,
  },
  {
    id: 5,
    sender: "AI Support Agent (Bot)",
    text: "Thank you for the information. Let's try these steps:\n1. Clear your browser cache\n2. Refresh the page\n3. Make sure you're logged in\n\nLet me know if you need help with any of these steps.",
    timestamp: "10:04 AM",
    isSentByMe: false,
  }
];