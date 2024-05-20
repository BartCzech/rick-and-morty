import Link from 'next/link';
import { fetchFilteredCharacters } from '@/app/lib/data';


export default async function CharactersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  
  const characters = await fetchFilteredCharacters(query, currentPage);

  const displayedCharacters = currentPage % 2 !== 0 
    ? characters.slice(0, 10) // Return the first 10 characters
    : characters.slice(-10); // Return the last 10 characters


  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {displayedCharacters?.map((character: any) => (
        <Link href={`/characters/${character.id}`} key={character.id}>
          <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src={character.image}
              alt={`${character.name}'s picture`}
              width={300}
              height={300}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{character.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
