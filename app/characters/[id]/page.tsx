import { fetchSpecificCharacter } from '@/app/lib/data';
import { CharacterData } from '@/app/lib/definitions';
// interface CharacterData {
//   name: string;
//   image: string;
//   gender: string;
//   location: {
//     name: string;
//   };
//   origin: {
//     name: string;
//   };
//   species: string;
//   status: string;
// }

const fetchCharacter = async (id: string): Promise<CharacterData> => {
  const data = await fetchSpecificCharacter(id);

  return data;
};

const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const data = await fetchCharacter(params.id);

  const { name, image, gender, location, origin, species, status } = data;

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <img src={image} alt={name} className="w-full mb-4 rounded-lg" />
      <p className="mb-2">Gender: {gender}</p>
      <p className="mb-2">Location: {location.name}</p>
      <p className="mb-2">Origin: {origin.name}</p>
      <p className="mb-2">Species: {species}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default CharacterPage;
