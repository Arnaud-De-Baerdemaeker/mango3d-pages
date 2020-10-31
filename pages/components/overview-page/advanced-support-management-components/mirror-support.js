import React from "react";

import styles from "./../../scss-components/advanced-support-management-models.module.scss";

function MirrorSupport() {
    return (
        <div className={styles.models}>
            <div className={styles.models__titleContainer}>
                <h3 className={styles.models__title}>{"Mirror Support"}</h3>
            </div>
            <div className={styles.models__model}>
                <figure className={styles.models__imageContainer}>
                    <img
                        src={"/feature_mirror_support.jpg"}
                        title={"feature_mirror_support"}
                        className={styles.models__image}
                    />
                    <figcaption className={styles.models__imageCaption}>
                        {
                            "Place your supports symmetrically with the help of the mirror option saving you production time."
                        }
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default MirrorSupport;
