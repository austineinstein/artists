import Head from 'next/head';

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Head>
        <title>FanCradle - Sell Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-black py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">FanCradle</h1>
          <a href="#get-started" className="text-green-400 hover:text-green-300">Get started</a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-24 text-center">
          <h2 className="text-6xl font-bold mb-6">Meet your next fans</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            FanCradle is a powerful platform for artists and content creators designed to help you cultivate and expand your fan base when it matters most.
          </p>
          <a href="#get-started" className="bg-green-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-green-300 transition duration-300">Get started</a>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-6">Your Content, Amplified for Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-lg">
              With FanCradle, creators identify their priority content, and our intelligent system enhances its visibility across various platforms. This increases the likelihood of your content reaching new audiences, but the real magic happens when fans engage with it.
            </p>
            <p className="text-lg">
              We closely monitor audience interactions and use this data to refine future recommendations. It's all about creating a harmonious relationship between creators and fans.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-6">Influence Personalized Discovery</h2>
          <p className="text-lg mb-4">
            Today, 40% of all content discoveries happen through personalized recommendations. With FanCradle, creator teams can highlight which content is most important to them, boosting its presence across social media, streaming platforms, and more.
          </p>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-6">Build Long-Term Fan Relationships</h2>
          <ul className="text-lg space-y-2">
            <li>+60% increase in content saves</li>
            <li>+55% boost in user playlist/collection adds</li>
            <li>+45% growth in follower count</li>
          </ul>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-6">Expand Your Global Reach</h2>
          <p className="text-lg mb-4">
            Currently, 65% of all first-time creator discoveries through FanCradle come from audiences outside the creator's home country. On average, content promoted through FanCradle reaches fans in over 120 countries during a campaign period.
          </p>
          <p className="text-lg font-bold">Now available in over 100 markets</p>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-6">Support Your Creative Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Personalized recommendations on FanCradle consider thousands of factors. Now, that includes input from creators based on their specific goals.
              </p>
              <p className="text-lg">
                We believe that personalized recommendations should be informed by creators themselves—their ambitions and insights about their content. With FanCradle, they can activate promotion when it's working and pause it when it's not. The control is always in their hands.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Preparing for a Big Launch</h3>
                <p className="text-lg">
                  FanCradle works alongside your launch strategy. Use it to re-engage fans with your best content before a big release, then drive attention to new material when it drops.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Capitalizing on Trends</h3>
                <p className="text-lg">
                  Content going viral? Trending like never before? Activate FanCradle to expand your reach in the moment. Internet culture moves at light speed, and FanCradle is designed for quick, impactful decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-6">With FanCradle, there's no upfront cost</h2>
          <blockquote className="text-lg italic">
            "As an independent artist, knowing where to put your money to market your content is hard. So is coming up with enough funding. FanCradle fixes this issue with this new feature. It helps you reach highly targeted people and turn them into lifelong fans. The results speak for themselves and I would highly recommend it to anyone searching for creative ways to reach new fans without a big budget!"
          </blockquote>
        </section>

        <section className="mb-24 text-center">
          <h2 className="text-4xl font-bold mb-6">FanCradle is just the beginning of your growth journey.</h2>
          <p className="text-lg mb-8">
            Our Creator Toolkit offers even more resources to amplify your content and build a devoted fan base.
          </p>
          <a href="#explore-creator-toolkit" className="bg-green-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-green-300 transition duration-300">Explore Creator Toolkit</a>
        </section>
      </main>

      <footer className="bg-purple-800 py-12">
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

export default Home;
