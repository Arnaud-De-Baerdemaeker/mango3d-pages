import React from "react";
import Link from "next/link";

function Title() {
    return (
        <div>
            <div>
                <div>
                    <img src={"/lychee_small.png"} />
                </div>
                <div>
                    <h1>{"Lychee Slicer 3"}</h1>
                </div>
                <div>
                    <h2>
                        {
                            "A powerful and versatile slicer for SLA resin 3D printers"
                        }
                    </h2>
                </div>
            </div>
            <div>
                <div>
                    <Link href={"/downloads"}>
                        <a>{"Get Lychee Slicer 3 Free Edition"}</a>
                    </Link>
                </div>
                <div>
                    <Link href={"#"}>
                        <a>{"Compare versions"}</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Title;
