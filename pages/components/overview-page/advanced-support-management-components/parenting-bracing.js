import React from "react";

function ParentingBracing() {
    return (
        <div>
            <div>
                <h3>{"Parenting &#38; Bracing"}</h3>
                <figure>
                    <img
                        src={"/feature_auto_bracing2.gif"}
                        title={"feature_auto_bracing2"}
                    />
                    <figcaption>
                        {
                            "Automatically create connections between supports for improved strength and saving resin cost."
                        }
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ParentingBracing;
