import axios from "axios";
import { fetchFaield, fetchStart, fetchSucc } from "./actionsType";

export function getDataFromApi(dispatch) {
    dispatch(fetchStarted());
    axios.get("https://rickandmortyapi.com/api/character")
    .then(res=>{
        dispatch(fetchSuccess(res.data.results.splice(12, 6)))
    })
    .catch(error=>{
        dispatch(fetchError(error))
    })
}

export const fetchStarted = () => ({
  type: fetchStart,
});
export const fetchSuccess = (res) => ({
  type: fetchSucc,
  payload: res,
});
export const fetchError = (error) => ({
  type: fetchFaield,
  payload: error,
});
