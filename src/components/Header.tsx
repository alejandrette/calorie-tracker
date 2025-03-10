import { useMemo } from "react"
import { useActivity } from "../hooks/useActivity";

export function Header() {
  const {state, dispatch} = useActivity()
  const canResetApp = useMemo(() => state.activities.length > 0, [state.activities])

  return (
    <header className="flex justify-between items-center p-4 bg-green-900 text-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold">Calorie Tracker</h1>
        <button
          className="bg-green-700 disabled:opacity-20 enabled:hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch({ type: 'reset-app'})}  
          disabled={!canResetApp}
        >
          Reset App
        </button>
      </div>
    </header>
  )
}
