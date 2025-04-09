import { useState } from "react";
import { subirMetadata } from "./uploadToIPFS";
import { emitirDiploma } from "./contract";

function App() {
    const [destinatario, setDestinatario] = useState("");
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState(null);

    async function manejarSubida() {
        if (!imagen || !destinatario || !nombre) {
            alert("Completa todos los campos");
            return;
        }

        const metadataURI = await subirMetadata(nombre, "Diploma NFT", imagen);
        if (metadataURI) {
            await emitirDiploma(destinatario, metadataURI);
            alert("NFT emitido con éxito!");
        }
    }

    return (
        <div>
            <h1>🎓 Generar Diploma NFT</h1>

            <input
                type="text"
                placeholder="Nombre del estudiante"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            
            <input
                type="text"
                placeholder="Dirección del destinatario"
                value={destinatario}
                onChange={(e) => setDestinatario(e.target.value)}
            />

            <input
                type="file"
                onChange={(e) => setImagen(e.target.files[0])}
            />

            <button onClick={manejarSubida}>Emitir Diploma NFT</button>
        </div>
    );
}

export default App;
