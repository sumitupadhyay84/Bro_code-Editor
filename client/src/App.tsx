import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
// import GitHubCorner from "./components/GitHubCorner"
import Toast from "./components/toast/Toast"
import EditorPage from "./pages/EditorPage"
import HomePage from "./pages/HomePage"
import Dashbaord from "./pages/Dashboard"
import AboutUs from "./pages/AboutUs"

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashbaord />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/editor/:roomId" element={<EditorPage />} />
                </Routes>
            </Router>
            <Toast /> {/* Toast component from react-hot-toast */}
            {/* <GitHubCorner /> */}
        </>
    )
}

export default App
