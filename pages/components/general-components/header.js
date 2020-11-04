import React, {useState, useEffect} from "react";
import Link from "next/link";
import BactToTop from "./back-to-top";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faChevronDown} from "@fortawesome/free-solid-svg-icons";

import styles from "./../scss-components/header.module.scss";

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState();

    // Get the value of the current screen size
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

    // Uses the value of the screen size to determine which CSS class to put on the tag
    const displayBurgerIcon = () => {
        if (width <= 980) {
            return styles.headerContainer__hamburgerIcon;
        }

        return styles.headerContainer__hamburgerIconHidden;
    };

    // Uses the value of the screen size to determine which CSS class to put on the tag
    // Also checks with ternary function to see if the element is hovered or not
    const setClassName = () => {
        if (width >= 981) {
            return isHovered
                ? styles.headerContainer__lvl2ListDisplayed
                : styles.headerContainer__lvl2ListHidden;
        }

        return styles.headerContainer__lvl2List;
    };

    // Function to change the state on the click
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    // Uses the value of the screen size to determine which CSS class to put on the tag
    // Also checks with ternary function to see if the element is hovered or not
    const handleMenuDisplay = () => {
        if (width <= 980) {
            return isOpen
                ? styles.headerContainer__navigation
                : styles.headerContainer__navigationHidden;
        }

        return styles.headerContainer__navigation;
    };

    return (
        <header className={styles.headerContainer}>
            <BactToTop />
            <div className={styles.headerContainer__subContainer}>
                <div className={styles.headerContainer__logo}>
                    <Link href={"/"}>
                        <a>
                            <img
                                src={
                                    "/xmango_logo_web2.png.pagespeed.ic.LGIZWcBDYU.webp"
                                }
                                alt={"Mango 3D"}
                                className={styles.headerContainer__image}
                            />
                        </a>
                    </Link>
                </div>
                <div className={styles.headerContainer__menu}>
                    <div className={displayBurgerIcon()} onClick={handleClick}>
                        <FontAwesomeIcon
                            icon={faBars}
                            className={styles.headerContainer__icon}
                        />
                    </div>
                    <nav className={handleMenuDisplay()}>
                        <ul className={styles.headerContainer__lvl1List}>
                            <li
                                className={
                                    styles.headerContainer__lvl1ListItem
                                }>
                                <Link href={"#"}>
                                    <a
                                        className={
                                            styles.headerContainer__lvl1Link
                                        }>
                                        {"We do"}
                                    </a>
                                </Link>
                            </li>
                            <li
                                onMouseOver={() => {
                                    if (width >= 981) {
                                        return setIsHovered(true);
                                    }

                                    return null;
                                }}
                                onMouseLeave={() => {
                                    if (width >= 981) {
                                        return setIsHovered(false);
                                    }

                                    return null;
                                }}
                                className={
                                    styles.headerContainer__lvl1ListItem2
                                }>
                                <Link href={"/"}>
                                    <a
                                        className={
                                            styles.headerContainer__lvl1Link2
                                        }>
                                        {"Lychee Slicer"}
                                        <FontAwesomeIcon
                                            icon={faChevronDown}
                                            className={
                                                styles.headerContainer__chevron
                                            }
                                        />
                                    </a>
                                </Link>
                                <ul className={setClassName()}>
                                    <li
                                        className={
                                            styles.headerContainer__lvl2ListItem
                                        }>
                                        <Link href={"/"}>
                                            <a
                                                className={
                                                    styles.headerContainer__lvl2Link
                                                }>
                                                {"Overview"}
                                            </a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            styles.headerContainer__lvl2ListItem
                                        }>
                                        <Link href={"#"}>
                                            <a
                                                className={
                                                    styles.headerContainer__lvl2Link
                                                }>
                                                {"New Features"}
                                            </a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            styles.headerContainer__lvl2ListItem
                                        }>
                                        <Link href={"#"}>
                                            <a
                                                className={
                                                    styles.headerContainer__lvl2Link
                                                }>
                                                {"Compare"}
                                            </a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            styles.headerContainer__lvl2ListItem
                                        }>
                                        <Link href={"#"}>
                                            <a
                                                className={
                                                    styles.headerContainer__lvl2Link
                                                }>
                                                {"3D Printers"}
                                            </a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            styles.headerContainer__lvl2ListItem
                                        }>
                                        <Link href={"#"}>
                                            <a
                                                className={
                                                    styles.headerContainer__lvl2Link
                                                }>
                                                {"Requirements"}
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className={
                                    styles.headerContainer__lvl1ListItem
                                }>
                                <Link href={"/downloads"}>
                                    <a
                                        className={
                                            styles.headerContainer__lvl1Link
                                        }>
                                        {"Downloads"}
                                    </a>
                                </Link>
                            </li>
                            <li
                                className={
                                    styles.headerContainer__lvl1ListItem
                                }>
                                <Link href={"#"}>
                                    <a
                                        className={
                                            styles.headerContainer__lvl1Link
                                        }>
                                        {"Pricing"}
                                    </a>
                                </Link>
                            </li>
                            <li
                                className={
                                    styles.headerContainer__lvl1ListItem
                                }>
                                <Link href={"#"}>
                                    <a
                                        className={
                                            styles.headerContainer__lvl1Link
                                        }>
                                        {"OEM Slicer"}
                                    </a>
                                </Link>
                            </li>
                            <li
                                className={
                                    styles.headerContainer__lvl1ListItem
                                }>
                                <Link href={"#"}>
                                    <a
                                        className={
                                            styles.headerContainer__lvl1Link
                                        }>
                                        {"News"}
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
