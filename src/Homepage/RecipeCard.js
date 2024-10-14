import React from 'react';
import { Card, CardContent, CardMedia, Typography, Tooltip, Chip, Box } from '@mui/material';

const RecipeCard = ({ image, title, time, servings, isHot }) => {
    return (
        <Tooltip title={`${title} - ${time} mins`} arrow>
            <Card
                sx={{
                    maxWidth: 345,
                    transition: 'transform 0.3s ease-in-out',
                    position: 'relative',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                    },
                }}
            >
                <CardMedia
                    component="img"
                    height="500"
                    image={image}
                    alt={title}
                    sx={{
                        transition: 'opacity 0.3s ease-in-out',
                        '&:hover': {
                            opacity: 0.85,
                        },
                    }}
                />
                <CardContent>
                    {isHot && (
                        <Chip
                            label="HOT!"
                            color="error"
                            sx={{
                                position: 'absolute',
                                top: 10,
                                left: 10,
                                zIndex: 1,
                                transform: 'rotate(-10deg)',
                                backgroundColor: '#error',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1.2rem',
                                padding: '0.5rem 1rem',
                            }}
                        />
                    )}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{
                                fontWeight: '700',
                                color: '#E53935',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05rem',
                                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{

                                color: '#4A4A4A',
                                letterSpacing: '0.02rem',
                            }}
                        >
                            {time} mins | {servings} servings
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Tooltip>
    );
};

export default RecipeCard;
