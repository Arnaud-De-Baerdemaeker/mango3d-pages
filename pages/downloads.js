import React, {useState, useEffect} from "react";
import Header from "./components/general-components/header";
import Intro from "./components/downloads-page/intro";
import Versions from "./components/downloads-page/versions";
import Windows from "./components/downloads-page/windows";
import Iframe from "./components/downloads-page/iframe";
import Footer from "./components/general-components/footer";
import BackToTop from "./components/general-components/back-to-top";

function Downloads({data}) {
    const [scrollValue, setScrollValue] = useState();

    // Get the value when the user scrolls
    useEffect(() => {
        const getScrollValue = () => {
            setScrollValue(window.pageYOffset);
        };

        window.onscroll = () => {
            getScrollValue();
        };
    }, []);

    return (
        <>
            <style jsx global>
                {
                    "*{ box-sizing: border-box; scroll-behavior: smooth; } body{ margin: 0px; color: rgb(102, 102, 102); -webkit-font-smoothing: antialiased; font-weight: 500; }"
                }
            </style>
            <Header />
            <Intro />
            <Versions data={data} />
            <Windows />
            <Iframe />
            <Footer />
            <BackToTop scrollValue={scrollValue} />
        </>
    );
}

// Fetch data using SSR
export async function getServerSideProps() {
    const res = await fetch(
        "https://api.mango3d.io/applications/a8ee1146-8d03-4b69-8a67-59009a3f9ee7",
    );
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
}

export default Downloads;
