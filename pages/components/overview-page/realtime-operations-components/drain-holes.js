import React from "react";

import styles from "./../../scss-components/realtime-operations-models.module.scss";

function DrainHoles() {
    return (
        <div className={styles.models}>
            <div className={styles.models__intro}>
                <div className={styles.models__titleContainer}>
                    <h3 className={styles.models__title}>{"Drain Holes"}</h3>
                </div>
                <div className={styles.models__textContainer}>
                    <p className={styles.models__text}>
                        {
                            "Add drainage holes quickly and dynamically. You do not need to use an external 3D software."
                        }
                    </p>
                </div>
            </div>
            <div className={styles.models__model}>
                <figure className={styles.models__imageContainer}>
                    <img
                        src={"/feature_holes.jpg"}
                        title={"feature_holes"}
                        className={styles.models__image}
                    />
                </figure>
            </div>
        </div>
    );
}

export default DrainHoles;
