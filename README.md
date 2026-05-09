# 🐉 Dragon News

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-4-purple?logo=daisyui)](https://daisyui.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://dragon-news-next-website.vercel.app)

**Live Demo:** [https://dragon-news-next-website.vercel.app](https://dragon-news-next-website.vercel.app)

Dragon News is a modern, full-stack news platform that delivers the latest breaking news, international headlines, sports updates, and entertainment news. Built with Next.js 15, Tailwind CSS, and Better Auth for authentication.

## ✨ Features

- 📰 **Real-time News Fetching** - Live news data from external API
- 🔍 **Category Filtering** - Browse news by categories (Breaking, Sports, Entertainment, etc.)
- 🔐 **Authentication** - Email/Password + Google OAuth + GitHub OAuth
- 💾 **Save for Later** - Bookmark articles to read later (localStorage)
- 📤 **Share Articles** - Share news via Web Share API or copy link
- ⭐ **Rating System** - Visual star ratings from API data
- 👁️ **View Count** - Track article popularity
- 🔥 **Trending Badge** - Highlight trending stories
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Built with Tailwind CSS and DaisyUI components
- ⚡ **Fast Performance** - Next.js App Router with server components

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **Tailwind CSS** | Utility-first styling |
| **DaisyUI** | Component library |
| **Better Auth** | Authentication (Email + Google + GitHub) |
| **MongoDB** | Database for user data |
| **React Hook Form** | Form handling & validation |
| **React Toastify** | Toast notifications |
| **React Icons** | Icon library |

## 📁 Project Structure

```
dragon-news-webpage/
├── app/
│ ├── (main)/
│ │ ├── category/[id]/page.jsx # Category news page
│ │ ├── news/[id]/page.jsx # News details page
│ │ └── page.jsx # Home page
│ ├── auth/
│ │ ├── login/page.jsx # Login page
│ │ ├── register/page.jsx # Register page
│ │ └── layout.jsx # Auth layout
│ ├── api/auth/[...all]/route.js # Better Auth API routes
│ ├── layout.jsx # Root layout
│ └── globals.css # Global styles
├── components/
│ └── homepage/
│ ├── news/
│ │ ├── LeftSidebar.jsx # Category sidebar
│ │ ├── NewsCard.jsx # News card component
│ │ └── RightSideBar.jsx # Login & social sidebar
│ ├── shared/
│ │ └── Navbar.jsx # Navigation bar
│ └── FooterPage.jsx # Footer component
├── lib/
│ ├── auth.js # Better Auth configuration
│ ├── auth-client.js # Better Auth client
│ └── dataFetching.js # API calls
├── public/
│ └── assets/ # Static assets
├── .env.local # Environment variables
└── package.json
```


## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm
- MongoDB Atlas account (or local MongoDB)
- Google OAuth credentials (for Google login)
- GitHub OAuth credentials (for GitHub login)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/dragon-news-next-website.git
cd dragon-news-next-website
```
