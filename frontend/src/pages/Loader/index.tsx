import styles from "./loader.module.scss";

export default function Loader() {
    return (
        <>
            <div className={styles.loaderWrapper}>
                <img src="/content/logo.png" className={styles.logo} /> {/* Maybe a bounce left to right animation */}
                {/** <div className={styles.loaderText}>Loading...</div> Show a fun fact instead or more info if possible... */}
                <div className={"w-12 h-12 rounded-full animate-spin border-y-8 border-solid border-t-transparent shadow-md"} style={{ borderColor: "#ffffff"}} /> {/* would be rlly cool to see this be surrounding the logo if that makes sense */}
            </div>
        </>
    )
}