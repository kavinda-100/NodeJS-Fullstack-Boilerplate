import {UserType} from "@shared/types"
import User from "./components/User";
import {useState, useEffect} from "react";

function App() {
    const [users, setUsers] = useState<UserType[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getUsers = async () => {
        try {
            setLoading(true)
            const response = await fetch("/api/v1/user/all")
            const data = await response.json()
            setUsers(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

  return (
   <main className="max-w-[1400px] mx-auto p-2 w-full">
       <h1 className="text-3xl font-bold text-center">Users</h1>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 p-2">
        {loading && <p>Loading...</p>}
        {!loading && users.map((user) => (
            <User key={user.id} name={user.name} email={user.email} createdAt={user.createdAt} updatedAt={user.updatedAt} id={user.id}/>
        ))}
    </section>
   </main>
  )
}

export default App
