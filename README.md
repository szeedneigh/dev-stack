# DevStack 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&style=flat)](https://nextjs.org/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-0.6.0-blueviolet?style=flat)](https://ui.shadcn.com)
[![Aceternity UI](https://img.shields.io/badge/Aceternity_UI-0.3.4-ff69b4?style=flat)](https://aceternity.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-06B6D4?logo=tailwind-css&style=flat)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-2.39.0-3FCF8E?logo=supabase&style=flat)](https://supabase.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-3178C6?logo=typescript&style=flat)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/Zod-3.22.4-3B82F6?style=flat)](https://zod.dev)

> DevStack is a minimalist and modern web application designed to help developers easily find and access resources related to various technologies.

![DevStack Preview](./public/screenshot.png)

## 📌 Features

- 🎨 **Animated UI** with Aceternity components
- 🔍 **Advanced Search** (Title, Category, Tags)
- 📥 **Resource Submission** with validation
- ⚡ **Instant Filtering** using Fuse.js
- 📱 **Mobile-First** responsive design
- 🛡️ **Anonymous Voting** system
- 🛠️ **Developer Tools** (JSON Formatter, Converter)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Supabase account

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/devstack.git
    cd devstack
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    ```bash
    cp .env.example .env.local
    ```
    Update `.env.local` with your Supabase credentials:
    ```ini
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE_KEY=your-supabase-key
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

## 🧩 Tech Stack

| Technology       | Purpose                              | Documentation |
|------------------|--------------------------------------|---------------|
| Next.js 15       | React framework & App Router         | [Docs](https://nextjs.org/docs) |
| shadcn/ui        | Accessible UI components             | [Docs](https://ui.shadcn.com) |
| Aceternity       | Animated UI patterns                 | [Docs](https://aceternity.com) |
| Tailwind CSS     | Utility-first styling                | [Docs](https://tailwindcss.com) |
| Supabase         | Serverless PostgreSQL database       | [Docs](https://supabase.com) |
| TypeScript       | Type-safe development                | [Docs](https://www.typescriptlang.org/docs) |
| Zod              | Schema validation                    | [Docs](https://zod.dev) |

## 📂 Project Structure

The project structure is organized as follows:

- `src/`: Main source code
  - `app/`: App router entries
    - `(site)/`: Main layout
    - `resources/`: Resource management
    - `tools/`: Developer tools
  - `components/`: UI components
    - `ui/`: shadcn components
    - `animated/`: Aceternity components
  - `lib/`: Utilities & configs
  - `types/`: TypeScript definitions
  - `hooks/`: Custom React hooks
  - `public/`: Static assets

## 🌟 Features Roadmap

- Resource submission form
- Animated card grid
- Category filtering
- Upvoting system
- Bookmark management
- Developer tools dashboard
- Admin moderation panel

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

Built with ❤️ by Sidney John Sarcia  
[Report Bug](#) · [Request Feature](#)
