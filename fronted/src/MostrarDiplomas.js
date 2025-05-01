import React, { useEffect, useState } from 'react';
import { initMoralis } from './moralisConfig';
import Moralis from 'moralis';

const MostrarNFTs = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);


  
  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        await initMoralis(); // Solo se inicia si no ha sido iniciado
  
        const response = await Moralis.EvmApi.nft.getMultipleNFTs({
          chain: "0x89",
          tokens: [
            { tokenAddress: "0xb7ce52a3c58ab9fa9fccf42d46c068acb368691b", tokenId: "1" },
            { tokenAddress: "0xb7ce52a3c58ab9fa9fccf42d46c068acb368691b", tokenId: "2" }
          ]
        });
  
        console.log(response.raw);
      } catch (error) {
        console.error("Error al obtener los NFTs:", error);
      }
    };
  
    fetchNFTs();
  }, []);

  if (loading) {
    return <p>Cargando NFTs...</p>;
  }



  return (
    <div>
      <h2>🎨 NFTs Obtenidos</h2>
      {nfts.map((nft, index) => (
        <div key={index} style={{ border: '1px solid #ccc', marginBottom: 20, padding: 10, borderRadius: 8 }}>
          {nft.normalized_metadata?.image && (
            <img src={nft.normalized_metadata.image} alt={nft.normalized_metadata.name} width="200" />
          )}
          <h3>{nft.normalized_metadata?.name || `Token #${nft.token_id}`}</h3>
          <p>{nft.normalized_metadata?.description}</p>
          <p><strong>Contrato:</strong> {nft.token_address}</p>
          <p><strong>ID del Token:</strong> {nft.token_id}</p>
        </div>
      ))}
    </div>
  );
};

export default MostrarNFTs;