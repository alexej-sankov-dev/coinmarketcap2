import React from 'react';
import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'
import styles from './styles/App.module.scss';
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const injected = injectedModule()

const ethereumMainnet = {
    id: '0x1',
    token: 'ETH',
    label: 'Ethereum Mainnet',
    rpcUrl: `https://mainnet.infura.io/v3/ee72db671b5c4c219e5ff188fe866ebf`
}

init({
    wallets: [injected],
    chains: [
        ethereumMainnet,
    ]
})

function App() {
    const [{wallet, connecting}, connect, disconnect] = useConnectWallet()

    let ethersProvider
    if (wallet)
        ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')

    return (
        <div className={styles.container}>
            <Section1 wallet={{wallet, connecting, connect: connect.bind(this), disconnect: disconnect.bind(this), ethersProvider}}/>
            <Section2 wallet={{wallet, connecting, connect: connect.bind(this), disconnect: disconnect.bind(this), ethersProvider}}/>
            <Section3 wallet={{wallet, connecting, connect: connect.bind(this), disconnect: disconnect.bind(this), ethersProvider}}/>
        </div>
    )
}

export default App;