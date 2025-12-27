export default function TypingBubble() {
  return (
    <div className="flex justify-start">
      <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-bl-none text-sm flex gap-1">
        <Dot delay="0ms" />
        <Dot delay="150ms" />
        <Dot delay="300ms" />
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: string }) {
  return (
    <span
      className="animate-bounce"
      style={{ animationDelay: delay }}
    >
      .
    </span>
  );
}
