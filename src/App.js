import './App.css';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { HomePage, UserPage } from "./pages";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/about"/>
                    <Route path="/user/:id" element={ <UserPage/> }/>
                    <Route exact path="/" element={ <HomePage/> }/>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
