import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRss} from "@fortawesome/free-solid-svg-icons";
import {
    faDiscord,
    faInstagram,
    faTwitter,
    faFacebookF,
    faFacebookSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./../../scss-components/networks.module.scss";

function Networks() {
    return (
        <nav className={styles.networks}>
            <ul className={styles.networks__list}>
                <li className={styles.networks__listItem}>
                    <Link href={"#"}>
                        <a className={styles.networks__link}>
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                    </Link>
                </li>
                <li className={styles.networks__listItem}>
                    <Link href={"#"}>
                        <a className={styles.networks__link}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </Link>
                </li>
                <li className={styles.networks__listItem}>
                    <Link href={"#"}>
                        <a className={styles.networks__link}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </Link>
                </li>
                <li className={styles.networks__listItem}>
                    <Link href={"#"}>
                        <a className={styles.networks__link}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </Link>
                </li>
                <li className={styles.networks__listItem}>
                    <Link href={"#"}>
                        <a className={styles.networks__link}>
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                    </Link>
                </li>
                <li className={styles.networks__listItem}>
                    <Link href={"#"}>
                        <a className={styles.networks__link}>
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </Link>
                </li>
                <li className={styles.networks__listItem}>
                    <Link href={"#"}>
                        <a className={styles.networks__link}>
                            <FontAwesomeIcon icon={faRss} />
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Networks;
