import React from "react";

import styles from "./../../scss-components/realtime-operations-models.module.scss";

function RealtimeHollowing() {
    return (
        <div className={styles.models}>
            <div className={styles.models__intro}>
                <div className={styles.models__titleContainer}>
                    <h3 className={styles.models__title}>
                        {"Realtime Hollowing"}
                    </h3>
                </div>
                <div className={styles.models__textContainer}>
                    <p className={styles.models__text}>
                        {
                            "You can hollow your model directly in Lychee without using any other 3D software. Everything is real-time in the slicer view."
                        }
                    </p>
                </div>
            </div>
            <div className={styles.models__model}>
                <figure className={styles.models__imageContainer}>
                    <img
                        src={"/feature_hollowing-3.gif"}
                        title={"feature_hollowing-3"}
                        className={styles.models__image}
                    />
                </figure>
            </div>
        </div>
    );
}

export default RealtimeHollowing;
