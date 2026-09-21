import { Link, useLocation } from "react-router-dom";

import Glass from "@components/UI/Glass";

import styles from "./navigation-bar.module.scss";

type IconProps = {
    to: string;
    icon: string;
    active: boolean;
}

function Icon({ to, icon, active }: IconProps) {
    return (
        <Link to={to} className={`${styles.navLink} ${active ? styles.active : ""}`}>
            <i className={`fa-regular fa-${icon} ${styles.linkIcon}`} />
            <i className={`fa-solid fa-${icon} ${styles.linkSolidIcon}`} />
        </Link>
    )
}

export default function NavigationBar() {
    const location = useLocation();

    return (
        <>
            <div className={styles.wrapper}>
                <Glass>
                    <div className={styles.navigationBar}>
                        <div className={styles.logo}>
                            <Link to="/">
                                <img src="/content/logo.png" className={styles.logoImage} draggable={false} />
                            </Link>
                        </div>

                        <div className={styles.links}> {/* TO-DO: on hover for these change them into solids + add active state */}
                            <Icon to="/dashboard" icon="house" active={location.pathname === "/dashboard"} /> {/* dashboard - stats, set planet */}
                            <Icon to="/chat" icon="comment" active={location.pathname === "/chat"} /> {/* chat - talk to other players and arrange trades */}
                            <Icon to="/market" icon="store" active={location.pathname === "/market"} /> {/* market - packs, cards, boosts, etc. */}
                            <Icon to="/collection" icon="box" active={location.pathname === "/collection"} /> {/* collection - view cards, use boosts, manage decks */}
                            <Icon to="/battleground" icon="swords" active={location.pathname === "/battleground"} /> {/* battleground - battles, matches, etc. */}
                            <Icon to="/leaderboard" icon="trophy" active={location.pathname === "/leaderboard"} /> {/* leaderboard - look at other people's stats and top players (likely sorted by cards and xp) */}
                            <Icon to="/settings" icon="cog" active={location.pathname === "/settings"} /> {/* settings - account, profile, preferences, real purchases etc. */}
                        </div>
                    </div>
                </Glass>
            </div>
        </>
    )
}