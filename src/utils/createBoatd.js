import { candies } from "./candyData";

export const createBoard = (boardSize)=>Array(boardSize*boardSize).fill(null).map(()=>candies[Math.floor(Math.random()* candies.length)])