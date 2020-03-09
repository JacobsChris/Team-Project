import { ADD_TOKEN } from "../constants/actions-types";


export function addToken(payload) {
    return { type: "ADD_TOKEN", payload }
  };