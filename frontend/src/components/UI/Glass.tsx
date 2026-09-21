// source for liquid glass filter: https://codepen.io/daftplug/pen/QwbaYGO

import type { HTMLAttributes } from "react";

import styles from "./glass.module.scss";

type GlassProps = HTMLAttributes<HTMLDivElement>;

export default function Glass({
    children,
    className = "",
    ...props
}: GlassProps) {
    return (
        <div className={`${styles.liquidGlass} ${className}`} {...props}>
            <div className={styles.liquidGlassContent}>{children}</div>
        </div>
    );
}