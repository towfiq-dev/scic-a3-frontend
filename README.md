# Elevate Journeys ✈️

A full-featured travel booking web app — browse curated destinations, plan a trip budget, book a package, and manage everything from a user or admin dashboard. Built with **Next.js (App Router) + TypeScript**, with a separate backend API for data and a Mongo-backed auth layer.

> This repository holds the **frontend** only. It talks to a separate REST API (see [Environment Variables](#environment-variables)) for destinations, bookings, and admin data.

---

## ✨ Features

**Public / Home**
- Cinematic hero banner with destination search (destination, dates, travelers)
- Featured destinations carousel
- "Why Choose Us" trust section
- **Plan Your Trip** cost calculator — pick duration & travelers, compare **Basic / Gold / Premium** tiers with a live estimated total
- Testimonials and a closing call-to-action section

**Destinations**
- Full destinations listing with **search, category filter, price-range filter, and sorting** (price/rating, asc/desc)
- Destination detail page with booking card, ratings, and edit/delete actions for owners/admins
- Custom error boundary for the destination detail route

**Auth**
- Email/password **and** Google sign-in
- Sign up, sign in, and forgot-password flows
- Protected routes via middleware (`proxy.ts`) that redirect unauthenticated users to `/auth/signin`

**User area**
- "My Bookings" page listing a user's reservations, backed by a JWT-authenticated call to the API

**Admin dashboard** (`/allNav/admin`)
- Overview stats (destinations, bookings, revenue, ratings)
- Manage bookings (`AdminBookingsClient`)
- Manage destinations in a table view (`AdminDestinationsTable`)
- Admin profile & settings panels

**Support**
- Contact/support page with call, email, and live-chat style contact cards

---

## 🧱 Tech Stack

| Layer            | Choice |
|-------------------|--------|
| Framework          | Next.js (App Router), TypeScript |
| Styling            | Tailwind CSS v4, [HeroUI](https://heroui.com) components |
| Auth               | [better-auth](https://www.better-auth.com) (email/password + Google OAuth + JWT sessions), MongoDB adapter |
| Database           | MongoDB (via the `mongodb` driver, used by the auth layer) |
| Forms              | react-hook-form |
| Animation          | framer-motion |
| Icons              | lucide-react, react-icons, @gravity-ui/icons |
| Notifications      | react-toastify |
| Fonts              | Playfair Display (display) + DM Sans (body), via `next/font/google` |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── allNav/
│   │   ├── admin/              # Admin dashboard (bookings, destinations, profile, settings)
│   │   ├── allDestinations/    # Alternate destinations listing route
│   │   ├── bookings/           # Logged-in user's bookings
│   │   ├── destinations/       # Listing + [id] detail page
│   │   └── support/            # Support / contact page
│   ├── api/auth/[...all]/      # better-auth route handler
│   ├── auth/                   # signin / signup / forgotPassword pages
│   ├── layout.tsx               # Root layout (Navbar, Footer, fonts, toasts)
│   └── page.tsx                 # Home page
├── components/
│   ├── admin/                   # Admin dashboard widgets
│   ├── allNavPage/               # Search bar, filters, destination/booking cards, edit page
│   ├── homePage/                 # Banner, featured, why-choose-us, trip calculator, testimonials, CTA
│   └── shared/                   # Navbar, Footer
├── lib/
│   ├── auth.ts                   # better-auth server config (Mongo + Google + JWT)
│   ├── auth-client.ts             # better-auth React client
│   └── fetch-data.ts               # API fetch helpers
└── proxy.ts                        # Route-protection middleware
```

---

## 🚀 Getting Started

```bash
# install dependencies
npm install   # or yarn / pnpm / bun

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Environment Variables

Create a `.env.local` file with:

```env
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_SERVER_URL=your_backend_api_base_url
```

- `NEXT_PUBLIC_SERVER_URL` should point to the backend API that serves `/destination`, `/bookings/:userId`, and `/admin/bookings`.
- `MONGODB_URI` is used by `better-auth`'s Mongo adapter for storing users/sessions.

---

## 🛣️ Route Map

| Route | Description |
|---|---|
| `/` | Home page |
| `/auth/signin`, `/auth/signup`, `/auth/forgotPassword` | Auth pages |
| `/allNav/destinations` | Browse all destinations (search/filter/sort) |
| `/allNav/destinations/[id]` | Destination details + booking |
| `/allNav/bookings` | Current user's bookings |
| `/allNav/support` | Support / contact page |
| `/allNav/admin` | Admin dashboard (protected) |
| `/allNav/admin/bookings`, `/destinations`, `/profile`, `/settings` | Admin sub-pages |

Routes under `/allNav/admin`, `/allNav/allDestinations`, and `/allNav/destinations` are protected — unauthenticated visitors are redirected to sign in.

---
