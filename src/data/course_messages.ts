export interface Message {
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
    sender: "Student",
    text: "Hi!",
    timestamp: "09:00 AM",
    isSentByMe: true,
  },
  {
    sender: "AI Assistant (Bot)",
    text: "Hello! I'm your learning assistant. I can guide you through a variety of courses. Here are some options you might be interested in:",
    timestamp: "09:01 AM",
    isSentByMe: false,
  },
  {
    sender: "AI Assistant (Bot)",
    text: "1️⃣ Agroforestry Practices for Sustainable Livelihoods\n2️⃣ Seed Collection Techniques\n3️⃣ Bioeconomy Business Development\nWhich course would you like to enroll in?",
    timestamp: "09:01 AM",
    isSentByMe: false,
  },
  {
    sender: "Student",
    text: "I'd like to sign up for the Agroforestry course.",
    timestamp: "09:02 AM",
    isSentByMe: true,
  },
  {
    sender: "AI Manager Agent (Bot)",
    text: "Welcome to the Agroforestry Practices for Sustainable Livelihoods course! You're now enrolled. Your AI tutor will guide you through the lessons. Let's begin!",
    timestamp: "09:03 AM",
    isSentByMe: false,
  },
  {
    sender: "AI Tutor (Bot)",
    text: "Hi! Welcome to the Agroforestry course. This course has 3 lessons covering sustainable agroforestry practices. After each lesson, you'll face challenges to test your understanding. Let's start with Lesson 1: 'Introduction to Agroforestry.'",
    timestamp: "09:04 AM",
    isSentByMe: false,
  },
  {
    sender: "AI Tutor (Bot)",
    text: "Lesson 1: Agroforestry Basics. Here are your learning materials:",
    timestamp: "09:05 AM",
    isSentByMe: false,
  },
  {
    sender: "AI Tutor (Bot)",
    text: "📄 What is Agroforestry?",
    timestamp: "09:05 AM",
    isSentByMe: false,
    mediaType: "document",
    mediaUrl: "https://example.com/doc-agroforestry",
    mediaTitle: "Agroforestry_Basics.pdf",
    mediaSize: "2.3 MB",
  },
  {
    sender: "AI Tutor (Bot)",
    text: "🎥 Introduction to Agroforestry Systems",
    timestamp: "09:05 AM",
    isSentByMe: false,
    mediaType: "video",
    mediaUrl: "https://www.sample-videos.com/video321/mp4/360/big_buck_bunny_360p_1mb.mp4",
    mediaTitle: "Agroforestry_Intro.mp4",
    mediaSize: "15.7 MB",
  },
  {
    sender: "AI Tutor (Bot)",
    text: "When you're ready to proceed with the challenges, click the button below:",
    timestamp: "09:06 AM",
    isSentByMe: false,
    mediaType: "button",
    buttonText: "Continue to Challenges",
  },
  {
    sender: "AI Tutor (Bot)",
    text: "Great! Here's your first challenge:\nQuestion: What are the main benefits of agroforestry for the environment and local communities? Please provide at least two examples.",
    timestamp: "09:11 AM",
    isSentByMe: false,
  },
  {
    sender: "Student",
    text: "It helps prevent deforestation and improves soil quality. It also provides food and income for local communities.",
    timestamp: "09:12 AM",
    isSentByMe: true,
  },
  {
    sender: "AI Tutor (Bot)",
    text: "Well done! Your answer is correct. Agroforestry prevents deforestation by integrating trees with farming, and it improves soil quality through organic matter. It also sustains local livelihoods. Let's move to Lesson 2!",
    timestamp: "09:13 AM",
    isSentByMe: false,
  },
  {
    sender: "AI Tutor (Bot)",
    text: "Lesson 2: Designing Agroforestry Systems",
    timestamp: "09:14 AM",
    isSentByMe: false,
  },
  {
    sender: "AI Tutor (Bot)",
    text: "📄 Design Principles for Agroforestry Systems",
    timestamp: "09:14 AM",
    isSentByMe: false,
    mediaType: "document",
    mediaUrl: "https://example.com/doc-design-principles",
    mediaTitle: "Design_Principles.pdf",
    mediaSize: "4.1 MB",
  },
  {
    sender: "AI Tutor (Bot)",
    text: "🎥 Agroforestry in Action: Case Studies",
    timestamp: "09:14 AM",
    isSentByMe: false,
    mediaType: "video",
    mediaUrl: "https://www.sample-videos.com/video321/mp4/360/big_buck_bunny_360p_1mb.mp4",
    mediaTitle: "Agroforestry_Cases.mp4",
    mediaSize: "23.4 MB",
  },
  {
    sender: "AI Tutor (Bot)",
    text: "Ready for the next challenge?",
    timestamp: "09:15 AM",
    isSentByMe: false,
    mediaType: "button",
    buttonText: "Continue to Challenges",
  },
  {
    sender: "AI Tutor (Bot)",
    text: "Here's your challenge:\nQuestion: If you were to design an agroforestry system for a community, what species of trees and crops would you suggest and why?",
    timestamp: "09:16 AM",
    isSentByMe: false,
  },
  {
    sender: "Student",
    text: "I’m not sure. Could I talk to a human tutor?",
    timestamp: "09:17 AM",
    isSentByMe: true
  },
  {
    sender: "AI Tutor (Bot)",
    text: "Sure, get in touch with Lucas",
    timestamp: "09:17 AM",
    isSentByMe: false,
    mediaType: "button",
    buttonText: "Talk to Lucas",

  },
  {
    sender: "AI Tutor (Bot)",
    text: "When you've clarified your question, let's move to the next lesson. Ready for the next challenge?",
    timestamp: "09:25 AM",
    isSentByMe: false,
    mediaType: "button",
    buttonText: "Continue to Challenges",

  },
  {
    sender: "AI Tutor (Bot)",
    text: "Great! Based on your clarification, let's revisit the challenge. What species would you select for an agroforestry system, and why?",
    timestamp: "09:26 AM",
    isSentByMe: false,
  },
  {
    sender: "Student",
    text: "I’d use inga for nitrogen fixation, cassava for quick income, and cocoa for long-term value. They complement each other ecologically and economically.",
    timestamp: "09:27 AM",
    isSentByMe: true,
  },
  {
    sender: "AI Tutor (Bot)",
    text: "Excellent answer! You've successfully completed this lesson. Let's move to Lesson 3: Overcoming Challenges in Agroforestry.",
    timestamp: "09:28 AM",
    isSentByMe: false,
  },
  {
    sender: "AI Tutor (Bot)",
    text: "📄 Common Challenges in Agroforestry",
    timestamp: "09:29 AM",
    isSentByMe: false,
    mediaType: "document",
    mediaUrl: "https://example.com/doc-challenges",
    mediaTitle: "Agroforestry_Challenges.pdf",
    mediaSize: "5.6 MB",
  },
  {
    sender: "AI Tutor (Bot)",
    text: "🎥 Managing Pests in Agroforestry",
    timestamp: "09:29 AM",
    isSentByMe: false,
    mediaType: "video",
    mediaUrl: "https://www.sample-videos.com/video321/mp4/360/big_buck_bunny_360p_1mb.mp4",
    mediaTitle: "Pest_Management.mp4",
    mediaSize: "12.9 MB",
  },
  {
    sender: "AI Tutor (Bot)",
    text: "Proceed to challenges when you're ready.",
    timestamp: "09:30 AM",
    isSentByMe: false,
    mediaType: "button",
    buttonText: "Continue to Challenges",
  },
  {
    sender: "AI Tutor (Bot)",
    text: "Here's your challenge:\nQuestion: You notice beetles damaging açai fruits in your agroforestry system. What steps would you take to address this problem?",
    timestamp: "09:31 AM",
    isSentByMe: false,
  },
  {
    sender: "Student",
    text: "I would use neem oil as a natural pesticide and monitor the affected areas regularly.",
    timestamp: "09:32 AM",
    isSentByMe: true,
  },
  {
    sender: "AI Tutor (Bot)",
    text: "Correct! Neem oil is an effective natural pesticide. Monitoring ensures early detection of pests. Congratulations, you've completed the Agroforestry course! Would you like a summary of what you've learned?",
    timestamp: "09:33 AM",
    isSentByMe: false,
    mediaType: "button",
    buttonText: "Get Course Summary",
  }
];