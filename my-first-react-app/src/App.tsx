import './App.css'
import { Header } from './components/Header'
import { Info } from './components/Info'
import { Welcome } from './components/Welcome'

export type User = {
  firstname: string,
  lastname: string,
  age: number,
  isStudent: boolean,
}

const user: User = {
  firstname: "Rocky",
  lastname: "Ueno",
  age: 27,
  isStudent: true,
}

function App() {
  return (
    <>
      <Header logoText={"My First React App"} />
      <Welcome message={"Hello!"} />
      <Info user={user} />
    </>
  )
}

export default App
