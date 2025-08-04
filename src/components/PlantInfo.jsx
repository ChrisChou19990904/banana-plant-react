import React from "react";
const PlantInfo = ({ plant }) => {
    return (
        <div className="info">
            <h2>{plant.name} 是什麼植物？</h2>
            <p><strong>分類：</strong>{plant.type}</p>
            <p><strong>結構特徵：</strong>{plant.structure}</p>
        </div>
    );
};
export default PlantInfo;