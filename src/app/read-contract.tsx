import { useReadContract} from 'wagmi'
import { wagmiContractConfig } from './wagmicontract-abi'

export function ReadContract() {
  const { data: info, error, isPending } = useReadContract({
    address: '0x0e22B5f3E11944578b37ED04F5312Dfc246f443C',
    abi: wagmiContractConfig,
    functionName: 'getInfos',
    args: [BigInt(22788)],
  })

  if (isPending) return <div>Loading...</div>

  if (error)
  return (
    <div>
      Error: {error.shortMessage || error.message}
    </div>
  )

  return (
    <div>Balance: {info?.toString()}</div>
  )
}