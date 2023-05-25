import './App.css';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { HomePage } from "./pages";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="about" />
                    <Route path="user"  />
                    <Route exact path="/" element={<HomePage />}/>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
