"use client";

import React from "react";
import Lottie from "lottie-react";
import magicLoader from "../../../public/assets/lottie/Sacred Geometry Mandala.json"; // ⭐ your spinner

export default function SpinnerOverlay() {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
            <div className="w-40 h-40 flex items-center justify-center">
                <Lottie animationData={magicLoader} loop={true} />
            </div>
        </div>

    );
}
