import { useEffect, useState } from 'react';

function MostrarDiplomas() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await fetch(
          'https://api.opensea.io/api/v1/assets?owner=0x20967B36cF8BB9E16E11f40Ac9098CE28D84F9d6&limit=10'
        );
        const data = await response.json();
        setNfts(data.assets || []);
      } catch (error) {
        console.error('Error al traer los NFTs desde OpenSea:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  if (loading) return <p>Cargando diplomas desde OpenSea...</p>;

  if (nfts.length === 0) return <p>No hay diplomas encontrados.</p>;

  return (
    <div>
      <h2>📜 Diplomas emitidos</h2>
      {nfts.map((nft) => (
        <div key={nft.id} style={{ border: '1px solid #ccc', marginBottom: 20, padding: 10, borderRadius: 8 }}>
          <img src={nft.image_url} alt={nft.name} width="200" />
          <h3>{nft.name}</h3>
          <p>{nft.description}</p>
          <a href={nft.permalink} target="_blank" rel="noopener noreferrer">
            Ver en OpenSea
          </a>
        </div>
      ))}
    </div>
  );
}

export default MostrarDiplomas;
