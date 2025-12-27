"use client";

import { useState } from "react";

type Props = {
  onSend: (text: string) => Promise<void>;
  disabled?: boolean;
};

export default function ChatInput({ onSend, disabled }: Props) {
  const [value, setValue] = useState("");
  const [isSending, setIsSending] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-white border-t px-4 py-3">
      <div className="max-w-5xl mx-auto flex gap-2">
        <input
          value={value}
          disabled={disabled || isSending}
          onChange={(e) => setValue(e.target.value)}
          placeholder={
            disabled
              ? "You can send another message in a few seconds…"
              : "Send me a message with your email address..."
          }
          className="
            flex-1 px-4 py-2
            border rounded-full
            focus:outline-none
            disabled:bg-gray-100
          "
        />

        <button
          disabled={disabled || isSending}
          onClick={async () => {
            if (!value.trim()) return;
            setIsSending(true);
            await onSend(value);
            setValue("");
            setIsSending(false);
          }}
          className="
            px-4 py-2 rounded-full
            bg-black text-white
            disabled:opacity-50
          "
        >
          {isSending ? "Sending…" : "Send"}
        </button>
      </div>
    </div>
  );
}
