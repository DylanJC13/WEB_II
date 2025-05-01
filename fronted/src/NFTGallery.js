import React from "react";

const NFTGallery = ({ nfts }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {nfts.map((nft, index) => {
        let metadata = nft.metadata;

        if (typeof metadata === "string") {
          try {
            metadata = JSON.parse(metadata);
          } catch {
            metadata = null;
          }
        }

        const imageUrl = metadata?.image?.startsWith("ipfs://")
          ? metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/")
          : metadata?.image;

        const name = metadata?.name || nft.name || `NFT #${nft.token_id}`;
        const description = metadata?.description || "Sin descripción";
        const attributes = metadata?.attributes || [];

        return (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            {imageUrl && (
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-indigo-700">{name}</h2>
              <p className="text-gray-600 mt-1">{description}</p>

              <div className="mt-3 text-sm text-gray-700 space-y-1">
                {attributes.map((attr, i) => (
                  <div key={i}>
                    <span className="font-medium">{attr.trait_type}:</span>{" "}
                    {attr.value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NFTGallery;
