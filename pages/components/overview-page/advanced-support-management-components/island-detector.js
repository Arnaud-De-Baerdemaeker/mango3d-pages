import React from "react";

import styles from "./../../scss-components/advanced-support-management-models.module.scss";

function IslandDetector() {
    return (
        <div className={styles.models}>
            <div className={styles.models__titleContainer}>
                <h3 className={styles.models__title}>{"Island Detector"}</h3>
            </div>
            <div className={styles.models__model}>
                <figure className={styles.models__imageContainer}>
                    <img
                        src={"/feature_island2.gif"}
                        title={"feature_island2"}
                        className={styles.models__image}
                    />
                    <figcaption className={styles.models__imageCaption}>
                        {
                            "Find easily areas that require supports with the detection of islands. Spot them in seconds."
                        }
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default IslandDetector;
