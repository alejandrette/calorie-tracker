import { useMemo } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import { useActivity } from "../hooks/useActivity";

const categoryColors: Record<number, string> = {
  1: "bg-green-700", // Food
  2: "bg-blue-700" // Exercise
};

export function ActivityList() {
  const {state, dispatch} = useActivity()

  const isEmpty = useMemo(() => state.activities.length <= 0, [state.activities])

  return (
    <div className="space-y-4">
      {isEmpty
        ? (
          <p className="text-center">There is no activity...</p>
        ) : (
          state.activities.map((activity) => (
            <div 
              key={activity.id}
              className="relative bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className={`${categoryColors[activity.category]} h-4 w-full absolute top-0 left-0`}></div>
    
              <div className="md:flex justify-between items-center p-6 pt-10">
                <div>
                  <h2 className="text-xl font-semibold">{activity.name}</h2>
                  <p className="text-gray-300">Calories: {activity.calories}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <button 
                    className="p-2 text-orange-500 hover:text-orange-700 transition"
                    onClick={() => dispatch({ type: 'set-activeId', payload: { id: activity.id } })}  
                  >
                    <MdModeEditOutline size={24} />
                  </button>
                  <button 
                    className="p-2 text-red-600 hover:text-red-900 transition"
                    onClick={() => dispatch({ type: 'delete-active', payload: { id: activity.id } })}  
                  >
                    <FaDeleteLeft size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
    </div>
  )
}
