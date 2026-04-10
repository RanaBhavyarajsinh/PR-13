This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Environment Variables

Create a `.env.local` file in the root directory and add your environment variables:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=your-database-url-here
```

For production on Vercel, set these in the Vercel dashboard under Project Settings > Environment Variables.

## Bundle Size Optimization

- Dynamic imports are used for code splitting (e.g., HeavyComponent).
- Compression is enabled in next.config.js.
- SWC minification is enabled.

## Deploy on Vercel

1. Install Vercel CLI: `npm install -g vercel`

2. Login to Vercel: `vercel login`

3. Deploy: `vercel --prod`

Or, connect your GitHub repository to Vercel for automatic deployments.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.