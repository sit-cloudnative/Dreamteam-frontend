import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,


    }, paper2: {
        margin: theme.spacing.unit * 2,
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,


    },

});

function AutoGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={3}>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=x3bfa3DZ8JM' playing controls width="400" />
                    </Paper>
                    <Paper className={classes.paper}>
                        Subject : INT202<br/>
                        Teacher : Olarn
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper2}><ReactPlayer url='https://www.youtube.com/watch?v=x3bfa3DZ8JM' controls width="170" />
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}

AutoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
