import { fetchSpecificCharacter } from '@/app/lib/data';
import { CharacterData } from '@/app/lib/definitions';

const fetchCharacter = async (id: string): Promise<CharacterData> => {
  const data = await fetchSpecificCharacter(id);
  return data;
};

const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const data = await fetchCharacter(params.id);

  const { name, image, gender, location, origin, species, status } = data;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6">
        <img src={image} alt={name} className="w-full rounded-lg" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <h1 className="text-4xl font-bold mb-6">{name}</h1>
        <p className="text-xl">
          <span className="font-semibold">Gender:</span> {gender}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Location:</span> {location.name}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Origin:</span> {origin.name}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Species:</span> {species}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Status:</span> {status}
        </p>
      </div>
    </div>
  );
};

export default CharacterPage;
