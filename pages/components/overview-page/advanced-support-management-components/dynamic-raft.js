import React from "react";

import styles from "./../../scss-components/advanced-support-management-models.module.scss";

function DynamicRaft() {
    return (
        <div className={styles.models}>
            <div className={styles.models__titleContainer}>
                <h3 className={styles.models__title}>{"Dynamic Raft"}</h3>
            </div>
            <div className={styles.models__model}>
                <figure className={styles.models__imageContainer}>
                    <img
                        src={"/feature_raft.jpg"}
                        title={"feature_raft"}
                        className={styles.models__image}
                    />
                    <figcaption className={styles.models__imageCaption}>
                        {
                            "Several raft shapes that fit your model can be added to ensure a strong bed adhesion."
                        }
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default DynamicRaft;
