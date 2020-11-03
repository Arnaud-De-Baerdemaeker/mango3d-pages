import React from "react";

import styles from "./../scss-components/windows.module.scss";

function Windows() {
    return (
        <div className={styles.windowsUsers}>
            <div className={styles.windows__Container}>
                <h2 className={styles.windows__title}>
                    {"Windows Users Please Read"}
                </h2>
                <p className={styles.windows__text}>
                    {
                        "When launching the installer, you will get a security warning from Windows Smart Screen. Please skip this message by clicking on the “More Info” text."
                    }
                </p>
            </div>
        </div>
    );
}

export default Windows;
