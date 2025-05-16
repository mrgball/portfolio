'use client';
import { useState } from "react";
import ArrowButton from "../components/ArrowButton";


const Project = () => {
    const [fadeIn, setFadeIn] = useState(false);

    setTimeout(() => {
        setFadeIn(true);
    }, 100);

    return (
        <div className={`transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
            <ArrowButton route="/" isBack={true}/>
            <h1>Ini Project</h1>
        </div>
    );
}

export default Project;