import React, {useState} from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";

import styles from "./../scss-components/title.module.scss";

function Title() {
    // Handles the appearance of the icon when hovering
    const [isButton1Hovered, setIsButton1Hovered] = useState(false);
    const [isButton2Hovered, setIsButton2Hovered] = useState(false);

    const onButton1 = () => {
        setIsButton1Hovered(true);
    };

    const onButton2 = () => {
        setIsButton2Hovered(true);
    };

    const leaveButton1 = () => {
        setIsButton1Hovered(false);
    };

    const leaveButton2 = () => {
        setIsButton2Hovered(false);
    };

    const handleArrow1Display = () => {
        if (isButton1Hovered === true) {
            return styles.title__arrow1;
        }

        return styles.title__arrow1Hidden;
    };

    const handleArrow2Display = () => {
        if (isButton2Hovered === true) {
            return styles.title__arrow2;
        }

        return styles.title__arrow2Hidden;
    };

    return (
        <div className={styles.title__container}>
            <div className={styles.title__subContainer}>
                <figure className={styles.title__logo}>
                    <img src={"/lychee_small.png"} />
                </figure>
                <div className={styles.title__mainTitle}>
                    <h1 className={styles.title__mainTitle}>
                        {"Lychee Slicer 3"}
                    </h1>
                </div>
                <div>
                    <h2 className={styles.title__subTitle}>
                        {
                            "A powerful and versatile slicer for SLA resin 3D printers"
                        }
                    </h2>
                </div>
            </div>
            <div className={styles.title__links}>
                <div
                    className={styles.title__button}
                    onMouseOver={onButton1}
                    onMouseLeave={leaveButton1}>
                    <Link href={"/downloads"}>
                        <a className={styles.title__link}>
                            {"Get Lychee Slicer 3 Free Edition"}
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={handleArrow1Display()}
                            />
                        </a>
                    </Link>
                </div>
                <div
                    className={styles.title__button}
                    onMouseOver={onButton2}
                    onMouseLeave={leaveButton2}>
                    <Link href={"#"}>
                        <a className={styles.title__link}>
                            {"Compare versions"}
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={handleArrow2Display()}
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Title;
