import React from "react";
import Link from "next/link";
import DividerBottom from "./../general-components/divider-waves-bottom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import styles from "./../../components/scss-components/intro.module.scss";

function Intro() {
    return (
        <div className={styles.intro__container}>
            <div className={styles.intro__row1}>
                <p className={styles.intro__lychee}>
                    {
                        "With Lychee, prepare your 3D models for 3D printing: define the best orientation, create supports automatically, or manually, preview before sending them to your 3D printer."
                    }
                </p>
                <p className={styles.intro__slicer}>
                    {
                        "The Slicer is the mandatory companion for your SLA/resin 3D Printer, whatever it is a Photon-S from Anycubic, a Mars Pro from Elegoo, or many other 3D printers. It helps you prepare your model with ease and precision, slice your models with accuracy and give you a lot of cool features like real-time hollowing, island detector, advanced support edition, and more."
                    }
                </p>
            </div>
            <div className={styles.intro__row2}>
                <figure className={styles.intro__imageContainer}>
                    <img
                        src={"/lychee-slicer-overview-interface.png"}
                        title={"lychee-slicer-overview-interface"}
                        className={styles.intro__image}
                    />
                    <figcaption className={styles.intro__imageCaption}>
                        {"3D model: "}{" "}
                        <Link
                            href={"https://www.patreon.com/ArtisanGuild"}
                            target={"_blank"}>
                            <a className={styles.intro__captionLink}>
                                {"Artisan Guild"}
                            </a>
                        </Link>
                    </figcaption>
                </figure>
                <div className={styles.intro__presentation}>
                    <div className={styles.intro__easy}>
                        <h2 className={styles.intro__easyTitle}>
                            {"Easy to use interface"}
                        </h2>
                        <p className={styles.intro__easyText}>
                            {
                                "With its easy to use interface, available in many languages, you will get to work with Lychee Slicer in just a few minutes."
                            }
                        </p>
                    </div>
                    <div className={styles.intro__automatic}>
                        <h2 className={styles.intro__automaticTitle}>
                            {"Full Automatic Mode with Magic Menu"}
                        </h2>
                        <p className={styles.intro__automaticText}>
                            {
                                "Thanks to the Magic Menu, you can automate the preparation of your model. Save time by automating the orientation, Supports addition, optimizing, and adding a raft to ensure printability."
                            }
                        </p>
                    </div>
                    <div className={styles.intro__supports}>
                        <h2 className={styles.intro__supportsTitle}>
                            {"Powerful automatic supports"}
                        </h2>
                        <p className={styles.intro__supportsText}>
                            {
                                "3D print Supports, these tiny pillars, are a crucial element for successful prints. But mastering these supports can be science by itself. Lychee provides very powerful and smart automatic supports algorithms."
                            }
                        </p>
                    </div>
                    <div className={styles.intro__control}>
                        <h2 className={styles.intro__controlTitle}>
                            {"Be in Control"}
                        </h2>
                        <p className={styles.intro__controlText}>
                            {
                                "Lychee Slicer offers more demanding users the control over the whole 3D printing preparation process and, in particular, the Supports control. With advanced tools and settings, it is possible to create Supports for the most challenging 3D models."
                            }
                        </p>
                    </div>
                    <div className={styles.intro__printers}>
                        <h2 className={styles.intro__printersTitle}>
                            {"3D Printed supported"}
                        </h2>
                        <p className={styles.intro__printersText}>
                            {
                                "Chances are your printer is supported by Lychee: Anycubic Photon S, Longer Orange 30, Elegoo Mars Pro, to name a few. And we’re adding more regularly."
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.intro__whatsNew}>
                <Link href={"#"}>
                    <a className={styles.intro__whatsNewLink}>
                        <FontAwesomeIcon
                            icon={faSearch}
                            className={styles.intro__search}
                        />
                        {"What's new in Lychee Slicer 3"}
                    </a>
                </Link>
            </div>
            <DividerBottom />
        </div>
    );
}

export default Intro;
