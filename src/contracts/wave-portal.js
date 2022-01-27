import { ethers } from 'ethers';
import abi from '../utils/WavePortal.json';

const contractAddress = '0xCb299Fd9F47DFDC289f1FB37D090D43E6F8bA41a';
const contractABI = abi.abi;

export const getWavePortalContract = (ethereum) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
};
