export interface Message {
  id: number;
  sender: string;
  text: string;
  timestamp: string;
  isSentByMe: boolean;
  mediaType?: "video" | "document" | "button";
  mediaUrl?: string;
  mediaTitle?: string;
  mediaSize?: string;
  buttonText?: string;
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
    text: "Lesson 1: Agroforestry Basics. Here are your learning materials:",
    timestamp: "09:03 AM",
    isSentByMe: false,
  },
  {
    id: 5,
    sender: "AI Tutor (Bot)",
    text: "📄 What is Agroforestry?",
    timestamp: "09:03 AM",
    isSentByMe: false,
    mediaType: "document",
    mediaUrl: "https://example.com/doc-agroforestry",
    mediaTitle: "Agroforestry_Basics.pdf",
    mediaSize: "2.3 MB"
  },
  {
    id: 6,
    sender: "AI Tutor (Bot)",
    text: "🎥 Introduction to Agroforestry Systems",
    timestamp: "09:03 AM",
    isSentByMe: false,
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/watch?v=example",
    mediaTitle: "Agroforestry_Intro.mp4",
    mediaSize: "15.7 MB"
  },
  {
    id: 7,
    sender: "AI Tutor (Bot)",
    text: "When you're ready to proceed with the challenges, click the button below:",
    timestamp: "09:04 AM",
    isSentByMe: false,
    mediaType: "button",
    buttonText: "Continue to Challenges"
  },
  {
    id: 8,
    sender: "AI Tutor (Bot)",
    text: "Great! Here's your first challenge:\nQuestion: What are the main benefits of agroforestry for the environment and local communities? Please provide at least two examples.",
    timestamp: "09:11 AM",
    isSentByMe: false,
  },
  {
    id: 9,
    sender: "Student",
    text: "It helps prevent deforestation and improves soil quality. It also provides food and income for local communities.",
    timestamp: "09:12 AM",
    isSentByMe: true,
  },
  {
    id: 10,
    sender: "AI Tutor (Bot)",
    text: "Well done! Your answer is correct. Agroforestry prevents deforestation by integrating trees with farming, and it improves soil quality through organic matter. It also sustains local livelihoods. Let's move to Lesson 2!",
    timestamp: "09:13 AM",
    isSentByMe: false,
  },
  {
    id: 11,
    sender: "AI Tutor (Bot)",
    text: "Lesson 2: Designing Agroforestry Systems",
    timestamp: "09:14 AM",
    isSentByMe: false,
  },
  {
    id: 12,
    sender: "AI Tutor (Bot)",
    text: "📄 Design Principles for Agroforestry Systems",
    timestamp: "09:14 AM",
    isSentByMe: false,
    mediaType: "document",
    mediaUrl: "https://example.com/doc-design-principles",
    mediaTitle: "Design_Principles.pdf",
    mediaSize: "4.1 MB"
  },
  {
    id: 13,
    sender: "AI Tutor (Bot)",
    text: "🎥 Agroforestry in Action: Case Studies",
    timestamp: "09:14 AM",
    isSentByMe: false,
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/watch?v=example2",
    mediaTitle: "Agroforestry_Cases.mp4",
    mediaSize: "23.4 MB"
  },
  {
    id: 14,
    sender: "AI Tutor (Bot)",
    text: "Ready for the next challenge?",
    timestamp: "09:15 AM",
    isSentByMe: false,
    mediaType: "button",
    buttonText: "Continue to Challenges"
  }
];