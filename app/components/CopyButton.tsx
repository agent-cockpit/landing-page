"use client";
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [label, setLabel] = useState("COPY");
  const copy = () => {
    navigator.clipboard.writeText(text);
    setLabel("COPIED");
    setTimeout(() => setLabel("COPY"), 1500);
  };
  return (
    <button className="copy-btn" onClick={copy}>{label}</button>
  );
}
