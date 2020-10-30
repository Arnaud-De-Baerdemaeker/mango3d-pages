import React from "react";
import Link from "next/link";

import Networks from "./footer-components/networks";

function Footer() {
    return (
        <div>
            <div>
                <p>
                    {
                        "We design and develop experiences that make people's life easier."
                    }
                </p>
            </div>
            <div>
                <div>
                    <p>
                        {
                            "Mango is a company with at its core a team of developers and electronics engineers passionate about 3D printing and related technologies, who develop software and hardware solutions for individuals, professionals and manufacturers."
                        }
                    </p>
                </div>
                <div>
                    <p>
                        {"Copyright 2020 © Mango3d."}
                        <br />
                        {
                            "All rights reserved, Mango, Lychee and the associated logos are registered trademarks of Mango SAS. All other trademarks are the property of their respective owners."
                        }
                    </p>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link href={"#"}>
                                <a>{"Contact us"}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"}>
                                <a>{"Privacy policy"}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"}>
                                <a>{"Terms and Conditions"}</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Networks />
            </div>
        </div>
    );
}

export default Footer;
