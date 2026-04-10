import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to My Full-Stack App</h1>
      <p>This is a Next.js application with optimized bundle size and environment management.</p>
      <HeavyComponent />
    </main>
  )
}