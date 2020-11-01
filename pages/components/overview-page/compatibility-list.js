import React from "react";
import Link from "next/link";

import ArrowDivider from "./../general-components/divider-arrow";
import styles from "./../scss-components/compatibility-list.module.scss";

function CompatibilityList() {
    return (
        <div className={styles.compatibilityList}>
            <ArrowDivider />
            <div className={styles.compatibilityList__intro}>
                <div className={styles.compatibilityList__titleContainer}>
                    <h2 className={styles.compatibilityList__title}>
                        {"Lychee 3D Printers Compatibility list"}
                    </h2>
                </div>
                <div className={styles.compatibilityList__textContainer}>
                    <p className={styles.compatibilityList__text}>
                        {
                            "Lychee Slicer supports a growing list of 3D Printers natively: prepare, optimize, and slice before exporting in a native format for your 3D printer. There is a high chance that your 3D printer is supported."
                        }
                    </p>
                </div>
            </div>
            <div className={styles.compatibilityList__linkContainer}>
                <Link href={"#"}>
                    <a className={styles.compatibilityList__link}>
                        {"List of supported 3D printers"}
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default CompatibilityList;
