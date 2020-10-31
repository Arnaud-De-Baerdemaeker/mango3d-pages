import React from "react";

import styles from "./../../scss-components/advanced-support-management-models.module.scss";

function OverhangPreview() {
    return (
        <div className={styles.models}>
            <div className={styles.models__titleContainer}>
                <h3 className={styles.models__title}>{"Overhang Preview"}</h3>
            </div>
            <div className={styles.models__model}>
                <figure className={styles.models__imageContainer}>
                    <img
                        src={"/feature_overhang2.gif"}
                        title={"feature_overhang2"}
                        className={styles.models__image}
                    />
                    <figcaption className={styles.models__imageCaption}>
                        {
                            "Lychee shows you in real-time areas that need supports. Add supports to reduce or remove these areas."
                        }
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default OverhangPreview;
