import React from "react";
import { Box, Link, Typography } from "@mui/material";
import styled from "@emotion/styled";
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TwitterIcon from '@mui/icons-material/Twitter';
import CircleIcon from '@mui/icons-material/Circle';
const Footer = () => {
  const FooterLink = styled(Link)({
    color: "rgb(158,158,158)",
    textDecoration: "none",
    "&:hover": {
      color: "orange",
    },
  });
  return (
    <Box
      bgcolor={"#202329"}
      textAlign={"center"}
      fontWeight={"bold"}
      color={"rgb(158,158,158)"}
    >
      <Box
        paddingTop={"70px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        <FooterLink href="https://rickandmortyapi.com/api/character">characters : 826</FooterLink>
        <FooterLink href="https://rickandmortyapi.com/api/location" paddingLeft={"30px"} paddingRight={"30px"}>
          Locations : 826
        </FooterLink>
        <FooterLink href="https://rickandmortyapi.com/api/episode">Episodes : 826</FooterLink>
      </Box>
      <Box mt={"10px"}>
        <FooterLink href="#">Server Status </FooterLink>
        <CircleIcon  fontSize="inherit" color="success"/>
      </Box>
      <Box mt={'20px'}>
        <FooterLink href="#">
            <GitHubIcon fontSize="small" />
        </FooterLink>
        <FooterLink href="#"  paddingLeft={"30px"} paddingRight={"30px"}>
            <TwitterIcon fontSize="small" />
        </FooterLink>
        <FooterLink href="#">
            <FavoriteIcon fontSize="small" />
        </FooterLink>
      </Box>
      <Typography variant="p" component={'p'}>By <FooterLink target="_blank" href="https://github.com/erfan004" borderBottom={'1px solid orange'}>Erfan Hosseini</FooterLink> with <FavoriteIcon color="error" /></Typography>
    </Box>
  );
};

export default Footer;
