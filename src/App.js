import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

// Switch has been replaced with Routes in React v6
const App = () => {


    return (
        <Router>
            <div className="content">
            <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/create" element={<Create />} />
                    <Route exact path="/blogs/:id" element={<BlogDetails />} />
                    <Route exact path="*" element={<NotFound />} />
                </Routes>
        </div>
        </Router>
    );
}
 
export default App;