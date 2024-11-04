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
    sender: "John",
    text: "Hey @Sarah, how's the project going?",
    timestamp: "09:30",
    isSentByMe: false
  },
  {
    id: 2,
    sender: "Sarah",
    text: "Hi! It's going well. @John I'll send you the updates soon.",
    timestamp: "09:32",
    isSentByMe: true
  },
  {
    id: 3,
    sender: "John",
    text: "Great! @Mike should take a look too when you're done.",
    timestamp: "09:33",
    isSentByMe: false
  },
  {
    id: 4,
    sender: "Sarah",
    text: "Sure thing! I'll make sure to include @Mike in the review.",
    timestamp: "09:35",
    isSentByMe: true
  }
];