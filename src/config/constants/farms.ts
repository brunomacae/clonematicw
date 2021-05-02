import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'STONK-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x7191EEfC86D3E83abF72f2c120A3A638971502d1', // STONK - USDC
    },
    tokenSymbol: 'STONK',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x62801B19b0ea8f094AD17f7DE824EEb4C54C6530',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'WMATIC-USDC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 2,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WMATIC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
  {
    pid: 3,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WBTC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498', // WBTC - USDC
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', // WBTC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 4,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WETH',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d', // ETH - USDC
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', // ETH
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 5,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'QUICK',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb', // QUICK - USDC
    },
    tokenSymbol: 'QUICK',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13', // QUICK
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 6,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'YLD',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0xead4c2d8859b2cb0698aeb7d0cf56a00468a4f5c', // YLD - MATIC
    },
    tokenSymbol: 'YLD',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x4cebdbcb286101a17d3ea1f7fe7bbded2b2053dd', // YLD
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 7,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDT - USDC
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
         
  {
    pid: 8,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDC - USDC
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'STONK',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x7191EEfC86D3E83abF72f2c120A3A638971502d1', // STONK - USDC
    },
    tokenSymbol: 'STONK',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x62801B19b0ea8f094AD17f7DE824EEb4C54C6530',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  /* 
  {
    pid: 8,
    risk: 3,
    lpSymbol: 'WMATIC - USDC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, */
]

export default farms
