import React from "react";

import styles from "./../scss-components/advanced-support-management.module.scss";

import DividerTop from "./../general-components/divider-waves-top";
import ParentingBracing from "./advanced-support-management-components/parenting-bracing";
import IslandDetector from "./advanced-support-management-components/island-detector";
import MirrorSupport from "./advanced-support-management-components/mirror-support";
import OverhangPreview from "./advanced-support-management-components/overhang-preview";
import DynamicRaft from "./advanced-support-management-components/dynamic-raft";
import DividerBottom from "./../general-components/divider-waves-bottom";

function AdvancedSupportManagement() {
    return (
        <div className={styles.advancedSupportManagement}>
            <DividerTop />
            <div className={styles.advancedSupportManagement__intro}>
                <div
                    className={
                        styles.advancedSupportManagement__titleContainer
                    }>
                    <h2 className={styles.advancedSupportManagement__title}>
                        {"Advanced Support Management"}
                    </h2>
                </div>
                <div
                    className={styles.advancedSupportManagement__textContainer}>
                    <p className={styles.advancedSupportManagement__text}>
                        {
                            "Our development heavily focuses on improving supports algorithms to produce optimum results for easy and quick prints. We also provide smart and powerful tools for advanced users who need full control over their supports."
                        }
                    </p>
                </div>
            </div>
            <div className={styles.advancedSupportManagement__models}>
                <ParentingBracing />
                <IslandDetector />
                <MirrorSupport />
                <OverhangPreview />
                <DynamicRaft />
            </div>
            <DividerBottom />
        </div>
    );
}

export default AdvancedSupportManagement;
