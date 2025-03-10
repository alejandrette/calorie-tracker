import { FaUtensils, FaDumbbell, FaBalanceScale } from "react-icons/fa";
import { useMemo } from "react"
import { useActivity } from "../hooks/useActivity";

export function Calories() {
  const {state} = useActivity()

  const caloriesFood = useMemo(() => (
    state.activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total , 0)
  ), [state.activities])

  const caloriesExercise = useMemo(() => (
    state.activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total , 0)
  ), [state.activities])

  const diferentCalories = useMemo(() => (
    caloriesFood - caloriesExercise
  ), [caloriesFood, caloriesExercise])

  return (
    <div className="max-w-2xl mx-4 md:mx-auto mt-6 grid grid-cols-3 gap-4 text-white">
      <div className="bg-green-700 p-6 rounded-lg shadow-md flex flex-col items-center">
        <FaUtensils size={24} className="mb-2" />
        <h2 className="text-lg font-semibold">Calories</h2>
        <p className="text-2xl font-bold">{caloriesFood}</p>
      </div>

      <div className="bg-blue-700 p-6 rounded-lg shadow-md flex flex-col items-center">
        <FaDumbbell size={24} className="mb-2" />
        <h2 className="text-md font-semibold">Exercise</h2>
        <p className="text-2xl font-bold">{caloriesExercise}</p>
      </div>

      <div className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center">
        <FaBalanceScale size={24} className="mb-2" />
        <h2 className="text-lg font-semibold">Difference</h2>
        <p className="text-2xl font-bold">{diferentCalories}</p>
      </div>
    </div>
  )
}
