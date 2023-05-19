import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/about">

                    </Route>
                    <Route path="/user">

                    </Route>
                    <Route path="/">

                    </Route>
                </Routes>

            </Router>
        </div>
    );
}

export default App;
