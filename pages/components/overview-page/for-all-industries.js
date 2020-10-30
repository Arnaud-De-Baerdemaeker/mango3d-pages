import React from "react";

import DarkFigurines from "./for-all-industries-components/dark-figurines";
import JewelryRing from "./for-all-industries-components/jewelry-ring";
import Dental from "./for-all-industries-components/dental";
import CadModel from "./for-all-industries-components/cad-model";

import styles from "./../scss-components/for-all-industries.module.scss";

function ForAllIndustries() {
    return (
        <div className={styles.industries}>
            <div className={styles.industries__intro}>
                <div className={styles.industries__titleContainer}>
                    <h2 className={styles.industries__title}>
                        {"The SLA 3D Printing Slicer for all industries"}
                    </h2>
                </div>
                <div className={styles.industries__textContainer}>
                    <p className={styles.industries__text}>
                        {
                            "Lychee Slicer is designed to fit all types of users in need of printing with a resin 3D printer. Our continuous development cycle allows us to add over the time features that answer the needs of all users and add functions specific to an industry."
                        }
                    </p>
                </div>
            </div>
            <div className={styles.industries__models}>
                <div className={styles.industries__model1}>
                    <DarkFigurines />
                </div>
                <div className={styles.industries__model2}>
                    <JewelryRing />
                </div>
                <div className={styles.industries__model3}>
                    <Dental />
                </div>
                <div className={styles.industries__model4}>
                    <CadModel />
                </div>
            </div>
        </div>
    );
}

export default ForAllIndustries;
