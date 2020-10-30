import React from "react";

function OverhangPreview() {
    return (
        <div>
            <div>
                <h3>{"Overhang Preview"}</h3>
                <figure>
                    <img
                        src={"/feature_overhang2.gif"}
                        title={"feature_overhang2"}
                    />
                    <figcaption>
                        {
                            "Lychee shows you in real-time areas that need supports. Add supports to reduce or remove these areas."
                        }
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default OverhangPreview;
