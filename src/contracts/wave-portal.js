import { ethers } from 'ethers';
import abi from '../utils/WavePortal.json';

const contractAddress = '0x7798D615A58032460F93A84bAec2EE40d050f844';
const contractABI = abi.abi;

export const getWavePortalContract = (ethereum) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
};
