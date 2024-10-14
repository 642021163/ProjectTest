import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import RecipeCard from './RecipeCard';

const recipes = [
    {
        image: '/assets/01.jpg',
        title: 'Hamburger, Crispy Chicken',
        time: 30,
        servings: 4,
        isHot: true,
    },
    {
        image: '/assets/02.jpg',
        title: 'Wagyu Steak',
        time: 40,
        servings: 4,
        isHot: true,
    },
    {
        image: '/assets/03.jpg',
        title: 'Wagyu A-Fire Hot Pot',
        time: 25,
        servings: 2,
        isHot: false,
    },
    {
        image: '/assets/04.jpg',
        title: 'Malai Mushrooms à la',
        time: 20,
        servings: 3,
        isHot: false,
    },
    {
        image: '/assets/05.jpg',
        title: 'Egg Royale',
        time: 12,
        servings: 3,
        isHot: true,
    },
    {
        image: '/assets/07.jpg',
        title: 'Salmon à la Limone',
        time: 18,
        servings: 3,
        isHot: false,
    },
];


const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true, 
        autoplaySpeed: 3000, 
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box
            sx={{
                // backgroundColor: '#e0e0e0', // กำหนดสีพื้นหลัง
                // padding: '2rem', // กำหนด padding รอบๆ
                backgroundImage: 'url(/assets/10.jpg)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                padding: '2rem', 
                minHeight: '100vh', 
            }}
        >
            <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
                <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                    sx={{
                        textAlign: 'left',
                        fontWeight: '600', 
                        color: 'red',
                        fontSize: '3rem', 
                        lineHeight: '1.3', 
                        textTransform: 'capitalize',
                        letterSpacing: '0.05rem',
                        marginBottom: '1.5rem',
                        fontFamily: '"Roboto Slab", serif',
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    RECOMMENDED
                </Typography>

                <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                    sx={{
                        textAlign: 'left', 
                        fontWeight: '700', 
                        color: 'red', 
                        fontSize: '3rem', 
                        lineHeight: '1.2', 
                        textTransform: 'capitalize', 
                        letterSpacing: '0.05rem', 
                        marginBottom: '1.5rem', 
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', 
                        fontFamily: '"Comic Sans MS", cursive, sans-serif',             
                    }}
                >
                    Recipes
                </Typography>

                <Slider {...settings}>
                    {recipes.map((recipe, index) => (
                        <div key={index}>
                            <RecipeCard
                                image={recipe.image}
                                title={recipe.title}
                                time={recipe.time}
                                servings={recipe.servings}
                                isHot={recipe.isHot} 
                            />
                        </div>
                    ))}
                </Slider>
            </Container>
        </Box>
    );
};

export default HomePage;
