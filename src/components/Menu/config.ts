import { MenuEntry } from '@gameswapfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Buy StonkY',
    icon: 'TradeIcon',
    href: 'https://quickswap.exchange/#/swap?outputCurrency=0xcac723F6C79Ce761E04682009Fa87c39Ba05b75c',
  },
  {
    label: 'Stake Liquidity',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Stake Tokens',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Earn Dividends',
    icon: 'TicketIcon',
    href: '/profit',
  },
  {
    label: 'STONKMOON (Coming Soon)',
    icon: 'SunIcon',
    href: '/profit',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Road Map',
    icon: 'RoadmapIcon',
    href: 'https://gameswapfinance.gitbook.io/gameswap/roadmap',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'StonkY Chart',
        href: 'https://app.polychart.io/explorer/polygon/0x21401c19cbe557f1265401bda65bc523ce509db2'
      },
      {
        label: 'StonkX Chart',
        href: 'https://app.polychart.io/explorer/polygon/0xc293225ba90c545357761af2a09e71504275cee2'
      },
      {
        label: 'Github',
        href: 'https://github.com/gameswapfinance/',
      },
      {
        label: 'Docs',
        href: 'https://gameswapfinance.gitbook.io/gameswap/',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@gameswapfinance',
      }
    ],
  },
  {
    label: 'Rug Doc Security Review',
    icon: 'AuditIcon',
    href: 'https://rugdoc.io/project/stonky-farm/',
  }, 
  {
    label: 'Previous Farms',
    icon: 'FarmIcon',
    items: [
      {
        label: 'STONK',
        href: 'https://www.gameswapfinance.com',
      },
      {
        label: 'STONKX',
        href: 'https://stonk.farm',
      }
    ],
  },
]

export default config
