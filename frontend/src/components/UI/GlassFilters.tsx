// source for liquid glass filter: https://codepen.io/daftplug/pen/QwbaYGO

export default function GlassFilters() {
    return (
        <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }}>
            <defs>
                <filter id="liquidGlass" x="0%" y="0%" width="100%" height="100%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
                    <feGaussianBlur in="noise" stdDeviation="0.02" result="blur" />
                    <feDisplacementMap in="SourceGraphic" in2="blur" scale="77" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </defs>
        </svg>
    );
}