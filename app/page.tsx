import Head from 'next/head';

export default function Page() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <Head>
        <title>Rick and Morty Wiki</title>
        <meta name="description" content="Explore the world of Rick and Morty with our comprehensive wiki." />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold mb-8">Welcome to the Rick and Morty Wiki</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Characters</h2>
            <p className="text-xl">Discover detailed information about your favorite characters, from the brilliant but alcoholic scientist Rick Sanchez to his awkward but adventurous grandson Morty.</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Episodes</h2>
            <p className="text-xl">Explore every episode of Rick and Morty, from the pilot to the latest season, and dive into summaries, trivia, and behind-the-scenes insights.</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Locations</h2>
            <p className="text-xl">Travel through the multiverse and learn about the various bizarre and intriguing locations featured in the show, from alternate dimensions to alien planets.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
