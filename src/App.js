import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import { useState } from "react"
import SignInPage from "./pages/SignInPage/SignInPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import HomePage from "./pages/HomePage/HomePage"
import NewIncomePage from "./pages/NewIncome-ExpensePage/NewIncomePage"
import NewExpensePage from "./pages/NewIncome-ExpensePage/NewExpensePage"

export default function App(){
    const [user, setUser] = useState({})
    return(
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <Routes>
                    <Route path="/" element={ <SignInPage/> } />
                    <Route path="/cadastro" element={ <SignUpPage/> } />
                    <Route path="/home" element={ <HomePage/> } />
                    <Route path="/nova-entrada" element={ <NewIncomePage/> } />
                    <Route path="/nova-saida" element={ <NewExpensePage/> } />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}