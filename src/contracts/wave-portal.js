import { ethers } from 'ethers';
import abi from '../utils/WavePortal.json';

const contractAddress = '0x32d36823DF1da404E80A00B93A3963F04647d73f';
const contractABI = abi.abi;

export const getWavePortalContract = (ethereum) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
};
