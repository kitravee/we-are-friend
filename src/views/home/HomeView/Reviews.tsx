import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import type { Theme } from 'src/theme';

interface ReviewProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128,
  },
  browseButton: {
    marginLeft: theme.spacing(2),
  },
  media: {
    // height: '100%',
    paddingTop: '72.5%', // 16:9
  },
  card: {
    borderRadius: 16,
    margin: 20,
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
  },
}));

const Review: FC<ReviewProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" color="textPrimary">
          People who talk about us
        </Typography>
        <Typography variant="h1" align="center" color="secondary">
          Review us.
        </Typography>
        <Box mt={6} display="flex" justifyContent="center" alignItems="center">
          {/* <Button
            color="secondary"
            component="a"
            href="https://material-ui.com/store/items/devias-kit-pro"
            variant="contained"
          >
            Get the kit
          </Button> */}
        </Box>
        <Carousel responsive={responsive}>
          {[1, 2, 3, 4].map(() => (
            <div>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/home/undraw_updated_resume_u4fy.svg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

Review.propTypes = {
  className: PropTypes.string,
};

export default Review;
