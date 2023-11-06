import React from 'react'
import ReactDOM from 'react-dom/client'
import { App as ChildrenRerenders } from './1-ChildrenRerenders'
// import { App as SkippingRerendersWithMemo } from './2-SkippingRerendersWithMemo'
// import { App as MemoBroken } from './3-MemoBroken'
// import { App as MemoWithUseCallback } from './4-MemoWithUseCallback'
// import { App as ProductSlow } from './5-ProductSlow'
// import { App as ProductWithUseMemo } from './6-ProductWithUseMemo'
import { App as TodoAppEffectLoop } from './7-EffectLoop'
// import { App as PreventEffectLoop } from './8-PreventEffectLoop'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))

// Two variants of useCallback usage
// - Skipping re-rendering of components
// - Preventing an Effect from firing too often
// - Optimizing a custom Hook

// # Skipping re-rendering of components

// 1. Re-rendering all children on parent re-render
// We can see that ShippingForm re-renders every time when ProductPage re-renders
// when we are toggling theme checkbox.
// And you see '[ARTIFICIALLY SLOW] Rendering <ShippingForm />' message in console every time.
// (!) Notice that we're not passing any props into ShippingForm at the moment.
// root.render(<ChildrenRerenders/>)

// 2. Skipping re-rendering ShippingForm when ProductPage re-renders with memo
// Apply memo to ShippingForm
// (!) Notice that we're not passing any props into ShippingForm at the moment.
// ShippingForm will NOT re-render every time when ProductPage re-renders
// because of toggling theme checkbox.
// root.render(<SkippingRerendersWithMemo/>)

// 3. Broken memo
// (!) We're passing handleSubmit by props without wrapping in useCallback
// Component ShippingForm will re-render despite memo because link on handleSubmit
// will change on every ProductPage re-renders when toggling theme checkbox
// root.render(<MemoBroken/>)

// 4. Skipping re-rendering with useCallback and memo
// Next, try toggling the theme. Thanks to useCallback together with memo,
// it’s fast despite the artificial slowdown! ShippingForm skipped re-rendering because
// the handleSubmit function has not changed. The handleSubmit function has not changed
// because both productId and referrer (your useCallback dependencies) haven’t
// changed since last render.
// root.render(<MemoWithUseCallback />)

// 5. Add heavy work calculation inside ProductPage component
// root.render(<ProductSlow/>)

// 6. Skipping re-rendering with useMemo
// root.render(<ProductWithUseMemo/>)

// # Preventing an Effect from firing too often

// 6. Effect loop
root.render(<TodoAppEffectLoop />)

// 6. Preventing an Effect from firing too often
// root.render(<PreventEffectLoop />)


// # Optimizing a custom Hook

// If you’re writing a custom Hook, it’s recommended to wrap any functions that it returns
// into useCallback. This ensures that the consumers of your Hook can optimize their own
// code when needed.
// Example: ./7-OptimizingCustomHook.js


