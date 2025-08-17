"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

interface FocusAreaForTheDayProps {
    title: string;
}

const FocusAreaForTheDay: React.FC<FocusAreaForTheDayProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
             <h2 className="text-2xl font-bold mb-6 m-4">Focus Area for the Day</h2>
            <div className="art-user-wrapper light-effect-top mb-4">
                <div className="note">
                    <p><strong>Ten of Cups –</strong> Your soul’s vision of union and peace. Don’t let outer tension make you forget what
                        you’re manifesting emotionally.
                    </p>
                </div>
            </div>
        </>
    );
};

export default FocusAreaForTheDay;
