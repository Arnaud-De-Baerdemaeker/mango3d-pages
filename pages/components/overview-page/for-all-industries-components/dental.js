import React from "react";
import Link from "next/link";

function Dental() {
    return (
        <div>
            <figure>
                <img
                    src={"/dental-lychee-slicer.jpg"}
                    title={"dental-lychee-slicer"}
                />
                <figcaption>
                    {"3D model:"}
                    <Link href={"https://3d-expert.fr/"} target={"_blank"}>
                        <a>{"3D Expert.fr"}</a>
                    </Link>
                </figcaption>
            </figure>
            <h3>{"Dental and Orthodontics"}</h3>
        </div>
    );
}

export default Dental;
