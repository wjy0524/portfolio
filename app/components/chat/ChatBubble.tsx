type ChatBubbleProps = {
  role: "bot" | "user";
  content: string;
};

export default function ChatBubble({ role, content }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
        isUser
          ? "self-end bg-blue-500 text-white"
          : "self-start bg-gray-200 text-black"
      }`}
    >
      {content}
    </div>
  );
}
