import React, { useContext, createContext, PropsWithChildren } from 'react'

import { E2ETestable } from '../types'

const TestingContext = createContext<E2ETestable>(null)

export function useTestingContext() {
  const context = useContext(TestingContext)
  if (!context) {
    throw new Error(
      'Do not use E2ETestable components outside of the TestingContext'
    )
  }
  return context
}

interface Props {
  testId: string
}

export function TestingProvider({
  testId,
  children,
}: PropsWithChildren<Props>) {
  const value = React.useMemo(() => ({ testId }), [testId])

  return (
    <TestingContext.Provider value={value}>{children}</TestingContext.Provider>
  )
}
