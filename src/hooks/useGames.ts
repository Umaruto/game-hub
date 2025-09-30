import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[]
  metacritic: number
}



const useGames = (
  selecredGenre: Genre | null, selectedPlatform: Platform | null) => 
    useData<Game>('/games', {
      params: {
        genres: selecredGenre?.id,
        platforms: selectedPlatform?.id
      }},
      [selecredGenre?.id, selectedPlatform?.id]);

export default useGames