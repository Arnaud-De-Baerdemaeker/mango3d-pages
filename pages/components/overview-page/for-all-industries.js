import React from "react";

import DarkFigurines from "./for-all-industries-components/dark-figurines";
import JewelryRing from "./for-all-industries-components/jewelry-ring";
import Dental from "./for-all-industries-components/dental";
import CadModel from "./for-all-industries-components/cad-model";

function ForAllIndustries() {
    return (
        <div>
            <div>
                <div>
                    <h2>{"The SLA 3D Printing Slicer for all industries"}</h2>
                </div>
                <div>
                    <p>
                        {
                            "Lychee Slicer is designed to fit all types of users in need of printing with a resin 3D printer. Our continuous development cycle allows us to add over the time features that answer the needs of all users and add functions specific to an industry."
                        }
                    </p>
                </div>
            </div>
            <div>
                <DarkFigurines />
                <JewelryRing />
                <Dental />
                <CadModel />
            </div>
        </div>
    );
}

export default ForAllIndustries;
