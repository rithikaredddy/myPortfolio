import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Certificates from "./Certificates.js";
import {Routes, Route} from 'react-router-dom';
function Main(){
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/certificates" element={<Certificates/>}/>
            </Routes>
            <Footer/>
        </>
    );
}
export default Main;