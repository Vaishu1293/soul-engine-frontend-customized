"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

interface BehaviourProps {
    title: string;
}

const Behaviour: React.FC<BehaviourProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
             <h2 className="text-2xl font-bold mb-6 m-4">Behaviour Toward You</h2>
            <div className="art-user-wrapper light-effect-top mb-4">
                <div className="note">
                    <p><strong>Psychic connection, longing, thinking deeply about you but avoiding contact.</strong>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Behaviour;
