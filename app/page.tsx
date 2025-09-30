"use client";

import { useChat } from "ai/react";
import Image from "next/image";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat"
  });

  return (
    <div className="container">
      <div className="card">
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
          <Image src="/logo.svg" alt="SellMyCybertruck" width={180} height={28}/>
        </div>
        <h1>SMC Intake</h1>
        <p className="muted">Answer a few questions and we’ll prepare a cash offer for your Cybertruck.</p>

        <div className="chat">
          {messages.map(m => (
            <div key={m.id} className={`msg ${m.role === "user" ? "me" : "bot"}`}>
              <b>{m.role === "user" ? "You" : "SMC"}</b><br/>{m.content}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="input">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder={isLoading ? "..." : "Type your reply"}
            aria-label="Message"
            disabled={isLoading}
          />
          <button disabled={isLoading}>{isLoading ? "Sending…" : "Send"}</button>
        </form>

        <p className="footer">
          Demo for <a href="https://sellmycybertruck.com" target="_blank" rel="noreferrer">SellMyCybertruck.com</a>
        </p>
      </div>
    </div>
  );
}