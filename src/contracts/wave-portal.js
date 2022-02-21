import { ethers } from 'ethers';
import abi from '../utils/WavePortal.json';

const contractAddress = '0xe7c3B2b7C9f373F432C17d7eD3601fc0D59053e2';
const contractABI = abi.abi;

export const getWavePortalContract = (ethereum) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
};
