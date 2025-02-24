import { Activity } from "../types"

// Lo que va a describir lo que hace el reducer
export type ActivityActions = 
  { type: 'save-activity', payload: { newActivity: Activity } } | 
  { type: 'set-activeId', payload: { id: Activity['id'] } } |
  { type: 'delete-active', payload: { id: Activity['id'] } }

export interface ActivityState {
  activities: Activity[],
  activeId: Activity['id']
}

// Valor inicial del reducer
export const initialState: ActivityState = {
  activities: [],
  activeId: '' 
}

// Reducer que va a modificar el estado de la aplicación dependiendo de la acción que se le pase
export const activityReducer = (state: ActivityState = initialState, action: ActivityActions) => {
  if(action.type === 'save-activity'){
    let updateActivities: Activity[] = []
    if(state.activeId){
      updateActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
    } else {
      updateActivities = [...state.activities, action.payload.newActivity]
    }
    return { ...state, activities: updateActivities, activeId: '' }
  }

  if(action.type === 'set-activeId'){
    return { ...state, activeId: action.payload.id }
  }

  if(action.type === 'delete-active'){
    return { ...state, activities: state.activities.filter(activity => activity.id !== action.payload.id) }
  }

  return state
}