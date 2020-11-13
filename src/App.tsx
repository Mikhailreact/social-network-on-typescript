import React from 'react';
import './App.css';
import {Technologies} from "./Technologies";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";

function App() {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar />
            <Profile />
            {/*<Technologies/>*/}
        </div>
    );
}

export default App;









