import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    const [value, setValue] = useState<number>(0);

    return (
        <div className="App">
            <h1>
                Welcome to the Website.
            </h1>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Button OnClick={() => setValue(value+1)}>+</Button>
            <Button OnClick={() => setValue(value-1)}>-</Button>
            <Button OnClick={() => setValue(0)}>reset</Button>
            <h1>Count: {value}</h1>
        </div>
    );
}

export default App;
