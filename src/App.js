// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Box from "./components/Box";

function App() {
    return (
        <div className="App">
            <button className="btn btm-primary">Click Me</button>
            <h1>eric title</h1>

            <Box text="hey its you!" number={42} />
            <Box text="hey its me!" number={43} />

            <Box text="Another" number={88}>
                <h3>child here</h3>
            </Box>
        </div>
    );
}

export default App;
