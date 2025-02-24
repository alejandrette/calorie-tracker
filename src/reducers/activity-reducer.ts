import { Activity } from "../types"

// Lo que va a describir lo que hace el reducer
export type ActivityActions = {
   type: 'save-activity', payload: { newActivity: Activity }
}

interface ActivityState {
  activities: Activity[]
}

// Valor inicial del reducer
export const initialState: ActivityState = {
  activities: []
}

// Reducer que va a modificar el estado de la aplicación dependiendo de la acción que se le pase
export const activityReducer = (state: ActivityState = initialState, action: ActivityActions) => {
  if(action.type === 'save-activity'){
    return { ...state, activities: [...state.activities, action.payload.newActivity] }
  }
}