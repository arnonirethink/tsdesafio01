import {pokemons} from "./data"; 

type Pokemon = {
    name: string;
    type: string[];
    weight: number;
    height: number;
    id: number;
};


//01 - buscar pokemon por nome

//const searchPokemonByName = (name: string) => pokemons.find((pokemon : Pokemon) => pokemon.name === name);
// console.log(searchPokemonByName("kingler"));

//02- buscar pokemon pelo tipo 
//corrigi um erro que tinha observado no desafio anterior. Meu código buscava apenas o pokemon cujo único tipo fosse o do parâmetro, assim se tivesse 2 tipos não retornava como true. Agora corrigido. 

//const searchPokemonByType = (type: string) => pokemons.filter(({ type: pokemonTypes }) => pokemonTypes.includes(type));
//console.log(searchPokemonByType("water"));

//03- traduzir os tipos de inglês para português

const updatedPokemonsTypeInPortuguese = (pokemon: string) => pokemons.map((pokemon : Pokemon) => ({
    ...pokemon,
    type: pokemon.type.map((replace) =>
      replace === "grass"
        ? "grama"
        : replace === "poison"
        ? "toxico"
        : replace === "water"
        ? "agua"
        : replace === "fire"
        ? "fogo"
        : replace === "bug"
        ? "besouro"
        : replace === "flying"
        ? "voador"
        : replace === "electric"
        ? "dá choquinho"
        : replace === "ground"
        ? "chão"
        : replace === "fairy"
        ? "fadinha"
        : replace === "fighting"
        ? "dá porrada"
        : replace === "psychic"
        ? "psíquico"
        : replace === "rock"
        ? "pedregulho"
        : replace === "steel"
        ? "metalizadoh"
        : replace === "ice"
        ? "geladinho"
        : replace === "ghost"
        ? "assombração"
        : replace
    ),
  }));
  console.log(updatedPokemonsTypeInPortuguese(""));