import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import { useState } from "react"

export default function App() {
    return (
        <BrowserRouter>
           <Header />
           <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/sessoes/:idFilme" element={<SessionsPage />}/>
                <Route path="/assentos/:idSessao" element={<SeatsPage />} />
                <Route path="/sucesso" element={<SuccessPage/>} />
           </Routes>
        </BrowserRouter>
    )
}
