import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { CharCard } from "../CharCard/CharCard";
import { useQuery } from "@tanstack/react-query";

const CharDetail = () => {
  const [Char, setChar] = useState([]);

  const fetchCharacters = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    if (res) {
      setChar(res.data.results.splice(12, 6));
      return Char;
    } else {
      setChar([]);
    }
  };
  const charQuery = useQuery({
    queryKey: ["characters"],
    queryFn: () => fetchCharacters(),
  });

  let charEl;
  if (charQuery.isError) {
    charEl = <h2>fetching data has been failed try again later</h2>;
  } else if (charQuery.isLoading) {
    charEl = <h2>loading ...</h2>;
  } else {
    charEl = (
      <Grid container spacing={3} bgcolor={"#272B33"} padding={"15px"}>
        {Char.map((item) => (
          <Grid item xl={4} md={6} xs={12} lg={6} key={item.id}>
            <CharCard char={item} />
          </Grid>
        ))}
      </Grid>
    );
  }
  return <div>{charEl}</div>;
};
export default CharDetail;
