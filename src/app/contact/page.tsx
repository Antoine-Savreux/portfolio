"use client";

import Title from "@/components/Title";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formValidate, setFormValidate] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const router = useRouter();

  const formValidation = () => {
    if (name.trim() != "" && email.trim() != "" && message.trim() != "") {
      setFormValidate(true);
    } else {
      setFormValidate(false);
    }
  };

  useEffect(() => {
    formValidation();
  }, [name, email, message]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        setValidationMessage(
          "Super ! Votre message a été envoyé avec succès. Vous allez être redirigé dans un instant..."
        );
        setTimeout(() => router.push("/"), 4000);
      }
    } catch (error) {
      setValidationMessage(
        "Mince... Quelque chose s'est mal passé. Le message n'a pas été distribué. Réessayez plus tard."
      );
    }
  };
  return (
    <main className="min-h-full flex flex-col items-center p-8 space-y-8 bg-bgAppLight">
      <Title title="Me contacter" />
      <form className="flex flex-col space-y-8 w-full" onSubmit={handleSubmit}>
        <label
          className="flex flex-col text-lg font-semibold text-secondary"
          htmlFor="name"
        >
          Nom :
          <input
            className="text-sm text-secondary font-normal p-2 rounded-lg border-2 border-secondary/50 mt-2 focus:scale-105 focus:outline-primary/100"
            type="text"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label
          className="flex flex-col text-lg font-semibold text-secondary"
          htmlFor="email"
        >
          Email :
          <input
            className="text-sm text-secondary font-normal p-2 rounded-lg border-2 border-secondary/50 focus:scale-105 focus:outline-primary/100 mt-2"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label
          className="flex flex-col text-lg font-semibold text-secondary"
          htmlFor="message"
        >
          Message :
          <textarea
            className="text-sm text-secondary font-normal p-2 rounded-lg border-2 border-secondary/50 focus:scale-105 focus:outline-primary/100 h-36 mt-2"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button
          disabled={!formValidate}
          className="bg-primary px-6 py-3 text-xl font-semibold text-lightText rounded-full justify-center mt-8 disabled:opacity-50"
        >
          Envoyer
        </button>
        <span className="text-primary text-lg">{validationMessage}</span>
      </form>
    </main>
  );
}
