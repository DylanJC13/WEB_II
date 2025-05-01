import React, { useEffect, useState } from "react";
import Moralis from "moralis";
import NFTGallery from "./NFTGallery";

const App = () => {
  const [nfts, setNfts] = useState([]);

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
        console.error("Error al obtener los NFTs:", e);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100">
      <header className="py-8 text-center bg-white shadow">
        <h1 className="text-4xl font-extrabold text-indigo-700">Galería de NFTs</h1>
        <p className="text-gray-600 mt-2">Diplomas digitales en blockchain</p>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <NFTGallery nfts={nfts} />
      </main>
    </div>
  );
};

export default App;
