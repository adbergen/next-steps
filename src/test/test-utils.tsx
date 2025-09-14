import React from 'react'

import { RenderOptions, render } from '@testing-library/react'

// Create a custom render function that includes providers
const customRender = (ui: React.ReactElement, options?: RenderOptions) => {
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    // Add any global providers here (e.g., theme, context providers)
    return <>{children}</>
  }

  return render(ui, { wrapper: AllTheProviders, ...options })
}

// Re-export everything
export * from '@testing-library/react'
export * from '@testing-library/user-event'

// Override render method
export { customRender as render }
