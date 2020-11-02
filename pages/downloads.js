import React from "react";
import Header from "./components/general-components/header";
import Intro from "./components/downloads-page/intro";
import Iframe from "./components/downloads-page/iframe";
import Footer from "./components/general-components/footer";

function Downloads() {
    return (
        <>
            <style jsx global>
                {
                    "*{ box-sizing: border-box; } body{ margin: 0px; color: rgb(102, 102, 102); -webkit-font-smoothing: antialiased; font-weight: 500; }"
                }
            </style>
            <Header />
            <Intro />
            <Iframe />
            <Footer />
        </>
    );
}

export default Downloads;
