import React from "react";
import classes from './Footer.module.css';
const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div>
                <p style={{ color: "white", textAlign: "center" }}>
                    {" "}
                    <a href="" class="active" style={{ color: "blue" }}>
                        Privacy Policy
                    </a>
                    © HighRadius Corporation 2022. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
export default Footer;
