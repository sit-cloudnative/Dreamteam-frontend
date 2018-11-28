import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    notchedOutline: {},
    bootstrapRoot: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapFormLabel: {
        fontSize: 18,
    }, root: {
        flexGrow: 1,
    }
});

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
    typography: { useNextVariants: true },
});

function CustomizedInputs(props) {
    const { classes } = props;

    return (
        <form>
            <MuiThemeProvider theme={theme}>
                <TextField
                    className={classes.margin}
                    label="Search"
                    id="mui-theme-provider-standard-input"
                />
            </MuiThemeProvider>
        </form>
    );
}

CustomizedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);