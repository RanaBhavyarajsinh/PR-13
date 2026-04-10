import React from 'react'

const HeavyComponent: React.FC = () => {
  // Simulate heavy component with lots of code
  const data = Array.from({ length: 1000 }, (_, i) => `Item ${i}`)
  
  return (
    <div>
      <h2>Heavy Component</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default HeavyComponent