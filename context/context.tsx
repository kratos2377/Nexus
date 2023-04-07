import { createContext } from 'react'

export const NexusContext = createContext()

export const NexusProvider = ({ children }) => {
  const requestToCreateUserProfile = async (walletAddress, name) => {
    try {
      await fetch(`/api/createUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userWalletAddress: walletAddress,
          name: name,
        }),
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <NexusContext.Provider
      value={{
        requestToCreateUserProfile,
      }}
    >
      {children}
    </NexusContext.Provider>
  )
}
