"use client";

import Title from "@/components/Title";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi de l'email");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="min-h-full flex flex-col items-center p-8 space-y-8">
      <Title title="Me contacter" />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nom :
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email :
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="message">
          Message :
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button>Envoyer</button>
      </form>
    </main>
  );
}
