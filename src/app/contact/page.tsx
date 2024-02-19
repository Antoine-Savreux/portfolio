"use client";

import Title from "@/components/Title";

export default function ContactPage() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(name, email, message);
  };
  return (
    <main className="min-h-full flex flex-col items-center p-8 space-y-8">
      <Title title="Me contacter" />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nom :
          <input type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email :
          <input type="email" name="email" />
        </label>
        <label htmlFor="message">
          Message :
          <textarea name="message" />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
}
