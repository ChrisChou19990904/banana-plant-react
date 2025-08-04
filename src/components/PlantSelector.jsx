import React from "react";
const PlantSelector = ({ plants, onSelect, selected }) => {
    return (
        <div className="selector">
            {Object.entries(plants).map(([key, plant]) => (
                <button
                    key={key}
                    onClick={() => onSelect(key)}
                    className={selected === key ? "selected" : ""}
                >
                    {plant.name}
                </button>
            ))}
        </div>
    );
};
export default PlantSelector;