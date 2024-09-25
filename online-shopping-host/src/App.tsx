// src/App.tsx
import React, { lazy, Suspense } from 'react'

const AuthApp = lazy(() => import('auth/AuthApp'))
const ProductsApp = lazy(() => import('products/ProductsApp'))

const App: React.FC = () => {
  return (
    <div>
      <h1>Online Shopping Host</h1>
      <Suspense fallback={<div>Loading Auth...</div>}>
        <AuthApp />
      </Suspense>
      <Suspense fallback={<div>Loading Products...</div>}>
        <ProductsApp />
      </Suspense>
    </div>
  )
}

export default App