import {UserType} from "@shared/types"

function App() {

    const user: UserType = {
        id: "1",
        name: "John",
        email: "john@gmail.com",
        createdAt: "2021-09-01",
        updatedAt: "2021-09-01",
    }
    console.log(user)

  return (
   <main className="max-w-[1400px] mx-auto p-2">
    <h1 className="text-violet-500 text-2xl">React Typescript</h1>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>{user.createdAt}</p>
    <p>{user.updatedAt}</p>
   </main>
  )
}

export default App
