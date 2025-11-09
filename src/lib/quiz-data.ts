export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export const quizData: Question[] = [
  {
    id: 1,
    question: "What is the primary purpose of diversification in an investment portfolio?",
    options: [
      "To guarantee high returns",
      "To concentrate on a single high-performing asset",
      "To reduce risk by investing in a variety of assets",
      "To avoid all taxes on investment gains",
    ],
    correctAnswer: "To reduce risk by investing in a variety of assets",
    explanation: "Diversification spreads your investments across various assets, so if one performs poorly, it doesn't disproportionately harm your overall portfolio. It's the equivalent of not putting all your eggs in one basket."
  },
  {
    id: 2,
    question: "What does 'ROI' stand for in finance?",
    options: [
      "Rate of Interest",
      "Return on Investment",
      "Risk of Inflation",
      "Revenue on Investment",
    ],
    correctAnswer: "Return on Investment",
    explanation: "Return on Investment (ROI) is a performance measure used to evaluate the efficiency or profitability of an investment. It is calculated by dividing the net profit from an investment by its initial cost."
  },
  {
    id: 3,
    question: "What is a primary advantage of a 401(k) retirement plan?",
    options: [
      "It allows for unlimited withdrawals at any age without penalty",
      "It offers tax-deferred growth and potential employer matching contributions",
      "It is completely managed by the government",
      "It only allows investment in government bonds",
    ],
    correctAnswer: "It offers tax-deferred growth and potential employer matching contributions",
    explanation: "A 401(k) allows your investments to grow tax-deferred until retirement. Many employers also offer a 'match,' contributing to your account alongside you, which is essentially free money."
  },
  {
    id: 4,
    question: "The 'Rule of 72' is a quick way to estimate...",
    options: [
      "The exact return of an investment",
      "The number of years it will take for an investment to double",
      "The amount of tax you will owe",
      "The ideal age to retire",
    ],
    correctAnswer: "The number of years it will take for an investment to double",
    explanation: "By dividing 72 by the annual rate of return, you can get a rough estimate of how many years it will take for your investment to double in value. For example, at an 8% annual return, it would take approximately 9 years (72 / 8 = 9)."
  },
  {
    id: 5,
    question: "Which of the following generally has the most significant positive impact on your credit score?",
    options: [
      "Opening many new credit cards at once",
      "Maintaining a high credit card balance",
      "Making late payments occasionally",
      "Making on-time payments consistently",
    ],
    correctAnswer: "Making on-time payments consistently",
    explanation: "Payment history is the most critical factor in determining your credit score. Consistently paying your bills on time demonstrates financial responsibility to lenders and has the greatest positive effect on your score."
  },
];
