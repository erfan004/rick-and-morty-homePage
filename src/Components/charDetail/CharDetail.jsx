import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { CharCard } from "../CharCard/CharCard";
import { connect } from "react-redux";
import {getDataFromApi} from '../../stateManagement/actions/actions'

const CharDetail = ({Char , isLoading , isError , getAll}) => {

  useEffect(()=>{
    getAll()
  } , [])

  let charEl;
  if (isError) {
    charEl = <h2>fetching data has been failed try again later</h2>;
  } else if (isLoading) {
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
function mapStateToProps(state){
  return { 
    Char : state.charState.items,
    isLoading : state.charState.isLoading,
    isError : state.charState.isError
  }
}
function mapDispatchToProps(dispatch){
return {
  getAll : ()=> getDataFromApi(dispatch)
}
}
export default connect(mapStateToProps , mapDispatchToProps)(CharDetail);
