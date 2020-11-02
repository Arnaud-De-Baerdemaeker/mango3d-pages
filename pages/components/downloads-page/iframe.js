import React from "react";

import styles from "./../scss-components/iframe.module.scss";

function Iframe() {
    return (
        <div className={styles.iframeBackground}>
            <div className={styles.iframeContainer}>
                <iframe
                    src={"https://mango3d.io/change-log-lychee-slicer/"}
                    className={styles.iframe}
                />
            </div>
        </div>
    );
}

export default Iframe;
