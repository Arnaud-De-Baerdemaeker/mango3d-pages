import React from "react";

function RealtimePreview() {
    return (
        <div>
            <div>
                <h3>{"Realtime Preview"}</h3>
                <p>
                    {
                        "Preview your slices in real-time in the 3D view of the slicer, allowing you to check for potential 3D model imperfections."
                    }
                </p>
            </div>
            <div>
                <figure>
                    <img
                        src={"/feature_realtime_preview2.gif"}
                        title={"feature_realtime_preview2"}
                    />
                </figure>
            </div>
        </div>
    );
}

export default RealtimePreview;
