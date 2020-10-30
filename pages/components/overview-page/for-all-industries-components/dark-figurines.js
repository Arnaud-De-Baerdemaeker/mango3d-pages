import React from "react";
import Link from "next/link";

import styles from "./../../scss-components/models.module.scss";

function DarkFigurines() {
    return (
        <>
            <figure className={styles.models__imageContainer}>
                <img
                    src={"/lychee-slicer-dark-figurines.jpg"}
                    title={"lychee-slicer-dark-figurines"}
                    className={styles.models__image}
                />
                <figcaption className={styles.models__imageCaption}>
                    {"3D model: "}
                    <Link
                        href={
                            "https://www.myminifactory.com/users/DarkFigurines"
                        }>
                        <a className={styles.models__imageLink}>
                            {"Dark Figurines"}
                        </a>
                    </Link>
                </figcaption>
            </figure>
            <h3 className={styles.models__title}>{"Figurines and Minis"}</h3>
        </>
    );
}

export default DarkFigurines;
