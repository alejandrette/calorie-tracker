export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-green-900 text-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold">Calorie Tracker</h1>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset App
        </button>
      </div>
    </header>
  )
}
