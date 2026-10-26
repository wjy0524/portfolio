# Jaeyeon Won – Interactive Portfolio

This is my personal portfolio website built with **Next.js**, bootstrapped using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

The site features a **chat-based interface** that allows visitors to explore my experience, projects, and skills interactively.  
It is designed to showcase not only my work, but also my ability to design, structure, and ship real software systems.

---

## ✨ Features

- 💬 **Chat-based UI** for exploring experience, projects, and skills
- 🧭 **Right-side Dock** for detailed project and experience views
- 🌐 **Bilingual support (English / Korean)**
- 📱 **Responsive design** (desktop & mobile)
- 🎥 Support for **project images and videos**
- ✉️ Contact form integrated with email delivery
- 🧠 Clean separation of data, UI, and presentation logic

---

## 🛠 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Architecture**: Component-driven design
- **State Management**: React hooks
- **Email Integration**: Resend API
- **Deployment**: Vercel

---

## 📁 Project Structure

```txt
app/
├── components/
│   ├── chat/          # Chat UI, bubbles, options, previews
│   ├── sections/      # Experience, Projects, Skills sections
│   ├── layout/        # Header, Dock, navigation
│   └── avatar/        # Animated memoji avatar
│
├── data/
│   ├── experience.ts  # Experience data
│   ├── projects.ts    # Project data
│   └── skills.ts      # Skills data
│
├── lib/
│   └── i18n.ts        # English / Korean text dictionary
│
├── page.tsx           # Main page
└── layout.tsx         # Root layout

```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 🔐 Environment Variables

To enable the contact form email feature, create a `.env.local` file in the project root and add:

```bash
RESEND_API_KEY=your_resend_api_key_here
```
## 🌍 Live Demo
https://jaeyeonwon.vercel.app/

## 🎯 Why This Portfolio?

Rather than a static webpage, this portfolio uses a chat-based interface to guide visitors through my work.
This design reflects how I approach software engineering: focusing on clarity, user interaction, and structured problem-solving.
