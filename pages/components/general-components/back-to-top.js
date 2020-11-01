import React /*, {useState}*/ from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

import styles from "./../scss-components/back-to-top.module.scss";

function BackToTop() {
    // const [isDisplayed, useIsDisplayed] = useState(false);
    // const position = Element.scrollTop();

    // const scrollOrNot = () => {
    //     if (position > 1080)
    //     {
    //         return useIsDisplayed(true);
    //     }
    //     else
    //     {
    //         return isDisplayed;
    //     }
    // }

    return (
        <div className={styles.backToTop}>
            <FontAwesomeIcon
                icon={faAngleUp}
                // onClick={scrollToTop()}
                // className={}
            />
        </div>
    );
}

export default BackToTop;
