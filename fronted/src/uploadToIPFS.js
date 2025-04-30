import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import "dotenv/config";

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.PINATA_SECRET_API_KEY;

async function subirMetadataAIPFS() {
    if (!PINATA_API_KEY || !PINATA_SECRET_API_KEY) {
        console.error("❌ API Keys de Pinata no configuradas en .env");
        return;
    }

    const filePath = "./PicturesDiploma/perfeccion.png"; // Asegúrate de que el archivo existe
    if (!fs.existsSync(filePath)) {
        console.error("❌ El archivo no existe:", filePath);
        return;
    }

    const fileStream = fs.createReadStream(filePath);
    const formData = new FormData();
    formData.append("file", fileStream);

    const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

    try {
        console.log("⏳ Subiendo metadatos a Pinata...");
        const response = await axios.post(url, formData, {
            headers: {
                pinata_api_key: PINATA_API_KEY,
                pinata_secret_api_key: PINATA_SECRET_API_KEY,
                ...formData.getHeaders(),
            },
        });

        console.log("✅ Metadatos subidos con éxito:", response.data);
        console.log("📌 IPFS CID:", response.data.IpfsHash);
    } catch (error) {
        console.error("❌ Error al subir los metadatos:", error.response?.data || error.message);
    }
}

subirMetadataAIPFS();
