import React from 'react'
import './Hero.css'
import { Box,} from'@mui/material';
import im1 from '../Assets/v1.jpg';
import im2 from '../Assets/p9.jpg';
import im3 from '../Assets/p6.jpg';
import im5 from '../Assets/p18.jpg';
import im7 from '../Assets/p23.jpg';
import im9 from '../Assets/p31.jpeg';
import im11 from '../Assets/p34.jpeg';
import im12 from '../Assets/p13.jpg';

const Hero = () => {
  return (
    <>
    <div className='popular'>
        <h1>NEW ARRIVALS ON ALL CATEGORIES<hr /></h1>
    <Box
          sx={{
            width: '70%',
            height: '450px',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '2%'
          }}
        >
        <Box
          component="img"
          src={im3}
          alt="img1"
          sx={{
            width: '15%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            border: '0.5px solid black',
            transition: 'all ease-in-out 0.5s',
            '&:hover': {
              width: '25%',
            },
          }}
        />
        <Box
          component="img"
          src={im2}
          alt="img5"
          sx={{
            width: '15%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            border: '1px solid black',
            transition: 'all ease-in-out 0.5s',
            '&:hover': {
              width: '25%',
            },
          }}
        />
        <Box
          component="img"
          src={im1}
          alt="img9"
          sx={{
            width: '15%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            border: '1px solid black',
            transition: 'all ease-in-out 0.5s',
            '&:hover': {
              width: '25%',
            },
          }}
        />
        <Box
          component="img"
          src={im12}
          alt="img7"
          sx={{
            width: '15%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            border: '1px solid black',
            transition: 'all ease-in-out 0.5s',
            '&:hover': {
              width: '25%',
            },
          }}
        />
        <Box
          component="img"
          src={im5}
          alt="img11"
          sx={{
            width: '15%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            border: '1px solid black',
            transition: 'all ease-in-out 0.5s',
            '&:hover': {
              width: '25%',
            },
          }}
        />
        <Box
          component="img"
          src={im7}
          alt="im10"
          sx={{
            width: '15%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            border: '1px solid black',
            transition: 'all ease-in-out 0.5s',
            '&:hover': {
              width: '25%',
            },
          }}
        />
        <Box
          component="img"
          src={im9}
          alt="im10"
          sx={{
            width: '15%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            border: '1px solid black',
            transition: 'all ease-in-out 0.5s',
            '&:hover': {
              width: '25%',
            },
          }}
        />
        <Box
          component="img"
          src={im11}
          alt="im10"
          sx={{
            width: '15%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            border: '1px solid black',
            transition: 'all ease-in-out 0.5s',
            '&:hover': {
              width: '25%',
            },
          }}
        />
    </Box>
    </div>
    </>
  )
}

export default Hero