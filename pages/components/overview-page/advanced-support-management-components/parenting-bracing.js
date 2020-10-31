import React from "react";

import styles from "./../../scss-components/advanced-support-management-models.module.scss";

function ParentingBracing() {
    return (
        <div className={styles.models}>
            <div className={styles.models__titleContainer}>
                <h3 className={styles.models__title}>
                    {"Parenting & Bracing"}
                </h3>
            </div>
            <div className={styles.models__model}>
                <figure className={styles.models__imageContainer}>
                    <img
                        src={"/feature_auto_bracing2.gif"}
                        title={"feature_auto_bracing2"}
                        className={styles.models__image}
                    />
                    <figcaption className={styles.models__imageCaption}>
                        {
                            "Automatically create connections between supports for improved strength and saving resin cost."
                        }
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ParentingBracing;
