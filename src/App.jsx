import {Route, Routes} from "react-router-dom";
import {Navbar} from "./componentsNavbar/Navbar.jsx";

const App = () => {
    const Home = () => <h2>You are in the Home</h2>;
    const Blogs = () => <h2>You are in the Blogs</h2>;
    const Projects = () => <h2>You are in the Projects</h2>;
    const About = () => <h2>You are in the About</h2>;
    const Contact = () => <h2>You are in the Contact</h2>;
    return (
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </>
    )
}
export default App
