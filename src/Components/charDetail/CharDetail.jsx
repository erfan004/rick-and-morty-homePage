import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { CharCard } from "../CharCard/CharCard";

const CharDetail = () => {

  const [Char, setChar] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        setChar(res.data.results.splice(12, 6));
        console.log(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        {Char.map((item) => (
          <Grid item xl={4} md={6} xs={12} lg={6} key={item.id}>
            <CharCard char={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default CharDetail;
