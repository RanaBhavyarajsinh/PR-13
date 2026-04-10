import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <HeavyComponent />
    </main>
  )
}