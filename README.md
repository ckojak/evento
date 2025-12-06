# Evento - Event Management Platform

A modern event management platform built with React, TypeScript, and Supabase.

## Features

- 🎫 Event creation and management
- 💳 Secure payment processing with Stripe
- 📱 Responsive design
- 🔐 Authentication and authorization
- 📊 Admin dashboard
- 🎨 Beautiful UI with shadcn-ui and Tailwind CSS

## Technologies

This project is built with:

- **Vite** - Build tool
- **TypeScript** - Type safety
- **React** - UI framework
- **shadcn-ui** - UI components
- **Tailwind CSS** - Styling
- **Supabase** - Backend and database
- **Stripe** - Payment processing

## Getting Started

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Supabase account
- Stripe account (for payments)

### Installation

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd evento

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your Supabase credentials:
# VITE_SUPABASE_URL=your_supabase_url
# VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# 4. Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

```sh
npm run build
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this project is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ckojak/evento)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Deployment

Make sure to set these environment variables in your Vercel project:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## Project Structure

```
evento/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── integrations/   # Third-party integrations
├── supabase/          # Supabase functions and migrations
└── public/            # Static assets
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.
