import React from "react";
import "./App.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                All copyrights&copy; are reserved @MovieLover {currentYear}. <br />
                Made with <span className="heart">❤</span> by{" "}
                <a href="https://www.linkedin.com/in/ashish-biswas" target="_blank">Ashish Biswas</a>
            </p>
        </footer>
    );
};
export default Footer;