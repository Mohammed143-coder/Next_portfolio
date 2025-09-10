"use client";
import { useState } from "react";
import { RiRobot3Line } from "react-icons/ri";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();

    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, newMessage] }),
    });

    const data = await res.json();
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.reply },
    ]);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 flex items-center justify-center rounded-full 
        bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
        text-white shadow-lg animate-bounce hover:scale-110 transition"
      >
        <RiRobot3Line size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 md:right-4 w-80 md:w-96 h-96 bg-white 
          shadow-2xl rounded-2xl flex flex-col border overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
            text-white font-semibold p-3">
            🤖 Junaith AI Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] ${
                  m.role === "user"
                    ? "ml-auto bg-cyan-100 text-cyan-900"
                    : "mr-auto bg-gray-200 text-gray-900"
                }`}
              >
                {m.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="flex p-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow border rounded-lg px-3 py-2 text-sm focus:outline-none"
              placeholder="Ask me..."
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r 
              from-cyan-400 via-purple-500 to-pink-500 text-white font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
