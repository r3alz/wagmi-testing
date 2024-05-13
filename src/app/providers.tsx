'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { SendTransaction } from './send-transaction'
import { MintNFT } from './write-contract'
import { ReadContract } from './read-contract'
import { config } from '@/wagmi'

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {props.children}
        <SendTransaction />
        <MintNFT />
        <ReadContract />
      </QueryClientProvider>
    </WagmiProvider>
  )
}
