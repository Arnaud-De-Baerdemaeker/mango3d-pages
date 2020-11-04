import React, {useEffect, useState} from "react";
import Link from "next/link";
import Networks from "./footer-components/networks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import styles from "./../scss-components/footer.module.scss";

function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth);

        // Listens the resize event and updates the state
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Clean-up function
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleBurgerDisplay = () => {
        if (width <= 980) {
            return styles.footer__hamburgerIconContainer;
        }
        return styles.footer__hamburgerIconContainerHidden;
    };

    const handleDisplayOnWidth = () => {
        if (width <= 980) {
            return isOpen
                ? styles.footer__networks
                : styles.footer__networksHidden;
        }
        return styles.footer__networks;
    };

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
            <div
                onClick={handleClick}
                className={handleBurgerDisplay()}
                onScree>
                <FontAwesomeIcon
                    icon={faBars}
                    className={styles.footer__hamburgerIcon}
                />
            </div>
            <div className={handleDisplayOnWidth()}>
                <Networks isOpen={isOpen} />
            </div>
        </div>
    );
}

export default Footer;
