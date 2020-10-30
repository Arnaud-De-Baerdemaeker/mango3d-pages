import React from "react";
import RealtimeHollowing from "./realtime-operations-components/realtime-hollowing";
import DrainHoles from "./realtime-operations-components/drain-holes";
import RealtimePreview from "./realtime-operations-components/realtime-preview";

function RealtimeOperations() {
    return (
        <div>
            <div>
                <h2>{"Realtime operations"}</h2>
                <p>
                    {
                        "Because printing a model can take hours (or days!), it is crucial to anticipate the 3D printing constraints, and being sure the optimizations you are doing, like hollowing, are done the right way. Lychee Slicer provides several tools and functions that are working realtime: check the result right away and reduce the risks of printing failures."
                    }
                </p>
            </div>
            <div>
                <RealtimeHollowing />
                <DrainHoles />
                <RealtimePreview />
            </div>
        </div>
    );
}

export default RealtimeOperations;
