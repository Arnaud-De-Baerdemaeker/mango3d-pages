import React from "react";
import Link from "next/link";

import styles from "./../../scss-components/models.module.scss";

function JewelryRing() {
    return (
        <>
            <figure className={styles.models__imageContainer}>
                <img
                    src={"/lychee-slicer-jewelry-ring.jpg"}
                    title={"lychee-slicer-jewelry-ring"}
                    className={styles.models__image}
                />
                <figcaption className={styles.models__imageCaption}>
                    {"3D model :"}
                    <Link
                        href={
                            "https://fr.3dexport.com/free-3dmodel-jewellery-ring-192865.htm"
                        }>
                        <a className={styles.models__imageLink}>{"Nirvanna"}</a>
                    </Link>
                </figcaption>
            </figure>
            <h3 className={styles.models__title}>{"Jewelry Design"}</h3>
        </>
    );
}

export default JewelryRing;
