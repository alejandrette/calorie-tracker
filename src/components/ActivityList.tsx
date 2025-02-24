import { Activity } from "../types";
import { MdModeEditOutline } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";

const categoryColors: Record<number, string> = {
  1: "bg-green-500", // Food
  2: "bg-blue-500" // Exercise
};

type ActivityListProps = {
  activities: Activity[];
};

export function ActivityList({ activities }: ActivityListProps) {
  console.log(activities);
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div 
          key={activity.id}
          className="relative bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className={`${categoryColors[activity.category]} h-4 w-full absolute top-0 left-0`}></div>

          <div className="flex justify-between items-center p-6 pt-10">
            <div>
              <h2 className="text-xl font-semibold">{activity.name}</h2>
              <p className="text-gray-300">Calories: {activity.calories}</p>
            </div>

            <div>
              <button 
                className="p-2 text-orange-400 hover:text-orange-500 transition"
                onClick={}  
              >
                <MdModeEditOutline size={24} />
              </button>
              <button className="p-2 text-red-400 hover:text-red-500 transition">
                <FaDeleteLeft size={24} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
