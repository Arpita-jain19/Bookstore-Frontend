
import Homepage from "./home/Homepage"
import {Routes,Route, Navigate} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import Courses from "./courses/course"
import Signup from "./components/Signup"
import { useAuth } from "./context/AuthProvider"
export default function App() {
  const [authUser, setauthUser] = useAuth()
  console.log(authUser)
  return (

    <>
    
   
    <div className="dark-bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
   
    </div>
    </>
  )
}