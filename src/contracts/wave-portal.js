import { ethers } from 'ethers';
import abi from '../utils/WavePortal.json';

const contractAddress = '0x200132f4672742cdE803A678061054EeA12B2B01';
const contractABI = abi.abi;

export const getWavePortalContract = (ethereum) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
};
