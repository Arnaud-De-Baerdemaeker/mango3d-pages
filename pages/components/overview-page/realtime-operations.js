import React from "react";

import styles from "./../scss-components/realtime-operations.module.scss";

import RealtimeHollowing from "./realtime-operations-components/realtime-hollowing";
import DrainHoles from "./realtime-operations-components/drain-holes";
import RealtimePreview from "./realtime-operations-components/realtime-preview";

function RealtimeOperations() {
    return (
        <div className={styles.realtimeOperations}>
            <div className={styles.realtimeOperations__intro}>
                <div className={styles.realtimeOperations__titleContainer}>
                    <h2 className={styles.realtimeOperations__title}>
                        {"Realtime operations"}
                    </h2>
                </div>
                <div className={styles.realtimeOperations__textContainer}>
                    <p className={styles.realtimeOperations__text}>
                        {
                            "Because printing a model can take hours (or days!), it is crucial to anticipate the 3D printing constraints, and being sure the optimizations you are doing, like hollowing, are done the right way. Lychee Slicer provides several tools and functions that are working realtime: check the result right away and reduce the risks of printing failures."
                        }
                    </p>
                </div>
            </div>
            <div className={styles.realtimeOperations__models}>
                <RealtimeHollowing />
                <DrainHoles />
                <RealtimePreview />
            </div>
        </div>
    );
}

export default RealtimeOperations;
