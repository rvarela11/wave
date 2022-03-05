import { ethers } from 'ethers';
import abi from '../utils/WavePortal.json';

const contractAddress = '0xfB528B81B37D93A37ab64be78a42078d3516CFAB';
const contractABI = abi.abi;

export const getWavePortalContract = (ethereum) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
};
