import NavigationBar from "@components/NavigationBar";
import Glass from "@components/UI/Glass";

import styles from "./dashboard.module.scss";

export default function Dashboard() {
    return (
        <>
            <NavigationBar />
            <div className={styles.bodyWrapper}>
                <div className={styles.headerWrapper}>
                    <div className={styles.header}>Dashboard</div>
                    <div className={styles.actions}>
                        <Glass className={styles.actionGlass}>
                            <div className={styles.actionWrapper}>
                                <i className={"fa-solid fa-inbox " + styles.actionIcon} />
                                <div className={styles.indicator} />
                                {/* gonna abuse hover indicators after but that means mobile will be super annoying to dev */}
                                {/* Tailwind has a ping animation we can use for inbox (it can show for a couple seconds and not be animated afterwards to indicate new messages) */}
                                {/**to be done (inbox - messages and notifications) */}
                            </div>
                        </Glass>

                        <Glass className={styles.actionGlass}>
                            <div className={styles.actionWrapper}>
                                <i className={"fa-solid fa-clock " + styles.actionIcon} />
                                {/* gonna abuse hover indicators after but that means mobile will be super annoying to dev */}
                                {/* Tailwind has a ping animation we can use for inbox (it can show for a couple seconds and not be animated afterwards to indicate new messages) */}
                                {/**to be done (trading history - user, id, chat history, and what was traded) */}
                            </div>
                        </Glass>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.profileWrapper}>
                        <div className={styles.avatar}>
                            <i className={"fa-solid fa-pencil " + styles.editIcon} />
                            <img src="/content/logo.png" className={styles.avatarImage} draggable={false} />
                        </div>

                        {/* the fofrmatting for this is super basic but we'll fix it later + add fav pel?? */}
                        {/* TO-DO: button that looks up other users info/has trade stuff we'll figure the details later */}
                        <div className={styles.profileLeft}>
                            <div className={styles.profileStat}>
                                <div className={styles.statHeaderWrapper}>
                                    <i className={"fa-solid fa-up " + styles.statIcon} />
                                    <div className={styles.statHeader}>Level</div>
                                </div>
                                <div className={styles.statValue}>12</div>
                            </div>

                            <div className={styles.profileStat}>
                                <div className={styles.statHeaderWrapper}>
                                    <div><i className={"fa-solid fa-star " + styles.statIcon} /></div> {/* lwk we might want a custom icon for this one */}
                                    <div className={styles.statHeader}>Total EXP</div>
                                </div>
                                <div className={styles.statValue}>67,230</div>
                            </div>

                            {/*TO-DO: progress bar */}
                        </div>

                        <div className={styles.userInfo}>
                            <div className={styles.userName}>ItsMe</div>
                            <div className={styles.userRole}>Co-Owner</div>
                            <div className={styles.userId}>UUID: 9571280975923592</div>

                            <div className={styles.userButtons}>
                                <Glass className={styles.userButtonWrapper}>
                                    <div className={styles.userButton}>
                                        <div><i className={"fa-solid fa-tag"} /></div>
                                        <div>Badges</div>
                                    </div>
                                </Glass>

                                <Glass className={styles.userButtonWrapper}>
                                    <div className={styles.userButton}>
                                        <div><i className={"fa-solid fa-medal"} /></div>
                                        <div>Achievements</div>
                                    </div>
                                </Glass>

                                {/* Might change these buttons to be moderator actions and have badges just be a row of pics */}
                            </div>
                        </div>

                        {/** TO-DO: we need user actions later for modding but that's a whole separate thing idt we should get into */}

                        <div className={styles.profileRight}>
                            <div className={styles.profileStat}>
                                <div className={styles.statHeaderWrapper}>
                                    <i className={"fa-solid fa-trophy " + styles.statIcon} />
                                    <div className={styles.statHeader}>Leaderboard</div>
                                </div>
                                <div className={styles.statValue}>#5</div>
                            </div>

                            <div className={styles.profileStat}>
                                <div className={styles.statHeaderWrapper}>
                                    <i className={"fa-solid fa-comment " + styles.statIcon} />
                                    <div className={styles.statHeader}>Total Messages</div>
                                </div>
                                <div className={styles.statValue}>93</div>
                            </div>

                            {/*TO-DO: progress bar */}
                        </div>
                    </div>
                    {/** split into basic like messages, exp and tokens idk split it and have a section for last trades */}
                    <div className={styles.userDetails}>
                        <div className={styles.detail}>
                            <i className={"fa-solid fa-cards-blank " + styles.detailIcon} />
                            <div className={styles.detailTitle}>Cards Collected</div>
                            <div className={styles.detailValue}>63 / 149</div>
                        </div>

                        <div className={styles.detail}>
                            <i className={"fa-solid fa-location-dot " + styles.detailIcon} /> {/* these are lwk generic so custom icons later */}
                            <div className={styles.detailTitle}>Current Planet</div>
                            <div className={styles.detailValue}>Earth</div>
                        </div>

                        <div className={styles.detail}>
                            <i className={"fa-solid fa-compass " + styles.detailIcon} /> {/* these are lwk generic so custom icons later */}
                            <div className={styles.detailTitle}>Furthest Planet</div>
                            <div className={styles.detailValue}>Mars</div>
                        </div>

                        <div className={styles.detail}>
                            <i className={"fa-solid fa-coins " + styles.detailIcon} />
                            <div className={styles.detailTitle}>Tokens</div>
                            <div className={styles.detailValue}>34,000</div>
                        </div>

                        <div className={styles.detail}>
                            <i className={"fa-solid fa-sword " + styles.detailIcon} />
                            <div className={styles.detailTitle}>Battles Won</div>
                            <div className={styles.detailValue}>94 / 540</div>
                            <div className={styles.detailDescription}><span className={styles.detailEmphasis}>17.4%</span> Win Rate {/** might make this a progress bar for visualising */}</div>
                        </div>

                        <div className={styles.detail}>
                            <i className={"fa-solid fa-fire " + styles.detailIcon} />
                            <div className={styles.detailTitle}>Login Streak</div>
                            <div className={styles.detailValue}>12 days</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}