// src/components/PokemonDetailWrapper.tsx
import { useParams } from "react-router-dom";
import PokemonDetailPanel from "./PokemonDetailPanel";
import type { PokemonDetail } from "../types/pokemon";

interface PokemonDetailWrapperProps {
  pokemons: PokemonDetail[];
  onClose: () => void;
}

function PokemonDetailWrapper({
  pokemons,
  onClose,
}: PokemonDetailWrapperProps) {
  const { id } = useParams();
  const pokemon = pokemons.find((p) => p.id === Number(id));

  if (!pokemon) return null;
  return <PokemonDetailPanel pokemon={pokemon} onClose={onClose} />;
}

export default PokemonDetailWrapper;
