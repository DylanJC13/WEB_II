import { ethers } from "ethers";
import ABI from "../../src/DiplomaNFT.json";

// Dirección del contrato desplegado en Polygon
const CONTRACT_ADDRESS = "0xb7cE52a3C58aB9fa9FcCF42D46c068acb368691b";

// Función para conectar con MetaMask
export async function connectWallet() {
  if (!window.ethereum) {
    alert("Por favor instala MetaMask");
    return null;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  
  console.log("Wallet conectada:", address);
  return { provider, signer, address };
}

// Función para emitir un NFT de diploma
export async function emitirDiploma(destinatario, metadataURI) {
  try {
    const { signer } = await connectWallet();
    const contrato = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, signer);

    const tx = await contrato.emitirCertificacion(destinatario, metadataURI);
    await tx.wait();

    console.log("Diploma NFT emitido en la transacción:", tx.hash);
    return tx.hash;
  } catch (error) {
    console.error("Error al emitir el NFT:", error);
    return null;
  }
}
