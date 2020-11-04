import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudDownloadAlt} from "@fortawesome/free-solid-svg-icons";

import styles from "./../scss-components/versions.module.scss";

function Versions({data}) {
    // Get the name from the JSON and transforms it to remove the space between
    const name = data.name.en;
    const nameNoSpace = name.split(" ").join("");

    return (
        <div className={styles.versions}>
            <div className={styles.versions__Container}>
                <div className={styles.versions__stableContainer}>
                    <div className={styles.versions__stableTitle}>
                        {`Stable - Current version: ${data.url.latest}`}
                    </div>
                    <ul className={styles.versions__stableList}>
                        <li className={styles.versions__stableListItem}>
                            <Link
                                href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}+Setup+${data.url.latest}.exe`}>
                                <a className={styles.versions__stableLink}>
                                    <FontAwesomeIcon
                                        icon={faCloudDownloadAlt}
                                        className={styles.versions__cloud}
                                    />
                                    {"Windows 64-bit"}
                                </a>
                            </Link>
                        </li>
                        <li className={styles.versions__stableListItem}>
                            <Link
                                href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}-${data.url.latest}.dmg`}>
                                <a className={styles.versions__stableLink}>
                                    <FontAwesomeIcon
                                        icon={faCloudDownloadAlt}
                                        className={styles.versions__cloud}
                                    />
                                    {"Mac OS"}
                                </a>
                            </Link>
                        </li>
                        <li className={styles.versions__stableListItem}>
                            <Link
                                href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}_${data.url.latest}_amd64.deb`}>
                                <a className={styles.versions__stableLink}>
                                    <FontAwesomeIcon
                                        icon={faCloudDownloadAlt}
                                        className={styles.versions__cloud}
                                    />
                                    {"Linux Deb"}
                                </a>
                            </Link>
                        </li>
                        <li className={styles.versions__stableListItem}>
                            <Link
                                href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}-${data.url.latest}.tar.gz`}>
                                <a className={styles.versions__stableLink}>
                                    <FontAwesomeIcon
                                        icon={faCloudDownloadAlt}
                                        className={styles.versions__cloud}
                                    />
                                    {"Linux tar.gz"}
                                </a>
                            </Link>
                        </li>
                        <li className={styles.versions__stableListItem}>
                            <Link
                                href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}-${data.url.latest}.AppImage`}>
                                <a className={styles.versions__stableLink}>
                                    <FontAwesomeIcon
                                        icon={faCloudDownloadAlt}
                                        className={styles.versions__cloud}
                                    />
                                    {"Linux App Img"}
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.versions__betaContainer}>
                    <div className={styles.versions__betaTitle}>
                        {`Public Beta - Current version: ${data.url.beta}`}
                    </div>
                    <ul className={styles.versions__betaList}>
                        <li className={styles.versions__betaListItem}>
                            <Link
                                href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}+Setup+${data.url.beta}.exe`}>
                                <a className={styles.versions__betaLink}>
                                    <FontAwesomeIcon
                                        icon={faCloudDownloadAlt}
                                        className={styles.versions__cloud}
                                    />
                                    {"Windows 64-bit"}
                                </a>
                            </Link>
                        </li>
                        <li className={styles.versions__betaListItem}>
                            <Link
                                href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}-${data.url.beta}.dmg`}>
                                <a className={styles.versions__betaLink}>
                                    <FontAwesomeIcon
                                        icon={faCloudDownloadAlt}
                                        className={styles.versions__cloud}
                                    />
                                    {"Mac OS"}
                                </a>
                            </Link>
                        </li>
                        <li className={styles.versions__betaListItem}>
                            <Link
                                href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}_${data.url.beta}_amd64.deb`}>
                                <a className={styles.versions__betaLink}>
                                    <FontAwesomeIcon
                                        icon={faCloudDownloadAlt}
                                        className={styles.versions__cloud}
                                    />
                                    {"Linux Deb"}
                                </a>
                            </Link>
                        </li>
                        <li className={styles.versions__betaListItem}>
                            <Link
                                href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}-${data.url.beta}.tar.gz`}>
                                <a className={styles.versions__betaLink}>
                                    <FontAwesomeIcon
                                        icon={faCloudDownloadAlt}
                                        className={styles.versions__cloud}
                                    />
                                    {"Linux tar.gz"}
                                </a>
                            </Link>
                        </li>
                        <li className={styles.versions__betaListItem}>
                            <Link
                                href={`https://mango-lychee.s3.eu-west-3.amazonaws.com/${nameNoSpace}-${data.url.beta}.AppImage`}>
                                <a className={styles.versions__betaLink}>
                                    <FontAwesomeIcon
                                        icon={faCloudDownloadAlt}
                                        className={styles.versions__cloud}
                                    />
                                    {"Linux App Img"}
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Versions;
