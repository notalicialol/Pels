import { useState } from "react";

import NavigationBar from "@components/NavigationBar";

import styles from "./settings.module.scss";
import Glass from "@components/UI/Glass";

export default function Settings() {
    const [showEmail, setShowEmail] = useState(false);

    return (
        <>
            <NavigationBar />
            <div className={styles.bodyWrapper}>
                <div className={styles.headerWrapper}>
                    <div className={styles.header}>Settings</div>
                </div>
                <div className={styles.accountInfo}>
                    <div className={styles.infoHeader}>Account Info</div>
                    {/* GRAY LINES FOR SEPARATION LATER */}
                    <div className={styles.accountDetails}>
                        <div className={styles.accountDetail}>
                            <div className={styles.label}>Username</div>
                            <div className={styles.detailWrapper}>
                                <div className={styles.detail}>ItsMe</div>
                                <Glass className={styles.editGlass}>
                                    <div className={styles.editWrapper}>
                                        <div><i className={"fa-solid fa-pencil " + styles.editIcon} /></div>
                                        <div>Edit</div>
                                    </div>
                                </Glass>
                            </div>
                        </div>
                        <div className={styles.accountDetail}>
                            <div className={styles.label}>Email</div>
                            <div className={styles.detailWrapper}>
                                <div className={styles.visibility} onClick={() => setShowEmail(!showEmail)}>
                                    <i className={`fa-solid ${showEmail ? "fa-eye" : "fa-eye-slash"} ${styles.visibilityIcon}`} />
                                </div>
                                <div className={`${styles.detail} ${styles.emailDetail}`}>{showEmail ? "benstewart@gmail.com" : "**********@gmail.com"}</div>
                                <Glass className={styles.editGlass}>
                                    <div className={styles.editWrapper}>
                                        <div><i className={"fa-solid fa-pencil " + styles.editIcon} /></div>
                                        <div>Edit</div>
                                    </div>
                                </Glass>
                            </div>
                        </div>
                        <div className={styles.accountDetail}>
                            <div className={styles.label}>Password</div>
                            <div className={styles.detailWrapper}>
                                <Glass className={styles.editGlass}>
                                    <div className={styles.editWrapper}>
                                        <div>Edit</div>
                                    </div>
                                </Glass>
                            </div>
                        </div>
                        {/* <div className={styles.accountDetail}>
                            <div className={styles.label}>Two-Factor Authentication</div>
                            <Glass className={styles.passwordGlass}>
                                <div className={styles.passwordWrapper}>
                                    <i className={"fa-solid fa-pencil " + styles.editIcon} />
                                </div>
                            </Glass>
                        </div> */}
                    </div>
                </div>

                <div className={styles.accountInfo}>
                    <div className={styles.infoHeader}>Requests</div>
                    {/* GRAY LINES FOR SEPARATION LATER */}
                    <div className={styles.accountDetails}>
                        <div className={styles.accountDetail}>
                            <div className={styles.detailText}>
                                <div className={styles.label}>Friend Requests</div>
                                <div className={styles.sublabel}>Who can send you friend requests?</div>
                            </div>
                            <div className={styles.detailWrapper}>
                                <div className={styles.detail}>Anyone</div> {/* make this either a dropdown or toggle */}
                                <Glass className={styles.editGlass}>
                                    <div className={styles.editWrapper}>
                                        <div><i className={"fa-solid fa-pencil " + styles.editIcon} /></div>
                                        <div>Edit</div>
                                    </div>
                                </Glass>
                            </div>
                        </div>
                        <div className={styles.accountDetail}>
                            <div className={styles.detailText}>
                                <div className={styles.label}>Trade Requests</div>
                                <div className={styles.sublabel}>Who can send you trade requests?</div>
                            </div>
                            <div className={styles.detailWrapper}>
                                <div className={styles.detail}>Friends</div> {/* make this either a dropdown or toggle */}
                                <Glass className={styles.editGlass}>
                                    <div className={styles.editWrapper}>
                                        <div><i className={"fa-solid fa-pencil " + styles.editIcon} /></div>
                                        <div>Edit</div>
                                    </div>
                                </Glass>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.accountInfo}>
                    <div className={styles.infoHeader}>Notifications</div>
                    {/* GRAY LINES FOR SEPARATION LATER */}
                    <div className={styles.accountDetails}>
                        <div className={styles.accountDetail}>
                            <div className={styles.label}>Toggle Desktop Notifications</div>
                            <div className={styles.detailWrapper}>
                                <Glass className={styles.editGlass}> {/* this will be a toggle switch trust */}
                                    <div className={styles.editWrapper}>
                                        <div>Edit</div>
                                    </div>
                                </Glass>
                            </div>
                        </div>
                        <div className={styles.accountDetail}>
                            <div className={styles.label}>Toggle Email Notifications</div>
                            <div className={styles.detailWrapper}>
                                <Glass className={styles.editGlass}> {/* this will be a toggle switch trust */}
                                    <div className={styles.editWrapper}>
                                        <div>Edit</div>
                                    </div>
                                </Glass>
                            </div>
                        </div>
                        <div className={styles.accountDetail}>
                            <div className={styles.detailText}>
                                <div className={styles.label}>Notification Sounds</div>
                                <div className={styles.sublabel}>What notifications should make sounds?</div>
                            </div>
                            <div className={styles.detailWrapper}>
                                <div className={styles.detail}>None</div> {/* make this either a multi-select dropdown */}
                                <Glass className={styles.editGlass}>
                                    <div className={styles.editWrapper}>
                                        <div><i className={"fa-solid fa-pencil " + styles.editIcon} /></div>
                                        <div>Edit</div>
                                    </div>
                                </Glass>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.accountInfo}>
                    <div className={styles.infoHeader}>Account Management</div>
                    {/* GRAY LINES FOR SEPARATION LATER */}
                    <div className={styles.accountDetails}>
                        <div className={styles.accountDetail}>
                            <div className={styles.label}>Log Out</div>
                            <div className={styles.detailWrapper}>
                                <Glass className={styles.editGlass}> {/* this will be a toggle switch trust */}
                                    <div className={styles.editWrapper}>
                                        <div>Logout</div>
                                    </div>
                                </Glass>
                            </div>
                        </div>

                        <div className={styles.accountDetail}>
                            <div className={styles.detailText}>
                                <div className={styles.label}>Delete Account</div>
                                <div className={styles.sublabel}>This action <span style={{ fontWeight: "800" }}>cannot be undone;</span> please proceed with caution.</div>
                            </div>
                            <div className={styles.detailWrapper}>
                                <Glass className={styles.editGlass}> {/* this will be a toggle switch trust */}
                                    <div className={styles.editWrapper}>
                                        <div style={{ color: "#ff4d4d" }}>Delete</div>
                                    </div>
                                </Glass>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}