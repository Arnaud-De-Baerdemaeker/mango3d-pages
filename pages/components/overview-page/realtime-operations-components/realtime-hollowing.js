import React from "react";

function RealtimeHollowing() {
    return (
        <div>
            <div>
                <h3>{"Realtime Hollowing"}</h3>
                <p>
                    {
                        "You can hollow your model directly in Lychee without using any other 3D software. Everything is real-time in the slicer view."
                    }
                </p>
            </div>
            <div>
                <figure>
                    <img
                        src={"/feature_hollowing-3.gif"}
                        title={"feature_hollowing-3"}
                    />
                </figure>
            </div>
        </div>
    );
}

export default RealtimeHollowing;
