import { unstable_noStore as noStore } from "next/cache";

const defaultEndpoint = "https://rickandmortyapi.com/api/character";

export async function fetchCharactersPages(query: string) {
  noStore();

  try {
    const res = await fetch(defaultEndpoint + `?name=${query}`);
    const data = await res.json();
    const totalPages = Number(data.info.pages) * 2 - 1;
    return totalPages;
  } catch (error) {
    console.error("Failed to fetch characters:", error);
    throw new Error("Failed to fetch characters.");
  }
}

export async function fetchFilteredCharacters(
  query: string,
  currentPage: number
) {
  noStore();

  try {
    const page = Math.ceil(currentPage / 2);
    const res = await fetch(
      defaultEndpoint + `?page=${page}&name=${query}`
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch filtered characters:", error);
    throw new Error("Failed to fetch filtered characters.");
  }
}

export async function fetchSpecificCharacter(id: string) {
  noStore();

  try {
    const res = await fetch(`${defaultEndpoint}/${id}`);
    const data = await res.json();
    return {
      id: data.id,
      name: data.name,
      image: data.image,
      gender: data.gender,
      location: {
        name: data.location.name,
      },
      origin: {
        name: data.origin.name,
      },
      species: data.species,
      status: data.status,
    };
  } catch (error) {
    console.error("Failed to fetch a specific character: ", error);
    throw new Error("Failed to fetch a specific character.");
  }
}
