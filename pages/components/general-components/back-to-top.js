import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

import styles from "./../scss-components/back-to-top.module.scss";

function BackToTop({scrollValue}) {
    const buttonIsDisplayed = () => {
        if (scrollValue >= 200) {
            return styles.backToTop;
        }

        return styles.backToTopHidden;
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div onClick={scrollToTop} className={buttonIsDisplayed()}>
            <FontAwesomeIcon icon={faAngleUp} />
        </div>
    );
}

export default BackToTop;
