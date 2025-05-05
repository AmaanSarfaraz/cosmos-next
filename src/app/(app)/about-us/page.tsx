"use client";

import { useEffect, useState } from "react";

interface Message {
  id: number;
  sender: string;
  content: string;
}

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("/api/fetch-dummy-api")
      .then((res) => res.json())
      .then((data) => setMessages(data.messages));
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      {messages.map((msg) => (
        <p key={msg.id}>
          <strong>{msg.sender}</strong>: {msg.content}
        </p>
      ))}
    </div>
  );
}
