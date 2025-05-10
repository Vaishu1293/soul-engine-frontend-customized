import React from "react";
import TarotDrawPage from "./TarotDraw";

const TarotDrawContent = () => {
    return (
        <div className="tarot-draw-wrapper">
            <div className="tarot-header">
                <h4>Draw Your First Tarot Spread</h4>
                <p>
                    Begin your Soul-Engine journey by drawing cards for your Relationship Celtic Cross spread.
                </p>
            </div>
            <TarotDrawPage />
        </div>

    );
};

export default TarotDrawContent;
