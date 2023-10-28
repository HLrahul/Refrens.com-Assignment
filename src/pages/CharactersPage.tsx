import { SimpleGrid } from "@chakra-ui/layout";
import { useQuery } from "@tanstack/react-query";

import { useCharactersStore } from "../store/charactersStore";
import { Character } from "../types/index";

import CharacterCard from "../components/CharacterCard"; 

export default function CharactersPage() {
    const [ characters, setCharacters ] = useCharactersStore(state => [
        state.characters,
        state.setCharacters
    ]);

    const { data, isLoading, error } = useQuery({
        queryKey: ["characters"],
        queryFn: async() => {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            return data.results;
        } 
    })

    if(error) {
        console.log(error);
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (data) {
        setCharacters(data);
    }

    return (
        <SimpleGrid columns={2} spacing={10}>
            { 
                characters.map((character: Character) => (
                    <CharacterCard key={character.id} character={character} />
                ))
            }
        </SimpleGrid>
    );
}