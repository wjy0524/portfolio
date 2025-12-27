"use client";

type Props = {
  size?: number;
};

export default function MemojiAvatar({ size = 96 }: Props) {
  return (
    <div
        style={{ width: size, height: size }}
    >
      <video
        src="/memoji/idle.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full rounded-full object-cover shadow-md"
      />
    </div>
  );
}
