import { type Chain } from "viem";

const chains: readonly [Chain, ...Chain[]] = [
  {
    id: 97,
    name: "BSC Testnet",
    nativeCurrency: {
      decimals: 18,
      name: "BNB",
      symbol: "tBNB",
    },
    rpcUrls: {
      default: { http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"] },
    },
    blockExplorers: {
      default: {
        name: "BscScan",
        url: "https://testnet.bscscan.com",
        apiUrl: "https://testnet.bscscan.com/api",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 17422483,
      },
    },
    testnet: true,
  },
];

export default chains;
