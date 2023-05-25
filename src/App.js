import './App.css';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { HomePage, UserPage } from "./pages";
import Header from "./components/layout/Header";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <div className='body'>
                    <Routes>
                        <Route path="/about"/>
                        <Route path="/user/:id" element={ <UserPage/> }/>
                        <Route exact path="/" element={ <HomePage/> }/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
