const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjBjNjEzMmQxLWQxMzYtNDU0OS1iYTA4LTMyMzgxMThhYjBiZiIsIm9yZ0lkIjoiMzYzNDU1IiwidXNlcklkIjoiMzczNTM3IiwidHlwZUlkIjoiNjAwMTcxOGYtMDBjMy00YmQxLWJmZjAtZWI3MGI0Nzc2M2Q1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTkyMjQyNTIsImV4cCI6NDg1NDk4NDI1Mn0.fqdK72X46Pfd0aiPU6d8P_aclvrqWaHYJEgDKFmPZTI";

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTransfers = async (tokenAddress, tokenId) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
  );
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
