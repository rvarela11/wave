import { ethers } from 'ethers';
import abi from '../utils/WavePortal.json';

const contractAddress = '0x490e97022C88D9A0FeF672EC130f5ecabe372820';
const contractABI = abi.abi;

export const getWavePortalContract = (ethereum) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
};
