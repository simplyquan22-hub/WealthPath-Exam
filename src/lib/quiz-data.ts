
export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  section: string;
};

export const quizData: Question[] = [
  {
    id: 1,
    question: "Which is the best definition of 'wealth'?",
    options: [
      "The total value of assets you own that can generate future value or income.",
      "A large amount of cash held in a high-yield savings account.",
      "Your annual salary minus your total spending for the year.",
      "The total amount of credit available to you across all credit cards."
    ],
    correctAnswer: "The total value of assets you own that can generate future value or income.",
    explanation: "Wealth is not just about income or cash on hand; it's the sum of your assets (like investments, real estate) that work for you to create more value over time, distinct from your salary, which is earned income.",
    section: "Psychology & Money Management"
  },
  {
    id: 2,
    question: "Selling investments too early because you’re scared is an example of which bias?",
    options: [
      "Loss Aversion",
      "Overconfidence Bias",
      "Herd Mentality",
      "Anchoring Bias"
    ],
    correctAnswer: "Loss Aversion",
    explanation: "Loss aversion is a cognitive bias where the pain of losing is psychologically about twice as powerful as the pleasure of gaining. This fear can cause investors to sell during downturns to avoid further losses, even if it's not the logical long-term move.",
    section: "Psychology & Money Management"
  },
  {
    id: 3,
    question: "Which behavior causes financial stagnation even as income grows?",
    options: [
      "Portfolio Rebalancing",
      "Lifestyle Inflation",
      "Tax-Loss Harvesting",
      "Dollar-Cost Averaging"
    ],
    correctAnswer: "Lifestyle Inflation",
    explanation: "Lifestyle inflation, or 'lifestyle creep,' is the tendency to increase spending as income increases. While seeming normal, it prevents you from using your increased income to build wealth, leading to financial stagnation.",
    section: "Psychology & Money Management"
  },
  {
    id: 4,
    question: "‘Control money or it controls you’ relates MOST to:",
    options: [
      "Having a high credit score.",
      "Relying on market luck and timing.",
      "Developing an intentional plan for your money's flow (budgeting and investing).",
      "Maximizing credit card rewards and bonuses."
    ],
    correctAnswer: "Developing an intentional plan for your money's flow (budgeting and investing).",
    explanation: "This phrase emphasizes the importance of being proactive and intentional with your finances. Creating a budget and an investment plan gives you control, rather than letting impulse spending and debt dictate your financial life.",
    section: "Psychology & Money Management"
  },
  {
    id: 5,
    question: "The foundation of changing financial outcomes starts primarily with:",
    options: [
      "Mastering advanced options trading strategies.",
      "Your mindset and beliefs about money.",
      "Finding a single 'hot' stock that will triple in value.",
      "Having a very high starting salary."
    ],
    correctAnswer: "Your mindset and beliefs about money.",
    explanation: "Your behaviors with money are a direct result of your mindset. Before any strategy or tactic, understanding and adjusting your beliefs about debt, saving, and investing is the fundamental first step to financial change.",
    section: "Psychology & Money Management"
  },
  {
    id: 6,
    question: "The #1 reason saving alone is not enough for long-term goals:",
    options: [
      "Savings accounts have low, government-mandated interest rate ceilings.",
      "Banks can legally use your saved money for their own investments.",
      "Inflation erodes the purchasing power of your money over time.",
      "It is impossible to access saved money in an emergency."
    ],
    correctAnswer: "Inflation erodes the purchasing power of your money over time.",
    explanation: "If your savings account earns 1% interest but inflation is 3%, your money's ability to buy goods and services is actually decreasing by 2% each year. Investing offers the potential to outpace inflation.",
    section: "Why Investing Beats Saving"
  },
  {
    id: 7,
    question: "Compound growth is best described as:",
    options: [
      "The fixed interest rate paid by a government bond.",
      "Earning returns on your initial investment plus the returns that were previously generated.",
      "A dividend that is paid out in cash instead of being reinvested.",
      "The increase in an investment's value due to stock splits."
    ],
    correctAnswer: "Earning returns on your initial investment plus the returns that were previously generated.",
    explanation: "Often called 'interest on interest,' compounding is the engine of wealth creation. Your investment returns start generating their own returns, creating a snowball effect over time.",
    section: "Why Investing Beats Saving"
  },
  {
    id: 8,
    question: "Historically, diversified global stock markets average around ___ per year long-term.",
    options: [
      "1%–3%",
      "4%–6%",
      "7%–10%",
      "15% or more"
    ],
    correctAnswer: "7%–10%",
    explanation: "While past performance is not a guarantee of future results, major market indexes like the S&P 500 have historically delivered average annual returns in the 7-10% range over long periods, accounting for both bull and bear markets.",
    section: "Why Investing Beats Saving"
  },
  {
    id: 9,
    question: "Investing is about:",
    options: [
      "Avoiding all possible risk by only holding cash.",
      "Attempting to time market highs and lows perfectly.",
      "Rapidly flipping stocks for short-term profits.",
      "Putting your money to work to create long-term growth, accepting calculated risk."
    ],
    correctAnswer: "Putting your money to work to create long-term growth, accepting calculated risk.",
    explanation: "Successful investing isn't about getting rich quick; it's about allocating capital to assets that have the potential to grow in value over time, understanding that this growth comes with a level of market risk.",
    section: "Why Investing Beats Saving"
  },
{
    id: 10,
    question: "Before making your first investment, you should ideally have:",
    options: [
      "At least $10,000 in a checking account.",
      "A 3–6 month emergency fund and a plan for high-interest debt.",
      "Paid off your entire mortgage.",
      "A complex portfolio of exotic derivatives already planned out."
    ],
    correctAnswer: "A 3–6 month emergency fund and a plan for high-interest debt.",
    explanation: "A financial foundation is key. An emergency fund prevents you from being forced to sell investments at a bad time, and paying off high-interest debt offers a better 'guaranteed return' than most investments.",
    section: "Getting Ready Before Investing"
  },
  {
    id: 11,
    question: "High-interest debt (e.g., 20% on credit cards) should:",
    options: [
      "Be paid down aggressively before starting to invest for the long-term.",
      "Be consolidated into a student loan if possible.",
      "Be considered 'good debt' if the credit card offers rewards.",
      "Be ignored, as market returns will likely exceed the interest rate."
    ],
    correctAnswer: "Be paid down aggressively before starting to invest for the long-term.",
    explanation: "Paying off a 20% APR credit card is equivalent to earning a 20% guaranteed, risk-free return on your money. It's nearly impossible to consistently beat that with investment returns.",
    section: "Getting Ready Before Investing"
  },
  {
    id: 12,
    question: "Even $50–$100 a month is a powerful start to investing because of:",
    options: [
      "The principle of compounding over a long time horizon.",
      "The fact that brokers give priority treatment to smaller accounts.",
      "The tax deductions available for small investment amounts.",
      "The guarantee that small amounts can't lose value."
    ],
    correctAnswer: "The principle of compounding over a long time horizon.",
    explanation: "The habit and the time are more important than the amount at the start. Small, consistent investments can grow into substantial sums over decades thanks to the power of compound growth.",
    section: "Getting Ready Before Investing"
  },
{
    id: 13,
    question: "Risk tolerance refers to:",
    options: [
      "Your financial capacity to absorb a large loss without impacting your goals.",
      "How much volatility you are emotionally comfortable with in your portfolio.",
      "The total amount of risk in the overall stock market at any given time.",
      "The legal limit of risk an investment advisor is allowed to recommend."
    ],
    correctAnswer: "How much volatility you are emotionally comfortable with in your portfolio.",
    explanation: "Risk tolerance is about your feelings and ability to sleep at night during market swings. It's distinct from risk *capacity*, which is your financial ability to withstand losses.",
    section: "Getting Ready Before Investing"
  },
  {
    id: 14,
    question: "Large-cap stocks are typically:",
    options: [
      "Small, regional companies with high growth potential.",
      "Companies that have just completed their Initial Public Offering (IPO).",
      "Large, established companies with a history of stable earnings.",
      "Highly speculative 'penny stocks' that trade for under $5."
    ],
    correctAnswer: "Large, established companies with a history of stable earnings.",
    explanation: "Large-cap companies (like Apple, Microsoft, Amazon) are household names that are leaders in their industries. They are generally more stable and less volatile than smaller companies.",
    section: "Stocks: Size & Style"
  },
  {
    id: 15,
    question: "Small-cap stocks generally have:",
    options: [
      "Lower volatility and more predictable dividend payments.",
      "More analyst coverage and media attention than large-caps.",
      "A lower risk profile due to their established market position.",
      "Higher potential for long-term growth, but also higher risk."
    ],
    correctAnswer: "Higher potential for long-term growth, but also higher risk.",
    explanation: "Small-cap companies are smaller and have more room to grow. This potential for high returns comes with greater volatility and a higher chance of business failure compared to large-caps.",
    section: "Stocks: Size & Style"
  },
{
    id: 16,
    question: "Blue-chip stocks are known for:",
    options: [
      "High price volatility and speculative nature.",
      "Being new companies in emerging, unproven industries.",
      "A long history of quality, stability, and often reliable dividend payments.",
      "Exclusively belonging to the technology sector."
    ],
    correctAnswer: "A long history of quality, stability, and often reliable dividend payments.",
    explanation: "Blue-chip stocks are reputable, financially sound companies that have operated for many years. They are considered pillars of the market, such as Johnson & Johnson, Coca-Cola, or Procter & Gamble.",
    section: "Stocks: Size & Style"
  },
  {
    id: 17,
    question: "Growth stocks usually:",
    options: [
      "Pay out a large portion of their profits as dividends to shareholders.",
      "Reinvest heavily back into the business to fuel further expansion.",
      "Are found in slow-growing, mature industries like utilities.",
      "Have stock prices that are considered undervalued relative to their earnings."
    ],
    correctAnswer: "Reinvest heavily back into the business to fuel further expansion.",
    explanation: "Growth companies prioritize scaling their business and capturing market share. They retain their earnings for R&D, marketing, and acquisitions, with the expectation of generating higher future profits.",
    section: "Stocks: Size & Style"
  },
  {
    id: 18,
    question: "ETFs (Exchange-Traded Funds) trade like:",
    options: [
      "Mutual funds, with prices settling once per day.",
      "Individual stocks, with prices changing throughout the day.",
      "Bonds, with a fixed maturity date and interest payments.",
      "Savings accounts, with a stable, guaranteed value."
    ],
    correctAnswer: "Individual stocks, with prices changing throughout the day.",
    explanation: "A key feature of ETFs is their intraday tradability. You can buy or sell them at any point during market hours at the current market price, just like a stock.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 19,
    question: "Index funds primarily attempt to:",
    options: [
      "Use expert managers to select investments they believe will outperform.",
      "Perfectly time market movements by frequently trading in and out of positions.",
      "Guarantee a positive return by avoiding all volatile assets.",
      "Mimic the performance of a specific market index by holding its securities."
    ],
    correctAnswer: "Mimic the performance of a specific market index by holding its securities.",
    explanation: "Index funds are a form of passive investing. They don't try to be clever or beat the market; they aim to BE the market by replicating the holdings and performance of a benchmark like the S&P 500.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 20,
    question: "An S&P 500 index fund gives you exposure to:",
    options: [
      "The 500 largest publicly-traded companies in the United States.",
      "A curated collection of 500 top-performing global stocks.",
      "500 different government and corporate bonds.",
      "A mix of stocks from 500 different countries."
    ],
    correctAnswer: "The 500 largest publicly-traded companies in the United States.",
    explanation: "The S&P 500 is a market-capitalization-weighted index of the 500 leading publicly traded companies in the U.S. It's often used as a benchmark for the health of the entire U.S. stock market.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 21,
    question: "Unlike ETFs, traditional mutual funds settle trades:",
    options: [
      "Instantly, at the moment you place the order.",
      "Only at the end of the trading day at a single price (NAV).",
      "Once per week, every Friday afternoon.",
      "During pre-market and after-hours trading sessions."
    ],
    correctAnswer: "Only at the end of the trading day at a single price (NAV).",
    explanation: "When you place an order for a mutual fund, you don't know the exact price you'll get. All orders are bundled and executed at the Net Asset Value (NAV) calculated after the market closes.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 22,
    question: "ETFs and index funds are popular because they generally offer:",
    options: [
      "Guaranteed returns and protection from market losses.",
      "Access to exclusive, high-fee hedge fund strategies.",
      "Low-cost, diversified exposure to a broad market or sector.",
      "The ability to use high leverage for day trading."
    ],
    correctAnswer: "Low-cost, diversified exposure to a broad market or sector.",
    explanation: "For most investors, the combination of instant diversification (owning hundreds of stocks in one transaction) and very low fees makes index-based ETFs a cornerstone of modern portfolio construction.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 23,
    question: "A bond is essentially:",
    options: [
      "A share of ownership in a company, giving you voting rights.",
      "A loan made to a corporation or government, which pays you interest.",
      "A digital currency secured by cryptography.",
      "A contract to buy a commodity at a future date."
    ],
    correctAnswer: "A loan made to a corporation or government, which pays you interest.",
    explanation: "When you buy a bond, you are the lender. The issuer (e.g., a company or government) borrows your money for a set period and pays you periodic interest, returning the principal at maturity.",
    section: "Bonds"
  },
  {
    id: 24,
    question: "Bonds help portfolios primarily by:",
    options: [
      "Providing aggressive growth that outpaces technology stocks.",
      "Adding a source of income and stability during stock market downturns.",
      "Offering high volatility to potentially maximize short-term returns.",
      "Giving you direct control over a corporation's management decisions."
    ],
    correctAnswer: "Adding a source of income and stability during stock market downturns.",
    explanation: "Bonds are typically less volatile than stocks and have a low correlation, meaning they often hold their value or rise when stocks fall. This provides a valuable cushion and diversifies a portfolio's risk.",
    section: "Bonds"
  },
  {
    id: 25,
    question: "Compared to corporate bonds, U.S. government bonds are generally:",
    options: [
      "Considered higher risk due to political uncertainty.",
      "Known for having higher yields to compensate for volatility.",
      "Not available for purchase by individual investors.",
      "Considered lower risk because they are backed by the U.S. government."
    ],
    correctAnswer: "Considered lower risk because they are backed by the U.S. government.",
    explanation: "U.S. Treasury bonds are considered one of the safest investments in the world because the risk of the U.S. government defaulting on its debt is extremely low.",
    section: "Bonds"
  },
  {
    id: 26,
    question: "A dividend is:",
    options: [
      "A mandatory fee you pay to your broker for holding a stock.",
      "A portion of a company's profits distributed to its shareholders.",
      "A tax credit you receive for investing in environmentally friendly companies.",
      "The interest payment you receive from holding a government bond."
    ],
    correctAnswer: "A portion of a company's profits distributed to its shareholders.",
    explanation: "Dividends are a way for companies to share their success directly with their owners (the shareholders). They are typically paid quarterly as a cash distribution per share.",
    section: "Dividends"
  },
  {
    id: 27,
    question: "DRIP stands for:",
    options: [
      "Daily Roth Investment Plan",
      "Dividend Reinvestment Plan",
      "Debt Reduction and Income Protocol",
      "Dynamic Return Investment Portfolio"
    ],
    correctAnswer: "Dividend Reinvestment Plan",
    explanation: "A DRIP is an arrangement that automatically uses a shareholder's cash dividends to purchase additional shares or fractional shares of the underlying stock, often commission-free.",
    section: "Dividends"
  },
  {
    id: 28,
    question: "Reinvesting dividends accelerates wealth primarily by:",
    options: [
      "Triggering favorable tax-loss harvesting opportunities.",
      "Leveraging the power of compounding by buying more income-producing shares.",
      "Reducing your total number of shares to increase the price per share.",
      "Guaranteeing the company will increase its dividend payment next quarter."
    ],
    correctAnswer: "Leveraging the power of compounding by buying more income-producing shares.",
    explanation: "When you reinvest dividends, you're not just earning a return on your original investment, but also on the dividends themselves. This creates a powerful 'snowball' effect over the long term.",
    section: "Dividends"
  },
  {
    id: 29,
    question: "A standard, diversified investment portfolio is primarily built from:",
    options: [
      "A mix of stocks, bonds, and cash equivalents.",
      "Collectibles like art, wine, and classic cars.",
      "A single high-growth technology stock.",
      "Leveraged foreign currency (Forex) trades."
    ],
    correctAnswer: "A mix of stocks, bonds, and cash equivalents.",
    explanation: "Stocks, bonds, and cash/alternatives are the fundamental building blocks. The specific percentage allocated to each (asset allocation) is the main driver of a portfolio's risk and return profile.",
    section: "Portfolio Foundation"
  },
  {
    id: 30,
    question: "In a portfolio, stocks mainly provide:",
    options: [
      "Capital preservation with no risk of loss.",
      "Guaranteed income through fixed interest payments.",
      "The primary engine for long-term growth and capital appreciation.",
      "A direct hedge against rising inflation."
    ],
    correctAnswer: "The primary engine for long-term growth and capital appreciation.",
    explanation: "While they come with higher volatility, stocks offer the greatest potential for growth over the long run, driven by corporate earnings, innovation, and economic expansion.",
    section: "Portfolio Foundation"
  },
  {
    id: 31,
    question: "In a portfolio, bonds mainly provide:",
    options: [
      "The highest potential for rapid, aggressive growth.",
      "A source of income and stability to offset stock market volatility.",
      "Ownership in a company and the right to vote on corporate matters.",
      "Exposure to speculative, early-stage technology companies."
    ],
    correctAnswer: "A source of income and stability to offset stock market volatility.",
    explanation: "Bonds act as a diversifier. Their lower volatility and interest payments provide a cushion during stock market downturns, helping to smooth out the portfolio's overall returns.",
    section: "Portfolio Foundation"
  },
  {
    id: 32,
    question: "For most investors, alternatives (like real estate, commodities) should be:",
    options: [
      "The largest part of their portfolio, typically 50% or more.",
      "A small, satellite portion, typically in the 5%–15% range.",
      "Completely avoided as they offer no diversification benefits.",
      "Used as a replacement for a traditional cash emergency fund."
    ],
    correctAnswer: "A small, satellite portion, typically in the 5%–15% range.",
    explanation: "While alternatives can offer diversification, they are often less liquid and more complex. For most, they should be a smaller 'satellite' holding around a 'core' of stocks and bonds.",
    section: "Portfolio Foundation"
  },
  {
    id: 33,
    question: "A 'ticker symbol' is a:",
    options: [
      "Unique code used to identify a publicly traded security on a stock exchange.",
      "Brokerage account password for accessing your portfolio.",
      "Government-issued ID number for investment advisors.",
      "The formal name of a mutual fund's lead portfolio manager."
    ],
    correctAnswer: "Unique code used to identify a publicly traded security on a stock exchange.",
    explanation: "Ticker symbols (e.g., AAPL for Apple, GOOGL for Alphabet) are shorthand identifiers that make it easy to look up and trade securities.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 34,
    question: "A brokerage account allows you to:",
    options: [
      "Only hold cash in an FDIC-insured savings vehicle.",
      "Buy and sell investments like stocks, bonds, and ETFs.",
      "Only purchase certificates of deposit (CDs) from a bank.",
      "Take out a personal loan secured by your portfolio."
    ],
    correctAnswer: "Buy and sell investments like stocks, bonds, and ETFs.",
    explanation: "A brokerage account is the essential interface for accessing the financial markets. It's where you hold, buy, and sell your various investments.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 35,
    question: "Traditional IRA contributions:",
    options: [
      "May be tax-deductible, reducing your current taxable income.",
      "Are made with after-tax dollars, making withdrawals tax-free.",
      "Are not subject to any annual contribution limits.",
      "Can only be invested in government bonds and cash."
    ],
    correctAnswer: "May be tax-deductible, reducing your current taxable income.",
    explanation: "The main benefit of a Traditional IRA is the potential for an upfront tax deduction. You get a tax break today, your money grows tax-deferred, and you pay ordinary income tax on withdrawals in retirement.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 36,
    question: "Roth IRA contributions are:",
    options: [
      "Made with pre-tax dollars, giving you a deduction today.",
      "Made with after-tax dollars, in exchange for tax-free growth and withdrawals.",
      "Taxed every year as capital gains within the account.",
      "Limited to a maximum of $1,000 per year."
    ],
    correctAnswer: "Made with after-tax dollars, in exchange for tax-free growth and withdrawals.",
    explanation: "With a Roth IRA, you forgo a tax break today to get a much bigger one later: all of your growth and qualified withdrawals in retirement are 100% tax-free.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 37,
    question: "Qualified Roth IRA withdrawals in retirement are:",
    options: [
      "Completely tax-free.",
      "Taxed at the long-term capital gains rate.",
      "Taxed as ordinary income.",
      "Subject to a 10% penalty but are not taxed."
    ],
    correctAnswer: "Completely tax-free.",
    explanation: "This is the primary and most powerful benefit of the Roth IRA. As long as you meet the qualifications (generally, age 59.5 and having the account for 5 years), every dollar you withdraw is yours to keep, tax-free.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 38,
    question: "For 2024, the approximate IRA contribution limit for individuals under age 50 is:",
    options: [
      "$3,000",
      "$7,000",
      "$15,000",
      "$23,000"
    ],
    correctAnswer: "$7,000",
    explanation: "For the tax year 2024, the maximum annual contribution to an IRA (Traditional or Roth) is $7,000 for individuals under age 50. Those 50 and over can contribute an additional $1,000.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 39,
    question: "The 'Buy and Hold' strategy works because:",
    options: [
      "It allows you to perfectly time market bottoms and tops.",
      "Long-term economic growth tends to drive market prices up over time, overcoming short-term volatility.",
      "Dividend payments are legally guaranteed to increase every year.",
      "It minimizes fees by encouraging frequent trading of assets."
    ],
    correctAnswer: "Long-term economic growth tends to drive market prices up over time, overcoming short-term volatility.",
    explanation: "This strategy is a bet on overall economic progress. By holding on through market cycles, you capture the long-term upward trend of the market rather than trying to guess its short-term movements.",
    section: "Core Strategies"
  },
  {
    id: 40,
    question: "An 'Indexing' strategy means:",
    options: [
      "You actively select individual stocks you believe will outperform.",
      "You aim to match the performance of a market index by owning the securities within it.",
      "You focus exclusively on day trading based on technical charts.",
      "You only invest in new companies during their Initial Public Offering (IPO)."
    ],
    correctAnswer: "You aim to match the performance of a market index by owning the securities within it.",
    explanation: "Indexing is a passive strategy. Instead of trying to beat the market, you 'buy the market' (e.g., the S&P 500) through a low-cost index fund or ETF, capturing its average returns.",
    section: "Core Strategies"
  },
  {
    id: 41,
    question: "A Dividend Growth strategy primarily focuses on:",
    options: [
      "Companies with the highest current dividend yield, regardless of safety.",
      "Young, non-profitable tech companies with high growth potential.",
      "Companies with a long, consistent history of increasing their dividend payments.",
      "Companies that have just recently started paying their first dividend."
    ],
    correctAnswer: "Companies with a long, consistent history of increasing their dividend payments.",
    explanation: "This strategy prioritizes reliability and a rising income stream. A track record of consistent dividend hikes is seen as a strong indicator of a company's financial health and management quality.",
    section: "Core Strategies"
  },
  {
    id: 42,
    question: "Dollar-Cost Averaging helps remove:",
    options: [
      "The need for diversification in a portfolio.",
      "The risk and emotion of trying to perfectly time your investments.",
      "The benefits of long-term compounding.",
      "All taxes associated with investment gains."
    ],
    correctAnswer: "The risk and emotion of trying to perfectly time your investments.",
    explanation: "By investing a fixed amount of money at regular intervals, you automatically buy more shares when prices are low and fewer when they are high. It's a disciplined approach that prevents emotional decision-making.",
    section: "Core Strategies"
  },
  {
    id: 43,
    question: "'Core' market exposure in a portfolio refers to:",
    options: [
      "The foundational, broad market exposure from assets like total market index funds.",
      "Small, speculative bets on niche industries like robotics or AI.",
      "Holding a large percentage of your portfolio in cash.",
      "The use of complex derivatives and futures contracts."
    ],
    correctAnswer: "The foundational, broad market exposure from assets like total market index funds.",
    explanation: "The 'Core' is the largest and most important part of a core-satellite portfolio. It's built on low-cost, broadly diversified funds that provide exposure to the entire market.",
    section: "Designing Portfolios"
  },
  {
    id: 44,
    question: "'Factor tilts' intentionally focus on:",
    options: [
      "Specific, historically-proven characteristics like 'value' or 'small-cap'.",
      "Companies that have recently experienced the largest stock price declines.",
      "Following social media trends to find 'meme stocks'.",
      "Avoiding academic research to follow your own intuition."
    ],
    correctAnswer: "Specific, historically-proven characteristics like 'value' or 'small-cap'.",
    explanation: "Factor investing involves overweighting parts of your portfolio towards 'factors' (characteristics) that have historically shown potential to outperform the broader market over the long term.",
    section: "Designing Portfolios"
  },
  {
    id: 45,
    question: "Thematic investing includes funds focused on:",
    options: [
      "A broad index like the S&P 500.",
      "Long-term trends like AI, clean energy, or robotics.",
      "A specific asset class like government bonds.",
      "A balanced allocation of 60% stocks and 40% bonds."
    ],
    correctAnswer: "Long-term trends like AI, clean energy, or robotics.",
    explanation: "Thematic investing moves beyond traditional sector classifications to invest in a collection of companies that are poised to benefit from a specific, long-term trend or idea.",
    section: "Designing Portfolios"
  },
  {
    id: 46,
    question: "A 'hedge' or 'defense' exposure in a portfolio exists to:",
    options: [
      "Maximize short-term growth and returns.",
      "Increase the portfolio's overall risk for higher gains.",
      "Provide stability and reduce volatility, especially during downturns.",
      "Concentrate the portfolio into a single, high-conviction asset."
    ],
    correctAnswer: "Provide stability and reduce volatility, especially during downturns.",
    explanation: "Defensive assets, like bonds or gold, are meant to act as a hedge. They often have low correlation to stocks, helping to cushion the portfolio when the stock market is falling.",
    section: "Designing Portfolios"
  },
  {
    id: 47,
    question: "Rebalancing exists to:",
    options: [
      "Systematically sell high and buy low to bring your portfolio back to its target allocation.",
      "Chase the performance of the best-performing assets in your portfolio.",
      "Increase the overall risk of your portfolio to maximize potential returns.",
      "Generate higher trading fees for your brokerage."
    ],
    correctAnswer: "Systematically sell high and buy low to bring your portfolio back to its target allocation.",
    explanation: "Rebalancing is a disciplined form of risk control. It forces you to take profits from your winners (that are now overweight) and reinvest them into your underperformers (that are now underweight).",
    section: "Rebalancing"
  },
  {
    id: 48,
    question: "If U.S. stocks surge and become overweight, rebalancing likely means:",
    options: [
      "Buying more U.S. stocks to follow the momentum.",
      "Selling some U.S. stocks and reallocating to underweight areas like bonds or international stocks.",
      "Selling all bonds to go all-in on U.S. stocks.",
      "Liquidating your entire portfolio and holding cash."
    ],
    correctAnswer: "Selling some U.S. stocks and reallocating to underweight areas like bonds or international stocks.",
    explanation: "The goal of rebalancing is to return to your original target asset allocation. This involves trimming the asset class that has grown too large and buying more of the one that has shrunk.",
    section: "Rebalancing"
  },
  {
    id: 49,
    question: "Rebalancing is primarily about:",
    options: [
      "Generating the highest possible short-term return.",
      "Controlling the risk level of your portfolio.",
      "Perfectly timing the tops and bottoms of the market.",
      "Finding the next 'hot' thematic investment."
    ],
    correctAnswer: "Controlling the risk level of your portfolio.",
    explanation: "If left unchecked, a portfolio will drift and its risk profile will change. Rebalancing is the mechanism for ensuring your investments stay aligned with your original risk tolerance and financial plan.",
    section: "Rebalancing"
  },
  {
    id: 50,
    question: "A portfolio that is never rebalanced will likely:",
    options: [
      "Drift and take on a different risk profile than originally intended.",
      "Automatically reduce its risk level over time.",
      "Perfectly maintain its original target allocation.",
      "Outperform a rebalanced portfolio in all market conditions."
    ],
    correctAnswer: "Drift and take on a different risk profile than originally intended.",
    explanation: "Over time, higher-growth assets like stocks will grow to become a larger portion of the portfolio. This 'drift' can make your portfolio significantly riskier than you are comfortable with.",
    section: "Rebalancing"
  }
];

    