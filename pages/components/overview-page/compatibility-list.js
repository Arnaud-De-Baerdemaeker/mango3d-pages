import React from "react";
import Link from "next/link";

import ArrowDivider from "./../general-components/divider-arrow";

function CompatibilityList() {
    return (
        <div>
            <ArrowDivider />
            <div>
                <div>
                    <h2>{"Lychee 3D Printers Compatibility list"}</h2>
                </div>
                <div>
                    <p>
                        {
                            "Lychee Slicer supports a growing list of 3D Printers natively: prepare, optimize, and slice before exporting in a native format for your 3D printer. There is a high chance that your 3D printer is supported."
                        }
                    </p>
                </div>
            </div>
            <div>
                <Link href={"#"}>{"List of supported 3D printers"}</Link>
            </div>
        </div>
    );
}

export default CompatibilityList;
