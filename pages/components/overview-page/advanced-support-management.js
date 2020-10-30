import React from "react";

import ParentingBracing from "./advanced-support-management-components/parenting-bracing";
import IslandDetector from "./advanced-support-management-components/island-detector";
import MirrorSupport from "./advanced-support-management-components/mirror-support";
import OverhangPreview from "./advanced-support-management-components/overhang-preview";
import DynamicRaft from "./advanced-support-management-components/dynamic-raft";

function AdvancedSupportManagement() {
    return (
        <div>
            <div>
                <div>
                    <h2>{"Advanced Support Management"}</h2>
                </div>
                <div>
                    <p>
                        {
                            "Our development heavily focuses on improving supports algorithms to produce optimum results for easy and quick prints. We also provide smart and powerful tools for advanced users who need full control over their supports."
                        }
                    </p>
                </div>
            </div>
            <div>
                <ParentingBracing />
                <IslandDetector />
                <MirrorSupport />
                <OverhangPreview />
                <DynamicRaft />
            </div>
        </div>
    );
}

export default AdvancedSupportManagement;
