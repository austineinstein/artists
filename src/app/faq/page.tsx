import Head from 'next/head';

const Faq = () => {
  const faqItems = [
    {
      question: "What is Fanc Token?",
      answer: "Fanc Token is a cryptocurrency that represents 25% ownership of an artist's portfolio value. It can be bought, sold, or traded on various exchanges."
    },
    {
      question: "How does the project balance transparency and practicality?",
      answer: "The project uses on-chain smart contracts for transparency, while managing the treasury off-chain to avoid high gas fees and complexity."
    },
    {
      question: "How is the token value determined?",
      answer: "The value of Fanc Token is directly tied to the artist's portfolio. Changes in the portfolio, such as adding or removing artists, affect the token's value."
    },
    {
      question: "Who governs the project?",
      answer: "The project is governed by a Decentralized Autonomous Organization (DAO). Each ETH contributor receives one Fanc Token, which equals one vote in the governance system."
    },
    {
      question: "How can I participate in the project?",
      answer: "You can join by requesting an invitation and contributing ETH. Participants receive Fanc Tokens and can influence the project through voting."
    },
    {
      question: "How are funds managed?",
      answer: "A smart contract manages funds, ensuring transparent and secure transactions. Only the owner can withdraw funds, and all contributions are publicly tracked."
    },
    {
      question: "What is the main goal of this initiative?",
      answer: "The project aims to support artists through community investment and decentralized management, encouraging cultural growth and providing a new model for art investment."
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <Head>
        <title>FanCradle - Fanc Token FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-black py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">FanCradle</h1>
          <a href="#get-started" className="text-green-400 hover:text-green-300">Get started</a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-24">
          <h2 className="text-6xl font-bold mb-6 text-center">Fanc Token FAQ</h2>
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-700 pb-4">
                <h3 className="text-2xl font-semibold text-gray-200 mb-2">{item.question}</h3>
                <p className="text-gray-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-4xl font-bold mb-6">Related Questions</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>How does Fanc Token differ from other cryptocurrencies?</li>
            <li>Can I invest in specific artists through Fanc Token?</li>
            <li>What happens to my Fanc Tokens if an artist leaves the portfolio?</li>
            <li>How often is the token value updated?</li>
            <li>Are there any risks associated with investing in Fanc Tokens?</li>
            <li>How can artists join the Fanc Token portfolio?</li>
            <li>What role does the DAO play in selecting artists for the portfolio?</li>
          </ul>
        </section>
      </main>

      <footer className="bg-black py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">FanCradle</h4>
            <p className="text-gray-400">Nurture your fan base with FanCradle. Grow your audience and support your creative goals.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#get-started" className="hover:text-purple-300">Get Started</a></li>
              <li><a href="#faq" className="hover:text-purple-300">FAQs</a></li>
              <li><a href="#contact" className="hover:text-purple-300">Contact Us</a></li>
              <li><a href="#privacy" className="hover:text-purple-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Follow Us</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="https://twitter.com" className="hover:text-purple-300">Twitter</a></li>
              <li><a href="https://facebook.com" className="hover:text-purple-300">Facebook</a></li>
              <li><a href="https://instagram.com" className="hover:text-purple-300">Instagram</a></li>
              <li><a href="https://linkedin.com" className="hover:text-purple-300">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center mt-8">
          <p className="text-gray-400">&copy; 2024 FanCradle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Faq;
