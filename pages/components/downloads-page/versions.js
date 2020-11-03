import React from "react";
import Link from "next/link";

function Versions({data}) {
    const name = data.name.en;
    const nameNoSpace = name.split(" ").join("");

    return (
        <div>
            <div>
                <div>{`Stable - Current version: ${data.url.latest}`}</div>
                <ul>
                    <li>
                        <Link
                            href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}+Setup+${data.url.latest}.exe`}>
                            <a>{"Windows 64-bit"}</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}-${data.url.latest}.dmg`}>
                            <a>{"Mac OS"}</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}_${data.url.latest}_amd64.deb`}>
                            <a>{"Linux Deb"}</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}-${data.url.latest}.tar.gz`}>
                            <a>{"Linux tar.gz"}</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}-${data.url.latest}.AppImage`}>
                            <a>{"Linux App Img"}</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <div>{`Public Beta - Current version: ${data.url.beta}`}</div>
                <ul>
                    <li>
                        <Link
                            href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}+Setup+${data.url.beta}.exe`}>
                            <a>{"Windows 64-bit"}</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}-${data.url.beta}.dmg`}>
                            <a>{"Mac OS"}</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}_${data.url.beta}_amd64.deb`}>
                            <a>{"Linux Deb"}</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}-${data.url.beta}.tar.gz`}>
                            <a>{"Linux tar.gz"}</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}-${data.url.beta}.AppImage`}>
                            <a>{"Linux App Img"}</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Versions;
