import React, { useEffect, useState } from "react";
import Moralis from "moralis";
import NFTGallery from "./NFTGallery";

const App = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        await Moralis.start({
          apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjRkMmZkYmI1LTg2MzUtNGQzNi1iMzc4LTY2OTdiNTU4ZmZhMCIsIm9yZ0lkIjoiNDQ0Njk0IiwidXNlcklkIjoiNDU3NTM2IiwidHlwZUlkIjoiYzViMjI4MDMtNDU4ZC00NTY1LTkyY2ItMGJhNDRiNGRiNWI0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NDYwNTU5OTIsImV4cCI6NDkwMTgxNTk5Mn0.G1LxDcz48YXCIc-bidhzkM-eAfRyw87JrdYhKt4DSD8", // reemplaza por el tuyo
        });

        const response = await Moralis.EvmApi.nft.getMultipleNFTs({
          chain: "0x89",
          tokens: [
            { tokenAddress: "0xb7ce52a3c58ab9fa9fccf42d46c068acb368691b", tokenId: "2" },
            { tokenAddress: "0xb7ce52a3c58ab9fa9fccf42d46c068acb368691b", tokenId: "1" },
          ],
        });

        setNfts(response.raw);
      } catch (e) {
        setError("No se pudieron cargar los NFTs. Intenta nuevamente.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white">
      <header className="bg-white shadow-md py-6 mb-8 text-center">
        <h1 className="text-4xl font-bold text-indigo-600">🎓 Galería de Diplomas NFT</h1>
        <p className="text-gray-600 mt-2">Certificados únicos emitidos en blockchain</p>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-indigo-600"></div>
          </div>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <NFTGallery nfts={nfts} />
        )}
      </main>
    </div>
  );
};

export default App;
