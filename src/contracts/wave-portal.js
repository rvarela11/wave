import { ethers } from 'ethers';
import abi from '../utils/WavePortal.json';

const contractAddress = '0x7EAb3097cff2BDad13991320dB3911b14CbB04AB';
const contractABI = abi.abi;

export const getWavePortalContract = (ethereum) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
};
