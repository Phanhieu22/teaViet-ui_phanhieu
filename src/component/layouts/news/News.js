import React from 'react';
import './news.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function News({ newsData, name }) {
    return (
        <>
            {' '}
            <h2 className="title">{name}</h2>
            <Grid container spacing={1}>
                {newsData.map(({ img, title, id }, index) => {
                    return (
                        <Grid key={id} item xs="12" md={index == 0 ? 12 : 6}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height={index === +0 ? '300' : '148'}
                                    width="100%"
                                    image={img}
                                    className="img-post"
                                    alt="tea viet"
                                />
                                <CardContent>
                                    <Typography className="titleTextPort" gutterBottom variant="h5" component="div">
                                         {title}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">xem thêm</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}{' '}
            </Grid>
        </>
    );
}

export default News;
