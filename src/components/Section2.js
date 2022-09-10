import React from "react";
import styles from '../styles/Section2.module.scss';

class Section2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentChance: 0,
        }
    }

    componentDidMount() {
        this.setChance(50)
    }

    setChance(newChance) {
        this.setState({currentChance: 0});

        let chance = 0;
        const interval = setInterval(() => {
            chance += 1;
            this.setState({currentChance: chance});
            if (chance >= newChance) {
                clearInterval(interval);
            }
        }, 80)
    }

    render() {
        return (
            <section className={styles.container}>
                <div className={styles.textWrapper}>
                    <h5 className={styles.mainText}>
                        <span>Your</span> <span className={styles.color}>Chance</span>
                    </h5>
                    <svg className={styles.subText} enableBackground="new 0 0 2117.67 245.48" version="1.1"
                         viewBox="0 0 2117.7 245.48" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                        <linearGradient id="a" x1="453.39" x2="453.39" y1="245.48" y2="9.0949e-13"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#59595B" stopOpacity="0" offset="0"/>
                            <stop stopColor="#4E4E4F" offset="1"/>
                        </linearGradient>
                        <path style={{fill: "none", stroke: "url(#a)"}}
                              d="m126.14 245.48c-17.68 0-34.12-3.12-49.3-9.35-15.19-6.23-28.56-14.96-40.12-26.18s-20.57-24.25-27.03-39.1c-6.46-14.84-9.69-30.88-9.69-48.11 0-17.22 3.23-33.26 9.69-48.11 6.46-14.84 15.35-27.88 26.69-39.1 11.33-11.22 24.65-19.94 39.95-26.18 15.3-6.23 31.67-9.35 49.13-9.35 19.72 0 38.3 3.91 55.76 11.73 17.45 7.82 31.84 18.76 43.18 32.81l-34.34 31.62c-8.16-10.2-17.8-17.9-28.9-23.12-11.11-5.21-23.01-7.82-35.7-7.82-10.66 0-20.52 1.99-29.58 5.95-9.07 3.97-17 9.41-23.8 16.32-6.8 6.92-12.07 15.08-15.81 24.48-3.74 9.41-5.61 19.67-5.61 30.77 0 11.11 1.92 21.42 5.78 30.94 3.85 9.52 9.23 17.74 16.15 24.65 6.91 6.92 14.96 12.36 24.14 16.32 9.18 3.97 19.21 5.95 30.09 5.95 11.33 0 21.53-2.09 30.6-6.29 9.06-4.19 16.71-10.08 22.95-17.68 6.23-7.59 10.37-16.15 12.41-25.67h-70.38v-42.84h123.08v14.96c0 17.68-3.01 33.95-9.01 48.79-6.01 14.85-14.34 27.77-24.99 38.76-10.66 11-23.24 19.55-37.74 25.67-14.51 6.12-30.38 9.18-47.6 9.18z"/>
                        <path d="m313.14 241.74v-238h49.3v238h-49.3z" fill="none" stroke="url(#a)"/>
                        <path d="m513.39 241.74-96.56-238h53.38l72.76 187.34 74.46-187.34h51l-97.92 238h-57.12z"
                              fill="none" stroke="url(#a)"/>
                        <path
                            d="m722.49 241.74v-238h182.92v42.84h-133.62v54.4h88.06v41.48h-88.06v56.44h134.98v42.84h-184.28z"
                            fill="none" stroke="url(#a)"/>

                        <g fill="none" stroke="url(#c)">
                            <linearGradient id="c" x1="1376.3" x2="1376.3" y1="241.74" y2="3.7402"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#59595B" stopOpacity="0" offset="0"/>
                                <stop stopColor="#59595B" offset="1"/>
                            </linearGradient>
                            <path
                                d="m951.62 241.74 97.92-238h56.78l96.9 238h-53.38l-24.14-62.56h-98.26l-24.48 62.56h-51.34zm91.12-102h68l-34-87.72-34 87.72z"/>
                            <path
                                d="m1277.3 241.74-52.7-238h50.66l32.3 161.16 46.24-161.16h46.58l46.24 160.82 32.3-160.82h48.96l-52.36 238h-52.02l-46.92-165.92-47.6 165.92h-51.68z"/>
                            <path
                                d="m1549.3 241.74 97.92-238h56.78l96.9 238h-53.38l-24.14-62.56h-98.26l-24.48 62.56h-51.34zm91.12-102h68l-34-87.72-34 87.72z"/>
                        </g>

                        <linearGradient id="b" x1="1995.6" x2="1995.6" y1="245.48" y2="7.4756"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#59595B" stopOpacity="0" offset="0"/>
                            <stop stopColor="#59595B" offset="1"/>
                        </linearGradient>
                        <path
                            d="m1970.8 245.48v-91.12l-97.25-146.88h56.78l66.64 103.36 66.98-103.36h53.72l-97.58 147.22v90.78h-49.29z"
                            fill="none" stroke="url(#b)"/>
                    </svg>
                </div>

                <h3 className={styles.currentChance}>{this.state.currentChance}%</h3>

                <img id='face' className={styles.face} src="/img/face.jpg" alt=""/>
            </section>
        );
    }
}

export default Section2;