import React from "react";

import styles from "./../../scss-components/models.module.scss";

function CadModel() {
    return (
        <>
            <figure className={styles.models__imageContainer}>
                <img
                    src={"/lychee-slicer-cad-3d-model.jpg"}
                    title={"lychee-slicer-cad-3d-model"}
                    className={styles.models__image}
                />
            </figure>
            <h3 className={styles.models__title}>
                {"Product Design / Makers"}
            </h3>
        </>
    );
}

export default CadModel;
