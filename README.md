# DevGPT - Your AI-Powered Code Review Assistant
### DevGPT is an intelligent code reviewer that analyzes your code to find bugs, suggest improvements, and provide corrected code snippets. Powered by the Gemini API, it helps developers enhance code quality and learn best practices.

Live Website: https://dev-gpt-seven.vercel.app/

🚀 About The Project
In the fast-paced world of software development, maintaining high-quality code is crucial. DevGPT acts as an automated pair programmer, reviewing your code and providing instant, insightful feedback. Whether you're a beginner learning to code or an experienced developer looking for a second pair of eyes, DevGPT is here to help you write cleaner, more efficient, and bug-free code.

This tool leverages the power of Google's Gemini API to deliver nuanced and context-aware code analysis.

## ✨ Key Features
🐞 Bug Detection: Intelligently scans your code to identify potential bugs and logical errors.

💡 Improvement Suggestions: Recommends best practices, performance optimizations, and refactoring opportunities.

✅ Corrected Code: Provides clean, corrected code snippets that you can directly use.

📚 Additional Insights: Offers explanations and additional points to deepen your understanding of the suggestions.

🎨 Syntax Highlighting: Integrates Prism.js for a beautiful and readable code editing experience.

💻 Multi-language Support: Analyze code in various programming languages.

## 🛠️ Tech Stack
DevGPT is built with a modern and powerful tech stack:

### Frontend:

React.js - A JavaScript library for building user interfaces.

Prism.js - For lightweight and extensible syntax highlighting.

react-code-editor - The code editor component.

### Backend:

Node.js - JavaScript runtime environment.

Express.js - Fast, unopinionated, minimalist web framework for Node.js.

### AI:

Google Gemini API - The core engine for code analysis and generation.

⚙️ Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Make sure you have Node.js and npm installed on your machine.

Node.js (which includes npm)

You will also need a Google Gemini API Key. You can get one from Google AI Studio.

Installation
Clone the repository:
```
git clone [https://github.com/DeepanshuSehrawat/DevGPT.git](https://github.com/DeepanshuSehrawat/DevGPT.git)
```
Navigate to the project directory:
```
cd DevGPT
```

Install Backend Dependencies:
```
cd server
npm install
```
Install Frontend Dependencies:
```
cd ../client
npm install
```
Configuration
In the server directory, create a .env file.

Add your Gemini API key to the .env file:
```
GEMINI_API_KEY=YOUR_API_KEY_HERE
```
Running the Application
Start the Backend Server:

Navigate to the server directory and run:
```
npm start
```
The server will start on http://localhost:8000.

Start the Frontend Development Server:

In a new terminal, navigate to the client directory and run:
```
npm start
```
The React application will open in your browser at http://localhost:3000.

usage
Open the web application in your browser.

Paste your code into the editor on the left.

Select the programming language of your code from the dropdown menu.

Click the "Analyze Code" button.

Within seconds, the analysis report, including bugs, improvements, and corrected code, will appear on the right.


## Happy Coding!
