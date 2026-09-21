import { Link } from "react-router-dom";

import NavigationBar from "@components/NavigationBar";
import Glass from "@components/UI/Glass";

import styles from "./home.module.scss";

export default function Home() {
    return (
        <>
            <NavigationBar />
            <div className={styles.bodyWrapper}>
                <div className={styles.heroWrapper}>
                    <div className={styles.hero}>
                        <div className={styles.heroContent}>
                            <div className={styles.heroText}>
                                <div className={styles.heroTitle}>Pels</div>
                                <div className={styles.heroDescription}>Web-based collecting game in which users collect cards of varying rarities and abilities, which are then used in battles with other players to strengthen abilities.</div>

                                <div className={styles.communityInfo}>
                                    <div className={styles.status} />
                                    <div className={styles.memberCount}>Join our community of <span style={{ fontWeight: "bold" }}>67 users!</span></div>
                                </div>

                                <div className={styles.links}>
                                    <div className={styles.authLinks}>
                                        <Link to="/register" className={styles.link}>
                                            <Glass className={`${styles.linkGlass} ${styles.registerLink}`}>
                                                <div className={styles.linkContent}>
                                                    <div><i className={"fa-solid fa-user"} /></div>
                                                    <div>Register</div>
                                                </div>
                                            </Glass>
                                        </Link>

                                        <Link to="/login" className={styles.link}>
                                            <Glass className={`${styles.linkGlass} ${styles.link}`}>
                                                <div className={styles.linkContent}>
                                                    <div><i className={"fa-solid fa-right-to-bracket"} /></div>
                                                    <div>Login</div>
                                                </div>
                                            </Glass>
                                        </Link>
                                    </div>

                                    <div className={styles.socialLinks}>
                                        <Link to="https://github.com/notalicialol/Pels" target="_blank" className={styles.link}>
                                            <Glass className={styles.linkGlass}>
                                                <div className={styles.linkContent}>
                                                    <div><i className={"fa-brands fa-github"} /></div>
                                                    <div>GitHub</div>
                                                </div>
                                            </Glass>
                                        </Link>

                                        <Link to="#" className={styles.link}>
                                            <Glass className={styles.linkGlass}>
                                                <div className={styles.linkContent}>
                                                    <div><i className={"fa-brands fa-discord"} /></div>
                                                    <div>Discord</div>
                                                </div>
                                            </Glass>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Pokemon cards are placeholders; we need art later but that requires actual artists */}
                            <div className={styles.heroImages}>
                                <img src="/content/placeholders/Gourgeist.png" className={styles.heroCard} draggable={false} />
                                <img src="/content/placeholders/Ho-Oh.png" className={styles.heroCard} draggable={false} /> {/* will likely be random cards after we get art */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* TO-DO: fix the alignment there's an issue I can't find; lot of this will be reformatted when mobile support is added */}
        </>
    )
}