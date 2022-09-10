import React from "react";
import styles from '../styles/Footer.module.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.container}>
                <div className={styles.footerWrapper}>
                    <div className={styles.footerMain}>
                        <div className={styles.logoSec}>
                            <a className={styles.logo} href="/">
                                <img src="/img/logo.png" alt=""/>
                            </a>
                            <p>A Binance Foundation</p>
                            <div className={styles.smLogos}>
                                <a href="#" target="_blank">
                                    <svg viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.0926 14.4288L35.1998 12.5201V12.1021H27.902L22.7011 24.3644L16.7851 12.1021H9.13324V12.5201L11.5945 15.3264C11.8351 15.5338 11.9589 15.8385 11.9279 16.1431V27.1708C12.0036 27.5694 11.8695 27.9745 11.5739 28.2629L8.7998 31.4484V31.8599H16.6579V31.4419L13.8873 28.2661C13.7389 28.124 13.6272 27.9516 13.561 27.7621C13.4948 27.5727 13.4759 27.3715 13.5057 27.174V17.6337L20.4048 31.8664H21.2057L27.1389 17.6337V28.9726C27.1389 29.2707 27.1389 29.3323 26.9326 29.5299L24.7979 31.484V31.9021H35.1517V31.484L33.0926 29.5753C32.9139 29.4457 32.8211 29.2286 32.8589 29.0179V14.9862C32.8411 14.882 32.8534 14.7753 32.8945 14.6772C32.9357 14.5791 33.0041 14.4933 33.0926 14.4288Z"
                                        fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="#" target="_blank">
                                    <svg viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M26.2078 26.5154C25.1506 26.5154 24.2631 25.6652 24.2631 24.6177C24.2631 23.5701 25.1506 22.6931 26.2078 22.6931C27.265 22.6931 28.123 23.5713 28.123 24.6188C28.123 25.6652 27.265 26.5154 26.2078 26.5154ZM26.6568 30.1975C25.6727 31.1727 24.1535 31.6456 22.0144 31.6456H21.9838C19.8447 31.6456 18.3279 31.1727 17.3437 30.1975C17.272 30.1264 17.2151 30.0421 17.1763 29.9492C17.1375 29.8563 17.1175 29.7568 17.1175 29.6562C17.1175 29.5557 17.1375 29.4562 17.1763 29.3633C17.2151 29.2704 17.272 29.186 17.3437 29.115C17.4155 29.0439 17.5006 28.9875 17.5944 28.949C17.6881 28.9105 17.7886 28.8907 17.89 28.8907C17.9915 28.8907 18.0919 28.9105 18.1856 28.949C18.2794 28.9875 18.3645 29.0439 18.4363 29.115C19.1151 29.7876 20.2749 30.1146 21.9838 30.1146L21.9991 30.1158H22.0144C23.7234 30.1158 24.8842 29.7876 25.5643 29.115C25.636 29.0439 25.7212 28.9875 25.8149 28.949C25.9086 28.9105 26.0091 28.8907 26.1105 28.8907C26.212 28.8907 26.3125 28.9105 26.4062 28.949C26.4999 28.9875 26.5851 29.0439 26.6568 29.115C26.7286 29.186 26.7855 29.2704 26.8243 29.3633C26.8631 29.4562 26.8831 29.5557 26.8831 29.6562C26.8831 29.7568 26.8631 29.8563 26.8243 29.9492C26.7855 30.0421 26.7286 30.1264 26.6568 30.1975ZM15.8776 24.6177C15.8776 23.5713 16.7651 22.6931 17.8211 22.6931C18.8782 22.6931 19.7351 23.5713 19.7351 24.6188C19.7351 25.6652 18.8782 26.5154 17.8211 26.5154C16.7651 26.5154 15.8776 25.6652 15.8776 24.6177ZM31.4265 12.533C32.1419 12.533 32.7253 13.1099 32.7253 13.8188C32.7253 14.5276 32.1419 15.1057 31.4265 15.1057C31.0821 15.1054 30.752 14.9697 30.5085 14.7284C30.265 14.4871 30.128 14.16 30.1277 13.8188C30.1277 13.1099 30.7099 12.533 31.4265 12.533ZM36.1431 22.5342C36.1422 21.6413 35.7838 20.7852 35.1466 20.1537C34.5093 19.5223 33.6453 19.1672 32.7441 19.1662C31.9321 19.1662 31.1872 19.45 30.6015 19.9218C28.5296 18.6314 25.899 17.8536 23.0787 17.6889L24.5495 13.0807L28.592 14.0243C28.6449 14.7337 28.9664 15.397 29.492 15.8815C30.0177 16.366 30.7086 16.6357 31.4265 16.6367C32.1803 16.6358 32.903 16.3386 33.436 15.8103C33.9689 15.282 34.2686 14.5657 34.2692 13.8188C34.2683 13.072 33.9685 12.3561 33.4356 11.828C32.9027 11.2999 32.1801 11.0029 31.4265 11.002C30.3304 11.002 29.377 11.6209 28.9032 12.5236L24.2054 11.4282C24.016 11.3842 23.8168 11.4127 23.6476 11.5079C23.4785 11.6032 23.3519 11.7583 23.2932 11.9421L21.4664 17.6609C18.428 17.7345 15.5724 18.5158 13.3472 19.8821C12.7509 19.418 12.0146 19.1659 11.2564 19.1662C10.3552 19.1672 9.49123 19.5223 8.854 20.1537C8.21677 20.7852 7.85836 21.6413 7.85742 22.5342C7.85755 23.0798 7.99162 23.6172 8.24807 24.1C8.50452 24.5828 8.87565 24.9965 9.32946 25.3055C9.29192 25.5737 9.27302 25.8441 9.27289 26.1148C9.27289 28.4364 10.6341 30.5958 13.108 32.1957C15.4781 33.729 18.6166 34.5734 21.9425 34.5734C25.2685 34.5734 28.407 33.729 30.7783 32.1957C33.2509 30.5958 34.6133 28.4353 34.6133 26.1148C34.6133 25.8661 34.5957 25.6196 34.5662 25.3756C35.0491 25.0717 35.4468 24.652 35.7225 24.1553C35.9981 23.6587 36.1428 23.1011 36.1431 22.5342Z"
                                        fill="currentColor"/>
                                    </svg>                  
                                </a>
                                <a href="#" target="_blank">
                                    <svg id="twitter" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35.2004 14.454C34.27 14.8407 33.2575 15.1189 32.2146 15.2273C33.2974 14.6076 34.1082 13.6287 34.495 12.474C33.479 13.0563 32.3659 13.4646 31.2052 13.6808C30.72 13.1812 30.1333 12.7832 29.4815 12.5116C28.8297 12.2399 28.1269 12.1006 27.4167 12.1021C24.5434 12.1021 22.2327 14.3457 22.2327 17.0989C22.2327 17.4856 22.2813 17.8722 22.3604 18.2442C18.0581 18.0274 14.2209 16.0474 11.67 13.0159C11.2051 13.7807 10.9616 14.6515 10.9646 15.5378C10.9646 17.2717 11.8798 18.8007 13.2753 19.6999C12.4529 19.6687 11.6497 19.4509 10.9311 19.0643V19.1258C10.9311 21.5539 12.7129 23.5661 15.0875 24.0289C14.6416 24.1405 14.183 24.1976 13.7223 24.1988C13.3848 24.1988 13.0656 24.1666 12.7433 24.1227C13.4 26.1026 15.3125 27.5408 17.5898 27.5876C15.8081 28.9321 13.5764 29.7229 11.1531 29.7229C10.7183 29.7229 10.3169 29.7082 9.90039 29.6614C12.199 31.0819 14.9263 31.9021 17.8635 31.9021C27.3985 31.9021 32.616 24.2925 32.616 17.6877C32.616 17.4709 32.616 17.2542 32.6008 17.0374C33.6102 16.3257 34.495 15.444 35.2004 14.454Z"
                                        fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="#" target="_blank">
                                    <svg viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M30.222 10.002C31.628 10.002 32.762 11.139 32.829 12.477V34.002L30.152 31.729L28.682 30.391L27.078 28.993L27.748 31.198H13.71C12.308 31.198 11.17 30.133 11.17 28.722V12.482C11.17 11.144 12.31 10.005 13.715 10.005H30.215L30.222 10.002ZM24.104 15.685H24.074L23.872 15.885C25.945 16.485 26.948 17.422 26.948 17.422C25.612 16.754 24.408 16.42 23.204 16.285C22.334 16.15 21.464 16.221 20.729 16.285H20.529C20.059 16.285 19.059 16.485 17.719 17.02C17.252 17.223 16.984 17.356 16.984 17.356C16.984 17.356 17.986 16.354 20.194 15.819L20.059 15.684C20.059 15.684 18.387 15.62 16.582 16.954C16.582 16.954 14.777 20.098 14.777 23.974C14.777 23.974 15.777 25.714 18.52 25.78C18.52 25.78 18.92 25.247 19.325 24.778C17.785 24.31 17.185 23.374 17.185 23.374C17.185 23.374 17.319 23.44 17.52 23.574H17.58C17.61 23.574 17.624 23.589 17.64 23.604V23.61C17.656 23.626 17.67 23.64 17.7 23.64C18.03 23.776 18.36 23.91 18.63 24.04C19.096 24.242 19.695 24.443 20.43 24.576C21.36 24.711 22.426 24.776 23.64 24.576C24.24 24.441 24.84 24.309 25.44 24.041C25.83 23.841 26.31 23.641 26.837 23.304C26.837 23.304 26.237 24.24 24.632 24.708C24.962 25.174 25.427 25.708 25.427 25.708C28.171 25.648 29.237 23.908 29.297 23.982C29.297 20.112 27.482 16.962 27.482 16.962C25.847 15.748 24.317 15.702 24.047 15.702L24.103 15.682L24.104 15.685ZM24.272 20.098C24.975 20.098 25.542 20.698 25.542 21.433C25.542 22.173 24.972 22.773 24.272 22.773C23.572 22.773 23.002 22.173 23.002 21.439C23.004 20.699 23.575 20.101 24.272 20.101V20.098ZM19.729 20.098C20.429 20.098 20.995 20.698 20.995 21.433C20.995 22.173 20.425 22.773 19.725 22.773C19.025 22.773 18.455 22.173 18.455 21.439C18.455 20.699 19.025 20.101 19.725 20.101L19.729 20.098Z"
                                            fill="currentColor"/>
                                        </g>
                                    </svg>
                                </a>
                                <a href="#" target="_blank">
                                    <svg viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M34.6488 15.9512C34.4985 15.4188 34.2039 14.9333 33.7944 14.5433C33.3848 14.1533 32.8748 13.8724 32.3153 13.7288C30.2557 13.2019 21.9998 13.2019 21.9998 13.2019C21.9998 13.2019 13.7439 13.2019 11.6844 13.726C11.1246 13.8691 10.6143 14.1499 10.2047 14.54C9.79507 14.9301 9.50058 15.4158 9.35079 15.9484C8.7998 17.9102 8.7998 22.0019 8.7998 22.0019C8.7998 22.0019 8.7998 26.0936 9.35079 28.0526C9.65427 29.1344 10.55 29.9864 11.6844 30.275C13.7439 30.8019 21.9998 30.8019 21.9998 30.8019C21.9998 30.8019 30.2557 30.8019 32.3153 30.275C33.4526 29.9864 34.3453 29.1344 34.6488 28.0526C35.1998 26.0936 35.1998 22.0019 35.1998 22.0019C35.1998 22.0019 35.1998 17.9102 34.6488 15.9512ZM19.3775 25.7573V18.2465L26.2132 21.9739L19.3775 25.7573Z"
                                        fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="#" target="_blank">
                                    <svg id="telegram" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.4669 12.225L11.0304 19.8414C9.56742 20.3828 9.57589 21.1347 10.762 21.47L16.2656 23.0519L28.9994 15.6494C29.6015 15.3119 30.1516 15.4935 29.6994 15.8633L19.3825 24.4422H19.3801L19.3825 24.4433L19.0029 29.6702C19.5591 29.6702 19.8045 29.4351 20.1164 29.1577L22.7896 26.7626L28.3501 30.5469C29.3754 31.0671 30.1117 30.7998 30.3668 29.6724L34.0169 13.8225C34.3905 12.4422 33.4451 11.8173 32.4669 12.225Z"
                                            fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="#" target="_blank">
                                    <svg id="github" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.9292 29.0722V31.9021H26.199V28.2314C26.1994 27.7403 26.1038 27.254 25.9179 26.801C25.732 26.348 25.4595 25.9373 25.1162 25.593C29.1234 24.8739 30.8002 22.3834 30.8002 19.4202C30.8002 17.9821 30.3313 16.6513 29.4105 15.5843C29.9561 13.8534 29.3366 12.3863 29.2542 12.163C27.7195 12.0209 26.128 13.1865 25.8068 13.4358C24.8605 13.1749 23.7862 13.0328 22.5812 13.0328C21.3819 13.0328 20.3104 13.1691 19.3726 13.4272C19.239 13.3199 17.5225 11.963 15.8713 12.1137C15.786 12.337 15.1522 13.8389 15.732 15.593C14.8226 16.6571 14.3593 17.9763 14.3593 19.4115C14.3593 22.3689 16.0247 24.8565 20.0206 25.5872C19.5431 26.0598 19.1964 26.6687 19.0344 27.35C18.2926 27.5385 16.829 27.7298 16.0787 26.5962C15.0414 25.0334 14.1462 24.4564 13.268 24.9174C12.8986 25.3523 14.1348 25.5843 14.6577 26.4947C14.9164 26.9296 15.0727 29.5332 18.9292 29.0722Z"
                                            fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className={styles.partnersSec}>
                            <div className={styles.footerHeading}>
                                Partners
                            </div>
                            <div className={styles.footerInfo}>
                                <div className={styles.footerInfoItem}>
                                    <a href="https://metamask.io/" target="_blank">Metamask</a>
                                </div>
                                <div className={styles.footerInfoItem}>
                                    <a href="https://www.binance.com/" target="_blank">Binance</a>
                                </div>
                                <div className={styles.footerInfoItem}>
                                    <a href="https://www.yuga.com/" target="_blank">Yuga Labs</a>
                                </div>
                                <div className={styles.footerInfoItem}>
                                    <a href="https://ethereum.foundation/" target="_blank">Ethereum Foundation</a>
                                </div>
                                <div className={styles.footerInfoItem}>
                                    <a href="https://www.avalabs.org/" target="_blank">Ava Labs</a>
                                </div>
                                <div className={styles.footerInfoItem}>
                                    <a href="https://opensea.io/" target="_blank">OpenSea</a>
                                </div>
                            </div>
                        </div>                    
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.footerCr}>
                        <div className={styles.cpText}>
                            © 2022 CoinMarketCap, All Rights Reserved.
                        </div>
                        <div className={styles.additionalText}>
                        ENS: cmc.eth
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;