import React from "react";
import Header from "./components/general-components/header";
import Title from "./components/overview-page/title";
import Intro from "./components/overview-page/intro";
import ForAllIndustries from "./components/overview-page/for-all-industries";
import AdvancedSupportManagement from "./components/overview-page/advanced-support-management";
import RealtimeOperations from "./components/overview-page/realtime-operations";
import CompatibilityList from "./components/overview-page/compatibility-list";
import Footer from "./components/general-components/footer";
import BackToTop from "./components/general-components/back-to-top";

import styles from "./components/scss-components/index.module.scss";

function LycheeSlicer() {
    return (
        <>
            <style jsx global>
                {
                    "*{ box-sizing: border-box; } body{ margin: 0px; color: rgb(102, 102, 102); -webkit-font-smoothing: antialiased; font-weight: 500; }"
                }
            </style>
            <Header />
            <main className={styles.mainContainer}>
                <Title />
                <Intro />
                <ForAllIndustries />
                <AdvancedSupportManagement />
                <RealtimeOperations />
                <CompatibilityList />
                <Footer />
                <BackToTop />
            </main>
        </>
    );
}

export default LycheeSlicer;
