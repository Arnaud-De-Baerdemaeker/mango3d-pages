import React from "react";
import Link from "next/link";

import styles from "./../scss-components/footer.module.scss";

import Networks from "./footer-components/networks";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__titleContainer}>
                <p className={styles.footer__title}>
                    {
                        '"We design and develop experiences that make people\'s life easier."'
                    }
                </p>
            </div>
            <div className={styles.footer__intro}>
                <div className={styles.footer__mangoCopyrightContainer}>
                    <p className={styles.footer__mangoCopyrightText}>
                        {
                            "Mango is a company with at its core a team of developers and electronics engineers passionate about 3D printing and related technologies, who develop software and hardware solutions for individuals, professionals and manufacturers."
                        }
                        <br />
                        {"Mango is based in Belgium and France."}
                    </p>
                </div>
                <div className={styles.footer__mangoCopyrightContainer}>
                    <p className={styles.footer__mangoCopyrightText}>
                        {"Copyright 2020 © Mango3d."}
                        <br />
                        {
                            "All rights reserved, Mango, Lychee and the associated logos are registered trademarks of Mango SAS. All other trademarks are the property of their respective owners."
                        }
                    </p>
                </div>
                <div className={styles.footer__linksContainer}>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__listItem}>
                            <Link href={"#"}>
                                <a className={styles.footer__link}>
                                    {"Contact us"}
                                </a>
                            </Link>
                        </li>
                        <li className={styles.footer__listItem}>
                            <Link href={"#"}>
                                <a className={styles.footer__link}>
                                    {"Privacy policy"}
                                </a>
                            </Link>
                        </li>
                        <li className={styles.footer__listItem}>
                            <Link href={"#"}>
                                <a className={styles.footer__link}>
                                    {"Terms and Conditions"}
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer__networks}>
                <Networks />
            </div>
        </div>
    );
}

export default Footer;
