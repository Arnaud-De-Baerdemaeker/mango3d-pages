import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

import styles from "./../scss-components/back-to-top.module.scss";

function BackToTop({scrollValue}) {
    // When 200 or more pixels have been passed, the back to top button will appear. Otherwise, it's hidden
    const buttonIsDisplayed = () => {
        if (scrollValue >= 200) {
            return styles.backToTop;
        }

        return styles.backToTopHidden;
    };

    // When clicking on the button, the page will scroll back to the top
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
