import React from "react";
import styles from '../styles/Header.module.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMobileMenu: false,
            dropdownActive: false,
            currentChain: 'Ethereum',
            fadeOutMenu: false
        }

        this.handleOnClickSelectChain = this.handleOnClickSelectChain.bind(this);
        this.handleOnClickSelectEth = this.handleOnClickSelectEth.bind(this)
        this.handleOnClickSelectBnB = this.handleOnClickSelectBnB.bind(this)
        this.handleOnClickSelectAva = this.handleOnClickSelectAva.bind(this)
    }

    handleOnClickSelectChain() {     
        if (this.state.dropdownActive) {
            this.setState({fadeOutMenu: true})
            this.setState({dropdownActive: !this.state.dropdownActive})
            setTimeout(
                function() {
                    this.setState({fadeOutMenu: false})
                }
            .bind(this),
            800)
        } else {
            this.setState({dropdownActive: !this.state.dropdownActive})
        }
    }

    handleOnClickSelectEth() {
        if (this.state.dropdownActive) {
            this.setState({fadeOutMenu: true})
            this.setState({dropdownActive: !this.state.dropdownActive, currentChain: 'Ethereum'})
            setTimeout(
                function() {
                    this.setState({fadeOutMenu: false})
                }
            .bind(this),
            800)
        }
    }

    handleOnClickSelectBnB() {
        if (this.state.dropdownActive) {
            this.setState({fadeOutMenu: true})
            this.setState({dropdownActive: !this.state.dropdownActive, currentChain: 'BNB Chain'})
            setTimeout(
                function() {
                    this.setState({fadeOutMenu: false})
                }
            .bind(this),
            800)
        }
    }

    handleOnClickSelectAva() {
        if (this.state.dropdownActive) {
            this.setState({fadeOutMenu: true})
            this.setState({dropdownActive: !this.state.dropdownActive, currentChain: 'Avalanche'})
            setTimeout(
                function() {
                    this.setState({fadeOutMenu: false})
                }
            .bind(this),
            800)
        }
    }

    render() {
        return (
            <header className={styles.header}>
                <a href="/" className={!this.state.showMobileMenu ? styles.logo : `${styles.logo} ${styles.hide}`}>
                    <img src="/img/logo.png" alt=""/>
                </a>

                <ul className={styles.menu}>
                    <li>
                        <a href="/">Get Started</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li className={styles.buttonContainer}>
                        <div className={styles.selectChainArea}>
                            <button className={!this.state.dropdownActive ? `${styles.dropdownButton} ${styles.dropdownButtonIcon}` : `${styles.dropdownButton} ${styles.dropdownActive}`} onClick={this.handleOnClickSelectChain}>
                                {
                                    !this.state.dropdownActive && this.state.currentChain === 'Ethereum' &&
                                        <svg className={styles.ethereum} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.66 434.67">
                                            <path style={{fill:"#9c57ff"}}
                                                d="M135.78,0l-3,9.91V297.34l3,2.91,135.8-78.86Z"/>
                                            <path style={{fill:"#3d6cff"}} d="M135.8,0,0,221.39l135.8,78.86V0Z"/>
                                            <path style={{fill:"#9c57ff"}}
                                                d="M135.78,325.47l-1.67,2V429.87l1.67,4.8,135.88-188Z"/>
                                            <path style={{fill:"#3d6cff"}} d="M135.8,434.67V325.47L0,246.65Z"/>
                                            <path style={{fill:"#ff76ff"}} d="M135.78,300.41l135.8-78.87-135.8-60.65Z"/>
                                            <path style={{fill:"#9c57ff"}} d="M0,221.54l135.8,78.87V160.89Z"/>
                                        </svg>
                                }
                                {
                                    !this.state.dropdownActive && this.state.currentChain === 'BNB Chain' &&
                                    <svg className={styles.bnbChain} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 390.43 455.5">
                                        <defs>
                                            <linearGradient id="bnb_gradient" y1="227.75" x2="390.43"
                                                            y2="227.75" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#6270ff"/>
                                                <stop offset="1" stopColor="#ff64ff"/>
                                            </linearGradient>
                                        </defs>
                                        <path style={{fill:"url(#bnb_gradient)"}}
                                            d="M75.36,69.77,195.22,0,315.07,69.77,271,95.54l-75.79-44-75.8,44Zm239.71,88L271,132l-75.79,44-75.8-44L75.36,157.76v51.55l75.79,44v88l44.07,25.77,44.06-25.77v-88l75.79-44Zm0,139.53V245.74L271,271.52v51.55Zm31.29,18.22-75.79,44v51.55l119.86-69.77V201.75l-44.07,25.77ZM302.29,113.76l44.07,25.78v51.55l44.07-25.78V113.76L346.36,88ZM151.15,378.17v51.55l44.07,25.78,44.06-25.78V378.17L195.22,404ZM75.36,297.29l44.06,25.78V271.52L75.36,245.74Zm75.79-183.53,44.07,25.78,44.06-25.78L195.22,88ZM44.07,139.54l44.06-25.78L44.07,88,0,113.76v51.55l44.07,25.78Zm0,88L0,201.75V341.29l119.86,69.77V359.51l-75.79-44Z"/>
                                    </svg>
                                }
                                {
                                    !this.state.dropdownActive && this.state.currentChain === 'Avalanche' &&
                                    <svg className={styles.avalanche} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 433.81 379.58">
                                        <defs>
                                            <linearGradient id="avalanche_gradient" y1="189.79" x2="433.81"
                                                            y2="189.79" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#6270ff"/>
                                                <stop offset="1" stopColor="#ff64ff"/>
                                            </linearGradient>
                                        </defs>
                                        <path style={{fillRule: "evenodd", fill: "url(#avalanche_gradient)"}}
                                            d="M118.82,379.58H42.51c-18.09,0-27.13,0-32.55-3.57A22.33,22.33,0,0,1,0,358.59C-.34,352,4.14,344,13.1,328h0L180.16,29.82c9.09-16.23,13.64-24.35,19.42-27.37a21.51,21.51,0,0,1,19.92,0c5.79,3,10.34,11.12,19.46,27.34l38.53,68.54h0c6.63,11.8,9.94,17.69,11.4,23.91a45.22,45.22,0,0,1,0,20.6c-1.45,6.23-4.76,12.13-11.38,23.93l-99.9,178.07c-6.72,12-10.07,18-14.68,22.43a43.48,43.48,0,0,1-17.71,10.47C139.13,379.58,132.36,379.58,118.82,379.58Zm272.22,0H302.57c-18.25,0-27.38,0-32.81-3.6a22.31,22.31,0,0,1-9.91-17.54c-.32-6.59,4.28-14.62,13.46-30.68l44.16-77.19c9.07-15.86,13.61-23.79,19.35-26.76a21.51,21.51,0,0,1,19.76,0c5.75,3,10.29,10.88,19.38,26.72h0l44.3,77.2c9.22,16.07,13.84,24.1,13.52,30.7a22.33,22.33,0,0,1-9.9,17.56C418.46,379.58,409.32,379.58,391,379.58Z"/>
                                    </svg>
                                }

                                {   
                                    this.state.dropdownActive ?
                                        <>Select Chain</>
                                    :
                                        this.state.currentChain

                                }
                                {
                                    this.state.dropdownActive ?
                                        <i className={styles.carrotDown}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="9.1px" viewBox="0 0 16 9.1">
                                                <path 
                                                    d="M7.2,8.8L0.3,2c-0.4-0.4-0.4-1.1,0-1.6c0.4-0.4,1.1-0.4,1.6,0L8,6.4l6.1-6.1c0.4-0.4,1.1-0.4,1.6,0c0.4,0.4,0.4,1.1,0,1.6L8.8,8.8C8.6,9,8.3,9.1,8,9.1C7.7,9.1,7.5,9,7.2,8.8"/>
                                            </svg>
                                        </i> :
                                        <i className={styles.carrotUp}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="9.1px" viewBox="0 0 16 9.1">
                                                <path 
                                                    d="M 7.2 8.8 L 0.3 2 C -0.1 1.6 -0.1 0.9 0.3 0.4 C 0.7 0 1.4 0 1.9 0.4 L 8 6.4 L 14.1 0.3 C 14.5 -0.1 15.2 -0.1 15.7 0.3 C 16.1 0.7 16.1 1.4 15.7 1.9 L 8.8 8.8 C 8.6 9 8.3 9.1 8 9.1 C 7.7 9.1 7.5 9 7.2 8.8" transform="matrix(-1, 0, 0, -1, 16, 9.1)"
                                                />
                                            </svg>
                                        </i>
                                }
                            </button>

                            <ul className={!this.state.dropdownActive ? this.state.fadeOutMenu ? `${styles.dropdownMenu} ${styles.fadeOutMenu} ${styles.show}` : styles.dropdownMenu : this.state.fadeOutMenu ? `${styles.dropdownMenu} ${styles.show} ${styles.fadeOutMenu}` : `${styles.dropdownMenu} ${styles.show}`}>
                                <li onClick={this.handleOnClickSelectEth}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.66 434.67">
                                        <path style={{fill:"#9c57ff"}}
                                              d="M135.78,0l-3,9.91V297.34l3,2.91,135.8-78.86Z"/>
                                        <path style={{fill:"#3d6cff"}} d="M135.8,0,0,221.39l135.8,78.86V0Z"/>
                                        <path style={{fill:"#9c57ff"}}
                                              d="M135.78,325.47l-1.67,2V429.87l1.67,4.8,135.88-188Z"/>
                                        <path style={{fill:"#3d6cff"}} d="M135.8,434.67V325.47L0,246.65Z"/>
                                        <path style={{fill:"#ff76ff"}} d="M135.78,300.41l135.8-78.87-135.8-60.65Z"/>
                                        <path style={{fill:"#9c57ff"}} d="M0,221.54l135.8,78.87V160.89Z"/>
                                    </svg>
                                    <p>Ethereum</p>
                                </li>
                                <li onClick={this.handleOnClickSelectBnB}>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 390.43 455.5">
                                        <defs>
                                            <linearGradient id="bnb_gradient" y1="227.75" x2="390.43"
                                                            y2="227.75" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#6270ff"/>
                                                <stop offset="1" stopColor="#ff64ff"/>
                                            </linearGradient>
                                        </defs>
                                        <path style={{fill:"url(#bnb_gradient)"}}
                                              d="M75.36,69.77,195.22,0,315.07,69.77,271,95.54l-75.79-44-75.8,44Zm239.71,88L271,132l-75.79,44-75.8-44L75.36,157.76v51.55l75.79,44v88l44.07,25.77,44.06-25.77v-88l75.79-44Zm0,139.53V245.74L271,271.52v51.55Zm31.29,18.22-75.79,44v51.55l119.86-69.77V201.75l-44.07,25.77ZM302.29,113.76l44.07,25.78v51.55l44.07-25.78V113.76L346.36,88ZM151.15,378.17v51.55l44.07,25.78,44.06-25.78V378.17L195.22,404ZM75.36,297.29l44.06,25.78V271.52L75.36,245.74Zm75.79-183.53,44.07,25.78,44.06-25.78L195.22,88ZM44.07,139.54l44.06-25.78L44.07,88,0,113.76v51.55l44.07,25.78Zm0,88L0,201.75V341.29l119.86,69.77V359.51l-75.79-44Z"/>
                                    </svg>
                                    <p>BNB Chain</p>
                                </li>
                                <li onClick={this.handleOnClickSelectAva}>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 433.81 379.58">
                                        <defs>
                                            <linearGradient id="avalanche_gradient" y1="189.79" x2="433.81"
                                                            y2="189.79" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#6270ff"/>
                                                <stop offset="1" stopColor="#ff64ff"/>
                                            </linearGradient>
                                        </defs>
                                        <path style={{fillRule: "evenodd", fill: "url(#avalanche_gradient)"}}
                                              d="M118.82,379.58H42.51c-18.09,0-27.13,0-32.55-3.57A22.33,22.33,0,0,1,0,358.59C-.34,352,4.14,344,13.1,328h0L180.16,29.82c9.09-16.23,13.64-24.35,19.42-27.37a21.51,21.51,0,0,1,19.92,0c5.79,3,10.34,11.12,19.46,27.34l38.53,68.54h0c6.63,11.8,9.94,17.69,11.4,23.91a45.22,45.22,0,0,1,0,20.6c-1.45,6.23-4.76,12.13-11.38,23.93l-99.9,178.07c-6.72,12-10.07,18-14.68,22.43a43.48,43.48,0,0,1-17.71,10.47C139.13,379.58,132.36,379.58,118.82,379.58Zm272.22,0H302.57c-18.25,0-27.38,0-32.81-3.6a22.31,22.31,0,0,1-9.91-17.54c-.32-6.59,4.28-14.62,13.46-30.68l44.16-77.19c9.07-15.86,13.61-23.79,19.35-26.76a21.51,21.51,0,0,1,19.76,0c5.75,3,10.29,10.88,19.38,26.72h0l44.3,77.2c9.22,16.07,13.84,24.1,13.52,30.7a22.33,22.33,0,0,1-9.9,17.56C418.46,379.58,409.32,379.58,391,379.58Z"/>
                                    </svg>
                                    <p>Avalanche</p>
                                </li>
                            </ul>
                        </div>
                        <button className={`${styles.btnConnectWallet} ${styles.large}`} disabled={this.props.wallet.connecting} onClick={() => this.props.wallet.wallet ? this.props.wallet.disconnect() : this.props.wallet.connect()}>{this.props.wallet.wallet ? 'Disconnect' : 'Connect'} Wallet</button>
                    </li>
                </ul>

                <svg onClick={() => this.setState({showMobileMenu: !this.state.showMobileMenu})} className={!this.state.showMobileMenu ? styles.bars : `${styles.bars} ${styles.hide}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> 
                    <defs>
                        <linearGradient id="mobile-menu-gradient" gradientTransform="rotate(0)">
                            <stop offset="0%" stopColor="#626fff" />
                            <stop offset="100%" stopColor="#ff64ff" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                    />
                </svg>

                <ul className={this.state.showMobileMenu ? styles.mobileMenu : `${styles.mobileMenu} ${styles.hide}`}>
                    <li className={styles.logo}>
                        <a href="/" className={styles.logo}>
                            <img src="/img/logo.png" alt=""/>
                        </a>
                    </li>
                    <li onClick={() => this.setState({showMobileMenu: !this.state.showMobileMenu})} className={styles.xcross}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <defs>
                                <linearGradient id="mobile-menu-gradient" gradientTransform="rotate(0)">
                                    <stop offset="0%" stopColor="#626fff" />
                                    <stop offset="100%" stopColor="#ff64ff" />
                                </linearGradient>
                            </defs>
                            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                        </svg>
                    </li>
                    <li>
                        <a href="/">Get Started</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li className={styles.buttonContainer}>
                        <div className={styles.selectChainArea}>
                            <button className={!this.state.dropdownActive ? `${styles.dropdownButton} ${styles.dropdownButtonIcon}` : `${styles.dropdownButton} ${styles.dropdownActive}`} onClick={this.handleOnClickSelectChain}>
                                {
                                    !this.state.dropdownActive && this.state.currentChain === 'Ethereum' &&
                                    <svg className={styles.ethereum} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.66 434.67">
                                        <path style={{fill:"#9c57ff"}}
                                            d="M135.78,0l-3,9.91V297.34l3,2.91,135.8-78.86Z"/>
                                        <path style={{fill:"#3d6cff"}} d="M135.8,0,0,221.39l135.8,78.86V0Z"/>
                                        <path style={{fill:"#9c57ff"}}
                                            d="M135.78,325.47l-1.67,2V429.87l1.67,4.8,135.88-188Z"/>
                                        <path style={{fill:"#3d6cff"}} d="M135.8,434.67V325.47L0,246.65Z"/>
                                        <path style={{fill:"#ff76ff"}} d="M135.78,300.41l135.8-78.87-135.8-60.65Z"/>
                                        <path style={{fill:"#9c57ff"}} d="M0,221.54l135.8,78.87V160.89Z"/>
                                    </svg>
                                }
                                {
                                    !this.state.dropdownActive && this.state.currentChain === 'BNB Chain' &&
                                    <svg className={styles.bnbChain} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 390.43 455.5">
                                        <path style={{fill:"#9c57ff"}}
                                            d="M75.36,69.77,195.22,0,315.07,69.77,271,95.54l-75.79-44-75.8,44Zm239.71,88L271,132l-75.79,44-75.8-44L75.36,157.76v51.55l75.79,44v88l44.07,25.77,44.06-25.77v-88l75.79-44Zm0,139.53V245.74L271,271.52v51.55Zm31.29,18.22-75.79,44v51.55l119.86-69.77V201.75l-44.07,25.77ZM302.29,113.76l44.07,25.78v51.55l44.07-25.78V113.76L346.36,88ZM151.15,378.17v51.55l44.07,25.78,44.06-25.78V378.17L195.22,404ZM75.36,297.29l44.06,25.78V271.52L75.36,245.74Zm75.79-183.53,44.07,25.78,44.06-25.78L195.22,88ZM44.07,139.54l44.06-25.78L44.07,88,0,113.76v51.55l44.07,25.78Zm0,88L0,201.75V341.29l119.86,69.77V359.51l-75.79-44Z"/>
                                    </svg>
                                }
                                {
                                    !this.state.dropdownActive && this.state.currentChain === 'Avalanche' &&
                                    <svg className={styles.avalanche} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 433.81 379.58">
                                        <path style={{fill:"#9c57ff"}}
                                            d="M118.82,379.58H42.51c-18.09,0-27.13,0-32.55-3.57A22.33,22.33,0,0,1,0,358.59C-.34,352,4.14,344,13.1,328h0L180.16,29.82c9.09-16.23,13.64-24.35,19.42-27.37a21.51,21.51,0,0,1,19.92,0c5.79,3,10.34,11.12,19.46,27.34l38.53,68.54h0c6.63,11.8,9.94,17.69,11.4,23.91a45.22,45.22,0,0,1,0,20.6c-1.45,6.23-4.76,12.13-11.38,23.93l-99.9,178.07c-6.72,12-10.07,18-14.68,22.43a43.48,43.48,0,0,1-17.71,10.47C139.13,379.58,132.36,379.58,118.82,379.58Zm272.22,0H302.57c-18.25,0-27.38,0-32.81-3.6a22.31,22.31,0,0,1-9.91-17.54c-.32-6.59,4.28-14.62,13.46-30.68l44.16-77.19c9.07-15.86,13.61-23.79,19.35-26.76a21.51,21.51,0,0,1,19.76,0c5.75,3,10.29,10.88,19.38,26.72h0l44.3,77.2c9.22,16.07,13.84,24.1,13.52,30.7a22.33,22.33,0,0,1-9.9,17.56C418.46,379.58,409.32,379.58,391,379.58Z"/>
                                    </svg>
                                }

                                {   
                                    this.state.dropdownActive ?
                                        <>Select Chain</>
                                    :
                                        this.state.currentChain

                                }
                                {
                                    this.state.dropdownActive ?
                                        <i className={styles.carrotDown}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="9.1px" viewBox="0 0 16 9.1">
                                                <path 
                                                    d="M7.2,8.8L0.3,2c-0.4-0.4-0.4-1.1,0-1.6c0.4-0.4,1.1-0.4,1.6,0L8,6.4l6.1-6.1c0.4-0.4,1.1-0.4,1.6,0c0.4,0.4,0.4,1.1,0,1.6L8.8,8.8C8.6,9,8.3,9.1,8,9.1C7.7,9.1,7.5,9,7.2,8.8"/>
                                            </svg>
                                        </i> :
                                        <i className={styles.carrotUp}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="9.1px" viewBox="0 0 16 9.1">
                                                <path 
                                                    d="M 7.2 8.8 L 0.3 2 C -0.1 1.6 -0.1 0.9 0.3 0.4 C 0.7 0 1.4 0 1.9 0.4 L 8 6.4 L 14.1 0.3 C 14.5 -0.1 15.2 -0.1 15.7 0.3 C 16.1 0.7 16.1 1.4 15.7 1.9 L 8.8 8.8 C 8.6 9 8.3 9.1 8 9.1 C 7.7 9.1 7.5 9 7.2 8.8" transform="matrix(-1, 0, 0, -1, 16, 9.1)"
                                                />
                                            </svg>
                                        </i>
                                }
                            </button>

                            <ul className={!this.state.dropdownActive ? this.state.fadeOutMenu ? `${styles.dropdownMenu} ${styles.fadeOutMenu} ${styles.show}` : styles.dropdownMenu : this.state.fadeOutMenu ? `${styles.dropdownMenu} ${styles.show} ${styles.fadeOutMenu}` : `${styles.dropdownMenu} ${styles.show}`}>
                                <li onClick={this.handleOnClickSelectEth}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.66 434.67">
                                        <path style={{fill:"#9c57ff"}}
                                              d="M135.78,0l-3,9.91V297.34l3,2.91,135.8-78.86Z"/>
                                        <path style={{fill:"#9c57ff"}} d="M135.8,0,0,221.39l135.8,78.86V0Z"/>
                                        <path style={{fill:"#9c57ff"}}
                                              d="M135.78,325.47l-1.67,2V429.87l1.67,4.8,135.88-188Z"/>
                                        <path style={{fill:"#9c57ff"}} d="M135.8,434.67V325.47L0,246.65Z"/>
                                        <path style={{fill:"#9c57ff"}} d="M135.78,300.41l135.8-78.87-135.8-60.65Z"/>
                                        <path style={{fill:"#9c57ff"}} d="M0,221.54l135.8,78.87V160.89Z"/>
                                    </svg>
                                    <p>Ethereum</p>
                                </li>
                                <li onClick={this.handleOnClickSelectBnB}>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 390.43 455.5">
                                        <path style={{fill:"#9c57ff"}}
                                              d="M75.36,69.77,195.22,0,315.07,69.77,271,95.54l-75.79-44-75.8,44Zm239.71,88L271,132l-75.79,44-75.8-44L75.36,157.76v51.55l75.79,44v88l44.07,25.77,44.06-25.77v-88l75.79-44Zm0,139.53V245.74L271,271.52v51.55Zm31.29,18.22-75.79,44v51.55l119.86-69.77V201.75l-44.07,25.77ZM302.29,113.76l44.07,25.78v51.55l44.07-25.78V113.76L346.36,88ZM151.15,378.17v51.55l44.07,25.78,44.06-25.78V378.17L195.22,404ZM75.36,297.29l44.06,25.78V271.52L75.36,245.74Zm75.79-183.53,44.07,25.78,44.06-25.78L195.22,88ZM44.07,139.54l44.06-25.78L44.07,88,0,113.76v51.55l44.07,25.78Zm0,88L0,201.75V341.29l119.86,69.77V359.51l-75.79-44Z"/>
                                    </svg>
                                    <p>BNB Chain</p>
                                </li>
                                <li onClick={this.handleOnClickSelectAva}>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 433.81 379.58">
                                        <path style={{fill:"#9c57ff"}}
                                              d="M118.82,379.58H42.51c-18.09,0-27.13,0-32.55-3.57A22.33,22.33,0,0,1,0,358.59C-.34,352,4.14,344,13.1,328h0L180.16,29.82c9.09-16.23,13.64-24.35,19.42-27.37a21.51,21.51,0,0,1,19.92,0c5.79,3,10.34,11.12,19.46,27.34l38.53,68.54h0c6.63,11.8,9.94,17.69,11.4,23.91a45.22,45.22,0,0,1,0,20.6c-1.45,6.23-4.76,12.13-11.38,23.93l-99.9,178.07c-6.72,12-10.07,18-14.68,22.43a43.48,43.48,0,0,1-17.71,10.47C139.13,379.58,132.36,379.58,118.82,379.58Zm272.22,0H302.57c-18.25,0-27.38,0-32.81-3.6a22.31,22.31,0,0,1-9.91-17.54c-.32-6.59,4.28-14.62,13.46-30.68l44.16-77.19c9.07-15.86,13.61-23.79,19.35-26.76a21.51,21.51,0,0,1,19.76,0c5.75,3,10.29,10.88,19.38,26.72h0l44.3,77.2c9.22,16.07,13.84,24.1,13.52,30.7a22.33,22.33,0,0,1-9.9,17.56C418.46,379.58,409.32,379.58,391,379.58Z"/>
                                    </svg>
                                    <p>Avalanche</p>
                                </li>
                            </ul>
                        </div>
                        <button className={`${styles.btnConnectWallet} ${styles.large}`} disabled={this.props.wallet.connecting} onClick={() => this.props.wallet.wallet ? this.props.wallet.disconnect() : this.props.wallet.connect()}>{this.props.wallet.wallet ? 'Disconnect' : 'Connect'} Wallet</button>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;