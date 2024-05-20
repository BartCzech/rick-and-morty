import { describe, it, expect, vi } from "vitest";
import { fetchSpecificCharacter, fetchFilteredCharacters } from "../app/lib/data";

const defaultEndpoint = "https://rickandmortyapi.com/api/character";

describe('fetchSpecificCharacter', () => {
  it('should return the specific character information based on the provided character ID', async () => {
    const mockResponse = {
      id: 1,
      name: 'Rick Sanchez',
      gender: 'Male',
      location: { name: 'Earth' },
      origin: { name: 'Earth (C-137)' },
      species: 'Human',
      status: 'Alive'
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      } as Response)
    );

    const character = await fetchSpecificCharacter('1');

    expect(character).toEqual({
      id: 1,
      name: 'Rick Sanchez',
      gender: 'Male',
      location: { name: 'Earth' },
      origin: { name: 'Earth (C-137)' },
      species: 'Human',
      status: 'Alive'
    });

    expect(fetch).toHaveBeenCalledWith(`${defaultEndpoint}/1`);
  });
});

describe("fetchFilteredCharacters", () => {
  it("should return filtered characters based on the query and current page", async () => {
    const mockResponse = {
      info: { pages: 5 },
      results: [{ id: 1, name: "Rick Sanchez" }],
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response)
    );

    const characters = await fetchFilteredCharacters("Rick", 3);
    expect(characters).toEqual(mockResponse.results);
    expect(fetch).toHaveBeenCalledWith(`${defaultEndpoint}?page=2&name=Rick`);
  });

  it("should throw an error if fetching fails", async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error("Failed to fetch")));

    await expect(fetchFilteredCharacters("Rick", 3)).rejects.toThrow(
      "Failed to fetch filtered characters."
    );
  });
});
