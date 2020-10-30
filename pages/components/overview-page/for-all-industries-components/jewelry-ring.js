import React from "react";
import Link from "next/link";

function JewelryRing() {
    return (
        <div>
            <figure>
                <img
                    src={"/lychee-slicer-jewelry-ring.jpg"}
                    title={"lychee-slicer-jewelry-ring"}
                />
                <figcaption>
                    {"3D model :"}
                    <Link
                        href={
                            "https://fr.3dexport.com/free-3dmodel-jewellery-ring-192865.htm"
                        }>
                        <a>{"Nirvanna"}</a>
                    </Link>
                </figcaption>
            </figure>
            <h3>{"Jewelry Design"}</h3>
        </div>
    );
}

export default JewelryRing;
