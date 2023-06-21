import React from 'react'
import { Card , CardContent , CardMedia , CardHeader, Typography , Link } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import {Icon} from '@mui/material';
import styled from '@emotion/styled';
const MyLink = styled(Link)({
  color:'#f5f5f5' , 
  textDecoration : 'none' ,
  '&:hover' : {
    color:'orange'
  }
})

const MyCircleIcon = styled(CircleIcon)({
  fontSize : '20px' 
})
export const CharCard = ({char}) => {

  let lifeStatus = <MyCircleIcon fontSize='10px'/>
  if(char.status == 'Alive'){
    lifeStatus = <MyCircleIcon sx={{color : '#55CC44'}} /> 
  }
  else if(char.status == 'Dead'){
    lifeStatus = <MyCircleIcon sx={{color : '#D63D2E'}} />
  }
  else{
    lifeStatus = <MyCircleIcon sx={{color : '#9E9E9E'}} />
  }

  return (
    <div>
        <Card sx={{display:'flex' , backgroundColor:'#3C3E44'}}>
            <CardMedia 
            component='img'
            sx={{width:200}}
            image={char.image}
            />
                <CardContent sx={{color : '#f5f5f5'}}>

                    <MyLink target='_blank' href={char.url} variant='h5' fontWeight={'bold'} >{char.name}</MyLink>

                    <div style={{display:'flex' , marginBottom:'20px'}}>
                    {lifeStatus}
                    <Typography  variant='p' fontSize={'1.1rem'} fontWeight={'200'}> {`${char.status} - ${char.species}`}</Typography>
                    </div>
                    
                    <Typography color={'silver'}>Last known location:</Typography>
                    <MyLink fontSize={'1.1rem'} href={char.location.url} target='_blank'>{char.location.name}</MyLink>

                    <Typography color={'silver'} sx={{marginTop:'20px'}}>originally from :</Typography>
                    <MyLink href={char.url} target='_blank' fontSize={'1.1rem'}>{char.origin.name}</MyLink>
                </CardContent>
        </Card>
    </div>
  )
}