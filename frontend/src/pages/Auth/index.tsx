import NavigationBar from "@components/NavigationBar";
import Glass from "@components/UI/Glass";

import styles from "./auth.module.scss";
import { Link } from "react-router-dom";

export default function Auth({ mode } : { mode: "login" | "register" }) {
    return (
        <>
            <NavigationBar />
            <div className={styles.bodyWrapper}>
                <div className={styles.authWrapper}>
                    <div className={styles.formContainer}>
                        <div className={styles.authHeader}>{mode === "login" ? "Login" : "Register"}</div>
                        <div className={styles.authDescription}>
                            {mode === "login" ? "Welcome back!" : "Welcome to Pels; we're so excited that you're here!"} {/* the welcome back message is lwk lousy */}
                        </div>
                        <form className={styles.authForm}>
                            <div className={styles.authField}>
                                <div className={styles.authLabel}>Email Address</div>
                                <div className={styles.authInputContainer}>
                                    <div className={styles.authIcon}><i className={"fa-solid fa-envelope"} /></div>
                                    <div className={styles.authInput}><input type="email" id="email" name="email" placeholder="Email" required /></div>
                                </div>
                            </div>

                            <div className={styles.authField}>
                                <div className={styles.authLabel}>Password</div>
                                <div className={styles.authInputContainer}>
                                    <div className={styles.authIcon}><i className={"fa-solid fa-lock"} /></div>
                                    <div className={styles.authInput}><input type="password" id="password" name="password" placeholder="Password" required /></div>
                                </div>
                            </div>

                            <Glass className={styles.authButton}>
                                <button type="submit" className={styles.authButtonContent}>
                                    <div className={styles.authButtonText}>{mode === "login" ? "Login" : "Create Account"}</div>
                                </button>
                            </Glass>

                            {mode === "login" ? (
                                <div className={styles.authFooter}>
                                    <div className={styles.authFooterText}>Don't have an account? <Link to={"/register"} className={styles.authFooterLink}>Register</Link> now!</div>
                                </div>
                            ) : (
                                <div className={styles.authFooter}>
                                    <div className={styles.authFooterText}>Already have an account? <Link to={"/login"} className={styles.authFooterLink}>Login</Link> instead!</div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}