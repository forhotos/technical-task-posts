import './App.css';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { AboutPage, HomePage, UserPage } from "./pages";
import ToastHelper from "./components/toast";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className='body'>
                    <Routes>
                        <Route path="/about" element={ <AboutPage/> }/>
                        <Route path="/user/:id" element={ <UserPage/> }/>
                        <Route exact path="/" element={ <HomePage/> }/>
                    </Routes>
                </div>
            </BrowserRouter>
            <ToastHelper />
        </div>
    );
}

export default App;
