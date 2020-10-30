import React from "react";

function IslandDetector() {
    return (
        <div>
            <div>
                <h3>{"Island Detector"}</h3>
                <figure>
                    <img
                        src={"/feature_island2.gif"}
                        title={"feature_island2"}
                    />
                    <figcaption>
                        {
                            "Find easily areas that require supports with the detection of islands. Spot them in seconds."
                        }
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default IslandDetector;
