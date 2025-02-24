import { FaUtensils, FaDumbbell, FaBalanceScale } from "react-icons/fa";
import { useMemo } from "react"
import { Activity } from "../types"

type CaloriesProp = {
  activities: Activity[]
}

export function Calories({ activities }: CaloriesProp) {
  const caloriesFood = useMemo(() => (
    activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total , 0)
  ), [activities])

  const caloriesExercise = useMemo(() => (
    activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total , 0)
  ), [activities])

  const diferentCalories = useMemo(() => (
    caloriesFood - caloriesExercise
  ), [caloriesFood, caloriesExercise])

  return (
    <div className="max-w-4xl mx-auto mt-8 grid grid-cols-3 gap-4 text-white">
      <div className="bg-green-700 p-6 rounded-lg shadow-md flex flex-col items-center">
        <FaUtensils size={32} className="mb-2" />
        <h2 className="text-lg font-semibold">Calories</h2>
        <p className="text-2xl font-bold">{caloriesFood}</p>
      </div>

      <div className="bg-blue-700 p-6 rounded-lg shadow-md flex flex-col items-center">
        <FaDumbbell size={32} className="mb-2" />
        <h2 className="text-lg font-semibold">Exercise</h2>
        <p className="text-2xl font-bold">{caloriesExercise}</p>
      </div>

      <div className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center">
        <FaBalanceScale size={32} className="mb-2" />
        <h2 className="text-lg font-semibold">Difference</h2>
        <p className="text-2xl font-bold">{diferentCalories}</p>
      </div>
    </div>
  )
}
