import { NFTStorage } from "nft.storage";

const API_KEY = "19028a65.936b03b690694efea45bef3bab1d188b";

async function testNFTStorage() {
  try {
    const client = new NFTStorage({ token: API_KEY });
    console.log("✅ Conexión exitosa con NFT.Storage");
  } catch (error) {
    console.error("❌ Error al conectar con NFT.Storage:", error);
  }
}

testNFTStorage();
