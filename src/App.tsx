import { Calories } from "./components/Calories"
import { Form } from "./components/Form"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <Header />
      <Calories />
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto mt-8">
        <Form />
      </div>
    </>
  )
}

export default App
