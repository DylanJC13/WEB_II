import React from "react";

const NFTGallery = ({ nfts }) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {nfts.map((nft, index) => {
        let metadata = nft.metadata;

        if (typeof metadata === "string") {
          try {
            metadata = JSON.parse(metadata);
          } catch {
            metadata = null;
          }
        }

        const imageUrl = metadata?.image?.replace("ipfs://", "https://ipfs.io/ipfs/");
        const name = metadata?.name || nft.name || `NFT #${nft.token_id}`;
        const description = metadata?.description || "Sin descripción";
        const attributes = metadata?.attributes || [];

        return (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold text-indigo-700">{name}</h2>
              <p className="text-gray-600 mt-2">{description}</p>
              <ul className="mt-4 text-sm text-gray-800">
                {attributes.map((attr, i) => (
                  <li key={i}>
                    <span className="font-semibold">{attr.trait_type}:</span> {attr.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NFTGallery;
