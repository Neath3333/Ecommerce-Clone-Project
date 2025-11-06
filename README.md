# J Neath Store - E-Commerce Clone Platform

A modern, responsive e-commerce platform built with Next.js 15, TypeScript, and Stripe integration. This project demonstrates a fully functional online shopping experience with product catalog, cart functionality, and secure payment processing.

## Features

- Modern UI/UX: Clean, responsive design using Tailwind CSS
- Product Catalog: Dynamic product display with Stripe integration
- Interactive Components: Carousel, cards, and animated UI elements
- Responsive Navigation: Mobile-friendly navbar with smooth transitions
- TypeScript Support: Full type safety and better developer experience
- Performance Optimized: Next.js 15 with Turbopack for fast development

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom Components
- **Payment**: Stripe API
- **Icons**: Lucide React
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Stripe account (for payment functionality)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ecommerce-clone-project
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Stripe keys to `.env.local`:
```
STRIPE_SECRET_KEY=your_secret_key
STRIPE_PUBLISHABLE_KEY=your_publishable_key
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/         # Reusable React components
│   ├── ui/            # Base UI components (button, card, carousel)
│   └── navbar.tsx     # Navigation component
└── lib/               # Utility functions and configurations
```

## Key Components

- **Navbar**: Sticky navigation with responsive design
- **Hero Section**: Eye-catching landing with product showcase
- **Product Carousel**: Interactive product display
- **UI Components**: Reusable buttons, cards with modern design
- **Stripe Integration**: Secure payment processing

## Customization

You can start editing the main page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

For UI components, check out `src/components/ui/` for reusable elements like buttons and cards.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [Stripe API](https://stripe.com/docs/api) - payment integration
- [Radix UI](https://www.radix-ui.com/) - accessible UI primitives

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is for educational purposes to demonstrate e-commerce development capabilities.
