// src/moralisConfig.js
import Moralis from 'moralis';

export const initMoralis = async () => {
  if (!Moralis.Core.isStarted) {
    await Moralis.start({
      apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjRkMmZkYmI1LTg2MzUtNGQzNi1iMzc4LTY2OTdiNTU4ZmZhMCIsIm9yZ0lkIjoiNDQ0Njk0IiwidXNlcklkIjoiNDU3NTM2IiwidHlwZUlkIjoiYzViMjI4MDMtNDU4ZC00NTY1LTkyY2ItMGJhNDRiNGRiNWI0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NDYwNTU5OTIsImV4cCI6NDkwMTgxNTk5Mn0.G1LxDcz48YXCIc-bidhzkM-eAfRyw87JrdYhKt4DSD8"
    });
  }
};