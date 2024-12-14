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
    sender: "Student",
    text: "I'd like to sign up for the Agroforestry course.",
    timestamp: "09:00 AM",
    isSentByMe: true,
  },
  {
    id: 2,
    sender: "AI Manager Agent (Bot)",
    text: "Welcome to the Agroforestry Practices for Sustainable Livelihoods course! You're now enrolled. Your AI tutor will guide you through the lessons. Let's begin!",
    timestamp: "09:01 AM",
    isSentByMe: false,
  },
  {
    id: 3,
    sender: "AI Tutor (Bot)",
    text: "Hi! Welcome to the Agroforestry course. This course has 3 lessons covering sustainable agroforestry practices. After each lesson, you'll face challenges to test your understanding. Let's start with Lesson 1: 'Introduction to Agroforestry.'",
    timestamp: "09:02 AM",
    isSentByMe: false,
  },
  {
    id: 4,
    sender: "AI Tutor (Bot)",
    text: "Lesson 1: Agroforestry Basics. Here are the materials:\n1) A document titled 'What is Agroforestry?' (https://example.com/doc-agroforestry)\n2) A video explaining agroforestry systems (https://example.com/video-intro)\n\nPlease go through them and click 'Proceed to Challenges' when ready.",
    timestamp: "09:03 AM",
    isSentByMe: false,
  },
  {
    id: 5,
    sender: "Student",
    text: "I've reviewed the materials. Proceed to Challenges.",
    timestamp: "09:10 AM",
    isSentByMe: true,
  },
  {
    id: 6,
    sender: "AI Tutor (Bot)",
    text: "Great! Here's your first challenge:\nQuestion: What are the main benefits of agroforestry for the environment and local communities? Please provide at least two examples.",
    timestamp: "09:11 AM",
    isSentByMe: false,
  },
  {
    id: 7,
    sender: "Student",
    text: "It helps prevent deforestation and improves soil quality. It also provides food and income for local communities.",
    timestamp: "09:12 AM",
    isSentByMe: true,
  },
  {
    id: 8,
    sender: "AI Tutor (Bot)",
    text: "Well done! Your answer is correct. Agroforestry prevents deforestation by integrating trees with farming, and it improves soil quality through organic matter. It also sustains local livelihoods. Let's move to the next lesson!",
    timestamp: "09:13 AM",
    isSentByMe: false,
  }
];