// app/components/chat/SocialCard.tsx
"use client";

import { Social } from "@/data/socials";

type Props = {
  social: Social;
};

export default function SocialCard({ social }: Props) {
  const Icon = social.icon;

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex items-center gap-4
        border rounded-xl p-5
        transition
        hover:bg-gray-50
      "
    >
      {/* Icon */}
      <div
        className={`
          text-gray-400
          transition
          ${social.hoverClass}
        `}
      >
        <Icon className="w-7 h-7" />
      </div>

      {/* Text */}
      <div>
        <h3 className="font-semibold">{social.title}</h3>
        <p className="text-sm text-gray-500">
          See what I am up to
        </p>
      </div>
    </a>
  );
}
