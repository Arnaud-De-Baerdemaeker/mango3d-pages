import React, {useState} from "react";
import Link from "next/link";

import styles from "./../scss-components/header.module.scss";

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContainer__subContainer}>
                <div className={styles.headerContainer__logo}>
                    <Link href={"/"}>
                        <a>
                            <img
                                src={
                                    "/xmango_logo_web2.png.pagespeed.ic.LGIZWcBDYU.webp"
                                }
                                alt={"Mango 3D"}
                            />
                        </a>
                    </Link>
                </div>
                <div className={styles.headerContainer__menu}>
                    <nav className={styles.headerContainer__navigation}>
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
                                    setIsHovered(true);
                                }}
                                onMouseLeave={() => {
                                    setIsHovered(false);
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
                                    </a>
                                </Link>
                                <ul
                                    className={
                                        isHovered
                                            ? styles.headerContainer__lvl2ListDisplayed
                                            : styles.headerContainer__lvl2ListHidden
                                    }>
                                    <li
                                        className={
                                            styles.headerContainer__lvl2ListItem
                                        }>
                                        <Link href={"#"}>
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
                                <Link href={"/pages/downloads"}>
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
