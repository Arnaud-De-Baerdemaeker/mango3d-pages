import React from "react";

function MirrorSupport() {
    return (
        <div>
            <div>
                <h3>{"Mirror Support"}</h3>
                <figure>
                    <img
                        src={"/feature_mirror_support.jpg"}
                        title={"feature_mirror_support"}
                    />
                    <figcaption>
                        {
                            "Place your supports symmetrically with the help of the mirror option saving you production time."
                        }
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default MirrorSupport;
