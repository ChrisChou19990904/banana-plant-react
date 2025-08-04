import React, { useState } from "react";
import "./App.css";
import PlantSelector from "./components/PlantSelector";
import PlantInfo from "./components/PlantInfo";
import PlantIllustration from "./components/PlantIllustration";
import plants from "./data/plants";
function App() {
    const [selectedPlantKey, setSelectedPlantKey] = useState("banana");
    const plant = plants[selectedPlantKey];
    return (
        <div className="app">
            <h1>🌿 植物科普互動教室</h1>
            <PlantSelector plants={plants} onSelect={setSelectedPlantKey} selected={selectedPlantKey} />
            <PlantInfo plant={plant} />
            <PlantIllustration svg={plant.svg} />
        </div>
    );
}
export default App;