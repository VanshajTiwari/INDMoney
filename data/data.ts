export interface menuInterface {
  heading: string;
  url: string;
  submenu?: menuInterface[];
}

const menu: menuInterface[] = [
  {
    heading: "Invest",
    url: "",
    submenu: [
      {
        heading: "INDstocks",
        url: "",
        submenu: [
          {
            heading: "Stocks",
            url: "https://www.indmoney.com/stocks",
          },
          {
            heading: "IPO",
            url: "https://www.indmoney.com/ipo",
          },
          {
            heading: "Futures & Options",
            url: "https://www.indmoney.com/futures-and-options",
          },
          {
            heading: "SIP in Stocks",
            url: "https://www.indmoney.com/stocks/category/sip-in-stocks",
          },
          {
            heading: "Indices",
            url: "https://www.indmoney.com/indices",
          },
        ],
      },
      {
        heading: "US Stocks",
        url: "",
        submenu: [
          {heading: "US Stocks", url: "https://www.indmoney.com/us-stocks"},
        ],
      },
      {
        heading: "ETFs",
        url: "",
        submenu: [
          {
            heading: "Global ETFs",
            url: "https://www.indmoney.com/us-stocks/top-etfs?heading=Explore+US+Stocks+Categories",
          },
          {
            heading: "Gold ETFs",
            url: "https://www.indmoney.com/stocks/category/gold-etfs",
          },
          {heading: "All ETFs", url: "https://www.indmoney.com/stocks/etf"},
        ],
      },
      {
        heading: "Mutual Funds",
        url: "",
        submenu: [
          {
            heading: "All Mutual Funds",
            url: "https://www.indmoney.com/mutual-funds",
          },
          {
            heading: "Equity Funds",
            url: "https://www.indmoney.com/mutual-funds/equity-funds",
          },
          {
            heading: "Index Funds",
            url: "https://www.indmoney.com/mutual-funds/best-index-funds",
          },
          {
            heading: "Debt Funds",
            url: "https://www.indmoney.com/mutual-funds/debt-funds",
          },
          {
            heading: "Hybrid Funds",
            url: "https://www.indmoney.com/mutual-funds/hybrid-funds",
          },
        ],
      },
      {
        heading: "NPS",
        url: "",
        submenu: [
          {
            heading: "Invest in NPS",
            url: "https://www.indmoney.com/features/nps-national-pension-scheme",
          },
          {
            heading: "NPS Calculator",
            url: "https://www.indmoney.com/calculators/nps-calculator",
          },
        ],
      },
      {
        heading: "Other Instruments",
        url: "",
        submenu: [
          {
            heading: "Fixed Deposits",
            url: "https://www.indmoney.com/fixed-deposit",
          },
          {
            heading: "Insurance",
            url: "https://www.indmoney.com/insurance",
          },
        ],
      },
    ],
  },
  {
    heading: "Features",
    url: "",
    submenu: [
      {
        heading: "Calculators",
        url: "",
        submenu: [
          {
            heading: "SIP Calculator",
            url: "https://www.indmoney.com/calculators/sip-calculator",
          },
          {
            heading: "Brokerage Calculator",
            url: "https://www.indmoney.com/calculators/brokerage-calculator",
          },
          {
            heading: "SWP Calculator",
            url: "https://www.indmoney.com/calculators/swp-calculator",
          },
          {
            heading: "Regular vs Direct MF Calculator",
            url: "https://www.indmoney.com/calculators/direct-regular-mutual-funds",
          },
          {
            heading: "Lumpsum Calculator",
            url: "https://www.indmoney.com/calculators/lumpsum-calculator",
          },
          {
            heading: "GST Calculator",
            url: "https://www.indmoney.com/calculators/gst-calculator",
          },
          {
            heading: "NPS Calculator",
            url: "https://www.indmoney.com/calculators/nps-calculator",
          },
          {
            heading: "Post Office RD Calculator",
            url: "https://www.indmoney.com/calculators/post-office-rd-calculator",
          },
          {
            heading: "Salary Calculator",
            url: "https://www.indmoney.com/calculators/salary-calculator",
          },
          {
            heading: "Gratuity Calculator",
            url: "https://www.indmoney.com/calculators/gratuity-calculator",
          },
          {
            heading: "Mutual Fund Returns Calculator",
            url: "https://www.indmoney.com/calculators/mutual-funds-returns-calculator",
          },
          {
            heading: "View all Calculator",
            url: "https://www.indmoney.com/calculators",
          },
        ],
      },
      {
        heading: "Features",
        url: "",
        submenu: [
          {
            heading: "Trading App",
            url: "https://www.indmoney.com/features/best-trading-app",
          },
          {
            heading: "Goals Tracker",
            url: "https://www.indmoney.com/features/goals-tracker",
          },
          {
            heading: "Track Your Finances",
            url: "https://www.indmoney.com/features/track-all-investments",
          },
          {
            heading: "Track Credit Card Bills",
            url: "https://www.indmoney.com/features/track-credit-card-bills",
          },
          {
            heading: "Credit Score",
            url: "https://www.indmoney.com/check-free-credit-score",
          },
          {
            heading: "Blogs",
            url: "https://www.indmoney.com/articles",
          },
          {
            heading: "Mutual Fund Analytics",
            url: "https://www.indmoney.com/features/mutual-fund-analytics",
          },
          {
            heading: "Compare Mutual Funds",
            url: "https://www.indmoney.com/mutual-funds/compare",
          },
          {
            heading: "Switch Regular to Direct MF",
            url: "https://www.indmoney.com/features/switch-regular-to-direct-mutual-fund",
          },

          {
            heading: "Track Family Mutual Funds",
            url: "https://www.indmoney.com/features/track-family-mutual-funds",
          },
          {
            heading: "Set Nominee for Mutual Funds",
            url: "https://www.indmoney.com/mutual-funds/mutual-fund-nomination",
          },
          {
            heading: "View all Features",
            url: "https://www.indmoney.com/features",
          },
        ],
      },
    ],
  },
  {
    heading: "Markets",
    url: "",
    submenu: [
      {
        heading: "Market Movers",
        url: "",
        submenu: [
          {
            heading: "Stock Market Today",
            url: "https://www.indmoney.com/market",
          },
          {
            heading: "52 Week High",
            url: "https://www.indmoney.com/stocks/category/52-week-high",
          },
          {
            heading: "52 Week Low",
            url: "https://www.indmoney.com/stocks/category/52-week-low",
          },
          {
            heading: "Top Gainers",
            url: "https://www.indmoney.com/stocks/category/top-gainers",
          },
          {
            heading: "Top Losers",
            url: "https://www.indmoney.com/stocks/category/top-losers",
          },
          {
            heading: "Only Buyers",
            url: "https://www.indmoney.com/stocks/category/only-buyers",
          },
          {
            heading: "Only Sellers",
            url: "https://www.indmoney.com/stocks/category/only-sellers",
          },
        ],
      },
      {
        heading: "Stock Category",
        url: "",
        submenu: [
          {
            heading: "Stocks to buy today",
            url: "https://www.indmoney.com/stocks/category/buy-stocks",
          },
          {
            heading: "Penny Stocks",
            url: "https://www.indmoney.com/stocks/category/penny-stocks",
          },
          {
            heading: "Multi-bagger Stocks",
            url: "https://www.indmoney.com/stocks/category/multibagger-stocks",
          },
          {
            heading: "Nifty 50 Stocks",
            url: "https://www.indmoney.com/stocks/category/nifty-50-stocks",
          },
          {
            heading: "Large Cap Stocks",
            url: "https://www.indmoney.com/stocks/category/large-cap-stocks",
          },
          {
            heading: "Mid Cap Stocks",
            url: "https://www.indmoney.com/stocks/category/mid-cap-stocks",
          },
          {
            heading: "Small Cap Stocks",
            url: "https://www.indmoney.com/stocks/category/small-cap-stocks",
          },
        ],
      },
      {
        heading: "Indices",
        url: "",
        submenu: [
          {
            heading: "BSE Sensex",
            url: "https://www.indmoney.com/indices/sensex",
          },
          {
            heading: "Nifty 50",
            url: "https://www.indmoney.com/indices/nifty-50",
          },
          {
            heading: "Nifty Midcap 100",
            url: "https://www.indmoney.com/indices/nifty-midcap-100",
          },
          {
            heading: "Bank Nifty",
            url: "https://www.indmoney.com/indices/bank-nifty",
          },
          {
            heading: "FINNIFTY",
            url: "https://www.indmoney.com/indices/nifty-financial",
          },
          {
            heading: "Nifty 500",
            url: "https://www.indmoney.com/indices/nifty-500",
          },
          {
            heading: "Nifty IT",
            url: "https://www.indmoney.com/indices/nifty-it",
          },
        ],
      },
      {
        heading: "Global Indices",
        url: "",
        submenu: [
          {
            heading: "Gift Nifty",
            url: "https://www.indmoney.com/indices/gift-nifty",
          },
          {
            heading: "Dow Jones Industrial Average",
            url: "https://www.indmoney.com/indices/dow-jones-industrial-average",
          },
          {
            heading: "S&P 500",
            url: "https://www.indmoney.com/indices/s-p-500",
          },
          {
            heading: "Nasdaq 100",
            url: "https://www.indmoney.com/indices/nasdaq-100",
          },
          {
            heading: "Russell 2000 Index",
            url: "https://www.indmoney.com/indices/russell-2000-index",
          },
          {
            heading: "Dow Jones Market",
            url: "https://www.indmoney.com/indices/dow-jones-market",
          },
          {
            heading: "View all Indices",
            url: "https://www.indmoney.com/indices",
          },
        ],
      },
    ],
  },
  {
    heading: "Pricing",
    url: "https://www.indmoney.com/pricing?type=indian-stocks",
  },
  {
    heading: "Disclosure",
    url: "",
    submenu: [
      {
        heading: "Complaint Status",
        url: "https://www.indmoney.com/complaints-status",
      },
      {
        heading: "SEBI Investor Charter - Investment Advisor",
        url: "https://www.indmoney.com/sebi-investor-charter",
      },
      {
        heading: "More",
        url: "https://www.indmoney.com/page/policy-center",
      },
    ],
  },
];

export default menu;
