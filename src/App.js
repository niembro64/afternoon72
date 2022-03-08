// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Box from "./components/Box";

function App() {
    return (
        <div className="App">
            <button className="btn btm-primary">Click Me</button>
            <h1>eric title</h1>


        <Box text="hey its you!"/>
        <Box text="hey its me!"/>

        </div>
    );
}

export default App;
