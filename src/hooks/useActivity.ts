import { useContext } from "react"
import { ActivityContext } from "../context/ActivityContext"

export function useActivity() {
  const context = useContext(ActivityContext)
  if(!context) {
    throw new Error('useACtivity must be used within a ACtivityProvider')
  }

  return context
}
