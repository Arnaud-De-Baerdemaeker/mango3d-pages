import React from "react";
import Link from "next/link";

import styles from "./../scss-components/title.module.scss";

function Title() {
    return (
        <div className={styles.title__container}>
            <div className={styles.title__subContainer}>
                <figure className={styles.title__logo}>
                    <img src={"/lychee_small.png"} />
                </figure>
                <div className={styles.title__mainTitle}>
                    <h1 className={styles.title__mainTitle}>
                        {"Lychee Slicer 3"}
                    </h1>
                </div>
                <div>
                    <h2 className={styles.title__subTitle}>
                        {
                            "A powerful and versatile slicer for SLA resin 3D printers"
                        }
                    </h2>
                </div>
            </div>
            <div className={styles.title__links}>
                <div className={styles.title__button}>
                    <Link href={"/downloads"}>
                        <a className={styles.title__link}>
                            {"Get Lychee Slicer 3 Free Edition"}
                        </a>
                    </Link>
                </div>
                <div className={styles.title__button}>
                    <Link href={"#"}>
                        <a className={styles.title__link}>
                            {"Compare versions"}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Title;
