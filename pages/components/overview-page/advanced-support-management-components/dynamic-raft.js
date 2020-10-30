import React from "react";

function DynamicRaft() {
    return (
        <div>
            <div>
                <h3>{"Dynamic Raft"}</h3>
                <figure>
                    <img src={"/feature_raft.jpg"} title={"feature_raft"} />
                    <figcaption>
                        {
                            "Several raft shapes that fit your model can be added to ensure a strong bed adhesion."
                        }
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default DynamicRaft;
