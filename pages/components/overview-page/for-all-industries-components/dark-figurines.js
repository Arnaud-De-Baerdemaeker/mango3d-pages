import React from "react";
import Link from "next/link";

function DarkFigurines() {
    return (
        <div>
            <figure>
                <img
                    src={"/lychee-slicer-dark-figurines.jpg"}
                    title={"lychee-slicer-dark-figurines"}
                />
                <figcaption>
                    {"3D model:"}
                    <Link
                        href={
                            "https://www.myminifactory.com/users/DarkFigurines"
                        }>
                        <a>{"Dark Figurines"}</a>
                    </Link>
                </figcaption>
            </figure>
            <h3>{"Figurines and Minis"}</h3>
        </div>
    );
}

export default DarkFigurines;
