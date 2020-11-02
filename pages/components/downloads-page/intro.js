import React from "react";

import styles from "./../scss-components/downloads-intro.module.scss";

function Intro() {
    return (
        <div className={styles.intro}>
            <div className={styles.intro__logo}>
                <figure className={styles.intro__imageContainer}>
                    <img
                        src={"/lychee_small.png"}
                        className={styles.intro__image}
                    />
                </figure>
            </div>
            <div className={styles.intro__titleContainer}>
                <h1 className={styles.intro__mainTitle}>
                    {"DOWNLOAD Lychee Slicer"}
                </h1>
                <h3 className={styles.intro__subTitle}>
                    {
                        "Get the latest version of Lychee Slicer, for Windows and Mac OS"
                    }
                </h3>
            </div>
            <div className={styles.intro__infoContainer}>
                <strong>
                    <p className={styles.intro__info}>
                        {
                            "Download the latest installer for Lychee Slicer. Use it for free or subscribe to our Pro version from within the application."
                        }
                        <br />
                        {
                            " Lychee Slicer also include an auto-update system for an easy upgrade to the latest version when installed."
                        }
                    </p>
                </strong>
            </div>
        </div>
    );
}

export default Intro;
