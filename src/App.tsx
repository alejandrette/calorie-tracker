import { useEffect, useReducer } from "react"
import { Calories } from "./components/Calories"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import { ActivityList } from "./components/ActivityList"

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  return (
    <>
      <Header
        state={state}
        dispatch={dispatch}    
      />
      <Calories 
        activities={state.activities}
      />
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto mt-8">
        <Form 
          state={state}
          dispatch={dispatch}
        />
        <ActivityList 
          activities={state.activities}
          dispatch={dispatch}
        />
      </div>
    </>
  )
}

export default App
