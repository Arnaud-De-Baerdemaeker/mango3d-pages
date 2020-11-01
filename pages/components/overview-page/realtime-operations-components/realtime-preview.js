import React from "react";

import styles from "./../../scss-components/realtime-operations-models.module.scss";

function RealtimePreview() {
    return (
        <div className={styles.models}>
            <div className={styles.models__intro}>
                <div className={styles.models__titleContainer}>
                    <h3 className={styles.models__title}>
                        {"Realtime Preview"}
                    </h3>
                </div>
                <div className={styles.models__textContainer}>
                    <p className={styles.models__text}>
                        {
                            "Preview your slices in real-time in the 3D view of the slicer, allowing you to check for potential 3D model imperfections."
                        }
                    </p>
                </div>
            </div>
            <div className={styles.models__model}>
                <figure className={styles.models__imageContainer}>
                    <img
                        src={"/feature_realtime_preview2.gif"}
                        title={"feature_realtime_preview2"}
                        className={styles.models__image}
                    />
                </figure>
            </div>
        </div>
    );
}

export default RealtimePreview;
