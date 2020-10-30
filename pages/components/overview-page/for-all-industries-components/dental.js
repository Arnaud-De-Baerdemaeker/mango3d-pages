import React from "react";
import Link from "next/link";

import styles from "./../../scss-components/models.module.scss";

function Dental() {
    return (
        <>
            <figure className={styles.models__imageContainer}>
                <img
                    src={"/dental-lychee-slicer.jpg"}
                    title={"dental-lychee-slicer"}
                    className={styles.models__image}
                />
                <figcaption className={styles.models__imageCaption}>
                    {"3D model:"}
                    <Link href={"https://3d-expert.fr/"} target={"_blank"}>
                        <a className={styles.models__imageLink}>
                            {"3D Expert.fr"}
                        </a>
                    </Link>
                </figcaption>
            </figure>
            <h3 className={styles.models__title}>
                {"Dental and Orthodontics"}
            </h3>
        </>
    );
}

export default Dental;
