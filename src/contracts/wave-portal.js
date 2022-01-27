import { ethers } from 'ethers';
import abi from '../utils/WavePortal.json';

const contractAddress = '0xf34C59497C3E0981938DfB10AD097a753d84c4dd';
const contractABI = abi.abi;

export const getWavePortalContract = (ethereum) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
};
