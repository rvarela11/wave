export const walletConnection = async () => {
    const metaMask = {
        account: undefined,
        error: undefined,
        hasWallet: false
    };

    try {
        const { ethereum } = window;

        if (!ethereum) {
            return metaMask;
        }

        metaMask.hasWallet = true;
        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) {
            metaMask.account = [accounts];
        }
    } catch (error) {
        metaMask.error = error;
    }

    return metaMask;
};

export const connectWallet = async () => {
    const metaMask = {
        account: undefined,
        error: undefined,
        hasWallet: true
    };

    try {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        metaMask.account = [accounts];
    } catch (error) {
        metaMask.error = error;
    }

    return metaMask;
};
