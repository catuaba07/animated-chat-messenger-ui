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
    text: "Welcome to the Indigenous Knowledge Systems Course! I'm here to help you navigate through the modules and assignments. What would you like to know about the course?",
    timestamp: "09:00 AM",
    isSentByMe: false,
  },
  {
    id: 2,
    sender: "Maria",
    text: "Hi! I'd like to know more about the course structure.",
    timestamp: "09:01 AM",
    isSentByMe: true,
  },
  {
    id: 3,
    sender: "AI Assistant (Bot)",
    text: "The course is divided into 4 modules:\n1. Traditional Ecological Knowledge\n2. Indigenous Agriculture Systems\n3. Cultural Preservation Methods\n4. Community-Based Research\n\nEach module includes:\n- Video lectures\n- Reading materials\n- Discussion forums\n- Practical assignments\n\nWould you like details about any specific module?",
    timestamp: "09:02 AM",
    isSentByMe: false,
  },
  {
    id: 4,
    sender: "Maria",
    text: "Yes, tell me more about the Traditional Ecological Knowledge module.",
    timestamp: "09:03 AM",
    isSentByMe: true,
  },
  {
    id: 5,
    sender: "AI Assistant (Bot)",
    text: "The Traditional Ecological Knowledge module covers:\n\n1. Understanding Local Ecosystems:\n- Flora and fauna identification\n- Seasonal patterns and indicators\n- Traditional conservation practices\n\n2. Sacred Natural Sites:\n- Cultural significance\n- Protection methods\n- Community governance\n\n3. Practical Activities:\n- Field visits to sacred sites\n- Elder interviews\n- Ecosystem mapping\n\nThe module takes 3 weeks to complete. Would you like to start with this module?",
    timestamp: "09:04 AM",
    isSentByMe: false,
  }
];