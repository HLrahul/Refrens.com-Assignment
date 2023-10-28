import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import { SimpleGrid } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/react";
import { css } from "@emotion/react";

import { useCharactersStore } from "../store/charactersStore";
import { Character } from "../types/index";

import CharacterCard from "../components/CharacterCard"; 

const GridStyles = css`
    height: auto;
    width: auto;

    padding: 16px 24px;
    margin-top: 1rem;
`

export default function CharactersPage() {
    const [ characters, setCharacters ] = useCharactersStore(state => [
        state.characters,
        state.setCharacters
    ]);

    const { data, isLoading, error } = useQuery({
        queryKey: ["characters"],
        queryFn: async() => {
            const response = await axios.get("https://rickandmortyapi.com/api/character");
            return response.data.results;
        } 
    })

    if(error) {
        console.log(error);
    }
    if (isLoading) {
        console.log("Loading...");
    }
    useEffect(() => {
      if (data) {
        setCharacters(data);
      }
    }, [data, setCharacters]);

    const columns = useBreakpointValue({ base: 1, lg: 2 });

    return (
        <SimpleGrid columns={columns} spacing={10} css={GridStyles}>
            { 
                characters.map((character: Character) => (
                    <CharacterCard key={character.id} character={character} />
                ))
            }
        </SimpleGrid>
    );
}