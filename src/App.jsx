import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/Card"

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card 
                img="swimmer.png"
                rating={5.0}
                reviewCount={6}
                country="England"
                title="Life lessons with ..."
                price={136}
            />
        </div>
    )
}

