import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import SearchBar from 'searchbar';

const styles = {
  card: {
    minWidth: 275,
  },
  root: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <Typography variant="h3" color="inherit">
            DREAMTEAM
          </Typography>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Favorites
              </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Subject1</a>
              <a class="dropdown-item" href="#">Subject2</a>
              <a class="dropdown-item" href="#">Subject3</a>
            </div>
          </div>
          <SearchBar></SearchBar>
          <Grid container justify="right" alignItems="right">
            <Avatar alt="Tanapat Choochot" src="../static/images/avatar/user1.jpg" className={classes.avatar} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);