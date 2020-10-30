import React from "react";
import Link from "next/link";

function Intro() {
    return (
        <div>
            <div>
                <p>
                    {
                        "With Lychee, prepare your 3D models for 3D printing: define the best orientation, create supports automatically, or manually, preview before sending them to your 3D printer."
                    }
                </p>
                <p>
                    {
                        "The Slicer is the mandatory companion for your SLA/resin 3D Printer, whatever it is a Photon-S from Anycubic, a Mars Pro from Elegoo, or many other 3D printers. It helps you prepare your model with ease and precision, slice your models with accuracy and give you a lot of cool features like real-time hollowing, island detector, advanced support edition, and more."
                    }
                </p>
            </div>
            <div>
                <figure>
                    <img
                        src={"/lychee-slicer-overview-interface.png"}
                        title={"lychee-slicer-overview-interface"}
                    />
                    <figcaption>
                        {"3D model: "}{" "}
                        <Link
                            href={"https://www.patreon.com/ArtisanGuild"}
                            target={"_blank"}>
                            <a>{"Artisan Guild"}</a>
                        </Link>
                    </figcaption>
                </figure>
                <div>
                    <div>
                        <h2>{"Easy to use interface"}</h2>
                        <p>
                            {
                                "With its easy to use interface, available in many languages, you will get to work with Lychee Slicer in just a few minutes."
                            }
                        </p>
                    </div>
                    <div>
                        <h2>{"Full Automatic Mode with Magic Menu"}</h2>
                        <p>
                            {
                                "Thanks to the Magic Menu, you can automate the preparation of your model. Save time by automating the orientation, Supports addition, optimizing, and adding a raft to ensure printability."
                            }
                        </p>
                    </div>
                    <div>
                        <h2>{"Powerful automatic supports"}</h2>
                        <p>
                            {
                                "3D print Supports, these tiny pillars, are a crucial element for successful prints. But mastering these supports can be science by itself. Lychee provides very powerful and smart automatic supports algorithms."
                            }
                        </p>
                    </div>
                    <div>
                        <h2>{"Be in Control"}</h2>
                        <p>
                            {
                                "Lychee Slicer offers more demanding users the control over the whole 3D printing preparation process and, in particular, the Supports control. With advanced tools and settings, it is possible to create Supports for the most challenging 3D models."
                            }
                        </p>
                    </div>
                    <div>
                        <h2>{"3D Printed supported"}</h2>
                        <p>
                            {
                                "Chances are your printer is supported by Lychee: Anycubic Photon S, Longer Orange 30, Elegoo Mars Pro, to name a few. And we’re adding more regularly."
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Link href={"#"}>
                    <a>{"What's new in Lychee Slicer 3"}</a>
                </Link>
            </div>
        </div>
    );
}

export default Intro;
