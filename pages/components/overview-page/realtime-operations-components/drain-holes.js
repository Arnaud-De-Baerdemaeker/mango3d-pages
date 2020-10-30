import React from "react";

function DrainHoles() {
    return (
        <div>
            <div>
                <h3>{"Drain Holes"}</h3>
                <p>
                    {
                        "Add drainage holes quickly and dynamically. You do not need to use an external 3D software."
                    }
                </p>
            </div>
            <div>
                <figure>
                    <img src={"/feature_holes.jpg"} title={"feature_holes"} />
                </figure>
            </div>
        </div>
    );
}

export default DrainHoles;
