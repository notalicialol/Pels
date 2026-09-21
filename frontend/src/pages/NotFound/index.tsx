/** work on accents for home and then build stats and settings` */
import { Link } from "react-router-dom";

import NavigationBar from "@components/NavigationBar";

import styles from "./not-found.module.scss";

export default function NotFound() {
    return (
        <>
            <NavigationBar />
            <div className={styles.bodyWrapper}>
                <i className={"fa-solid fa-planet-ringed " + styles.icon} />
                <div className={styles.header}>Whoops!</div> {/* TO-DO: add some cute planet art or smt */}
                <div className={styles.subheader}>
                    <div>Looks like this planet (web page) doesn't exist.</div>
                    <div>Check your URL, or click <Link to="/" className={styles.link}>here</Link> to go back home.</div>
                </div>
            </div>
        </>
    );
    {/* TO-DO: fix the layout and styling */}
}