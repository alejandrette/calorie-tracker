import { useState, ChangeEvent, FormEvent, Dispatch } from "react"
import { Activity, Category } from "../types"
import { ActivityActions } from "../reducers/activity-reducer"

const categories: Category[] = [
  { id: 1, name: 'Food'},
  { id: 2, name: 'Exercise'}
]

type FormProps = {
  dispatch: Dispatch<ActivityActions>
}

const initialState: Activity = {
  category: 1,
  name: '',
  calories: 0
}

export function Form({ dispatch }: FormProps) {
  const [activity, setActivity] = useState<Activity>(initialState)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const isNumber = ['calories', 'category'].includes(e.target.id)

    setActivity({
      ...activity,
      [e.target.id]: isNumber ? +e.target.value : e.target.value
    })
  }

  const isValidForm = () => {
    return activity.name.trim() !== '' && activity.calories > 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch({ type: 'save-activity', payload: { newActivity: activity } })
    setActivity(initialState) 
  }

  return (
    <form className="bg-green-900 shadow-lg rounded-lg p-6 space-y-4 text-white" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="category" className="text-lg font-semibold mb-1">Category</label>
        <select 
          id="category" 
          className="bg-green-800 border border-green-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="name" className="text-lg font-semibold mb-1">Activity</label>
        <input 
          type="text" 
          id="name"
          value={activity.name}
          onChange={handleChange}
          placeholder="E.g. Running, Food, etc."
          className="bg-green-800 border border-green-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="calories" className="text-lg font-semibold mb-1">Calories</label>
        <input 
          type="number" 
          id="calories"
          value={activity.calories}
          onChange={handleChange}
          placeholder="E.g. 300 or 500."
          className="bg-green-800 border border-green-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-30 transition duration-300 text-white font-bold py-2 px-4 rounded-lg mt-4"
        disabled={!isValidForm()}
      >
        Save {activity.category === 1 ? 'Food' : 'Exercise'}
      </button>
    </form>
  )
}
