# Earth Defenders Assistant - Interactive User Stories

An interactive chat interface designed to simulate WhatsApp-style conversations, providing a dynamic platform to showcase user stories for the [Earth Defenders Assistant](https://github.com/digidem/earth-defenders-assistant) project.

**Live Demo**: [Explore the Demo](https://eda-user-story.surge.sh/)  

## Key Features

- **WhatsApp-style Chat Interface**: Experience a familiar and intuitive chat layout.
- **Animated Typing Indicators**: Real-time feedback with smooth animations.
- **Mobile-Responsive Design**: Seamless experience across all devices.
- **Share Functionality**: Easily share conversations and stories.
- **Interactive Story Progression**: Engage with evolving narratives.

## Technologies Utilized

This project leverages cutting-edge web technologies:

- **React**: For building user interfaces.
- **TypeScript**: Ensuring type safety and scalability.
- **Tailwind CSS**: For rapid and responsive UI styling.
- **shadcn/ui Components**: Modular and reusable UI components.
- **Vite**: A fast and modern build tool.

## Getting Started

Ensure you have Node.js and npm installed. You can [install them using nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

### Installation Steps

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/luandro/animated-chat-messenger-ui.git
   cd animated-chat-messenger-ui
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.


## Creating New User Stories

To create new user stories for the Earth Defenders Assistant Chat Interface, follow these steps to add JSON and TypeScript files according to the specified format.

### Step 1: Message Structure

Ensure your messages adhere to the `Message` interface. Each message should include the following properties:

- `sender`: The name of the message sender.
- `text`: The content of the message.
- `timestamp`: The time the message was sent.
- `isSentByMe`: A boolean indicating if the message was sent by the user.
- Optional properties for media messages:
  - `mediaType`: Type of media, can be "video", "document", or "button".
  - `mediaUrl`: URL to the media file.
  - `mediaTitle`: Title of the media.
  - `mediaSize`: Size of the media file.
  - `buttonText`: Text for button-type media.

### Step 2: Create a JSON File and Translation

Create a JSON file in the `src/data/` directory. This file should contain an array of message objects following the `Message` interface. Additionally, create a translation file to support multiple languages for the messages.
