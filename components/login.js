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
    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
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
        <div className={classes.container}>
            <div class="jss4 jss8 jss5" style="width: calc(100% - 48px); padding: 24px; border-radius: 6px;">
                <fieldset class="">
                    <MuiThemeProvider theme={theme}>
                        <TextField
                            className={classes.margin}
                            label="Username"
                            id="mui-theme-provider-standard-input"
                        />
                    </MuiThemeProvider>
                    <MuiThemeProvider theme={theme}>
                        <TextField
                            className={classes.margin}
                            label="Password"
                            id="mui-theme-provider-standard-input"
                        />
                    </MuiThemeProvider>
                </fieldset>
            </div>
        </div>
    );
}

CustomizedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);

// { <div class="jss4 jss8 jss5" style="width: calc(100% - 48px); padding: 24px; border-radius: 6px;"><div class="jss31"><div class="jss32 jss68"><img src="/resources/logo-rung.png"></div><div class="jss32 jss68"><div style="padding: 24px 24px 0px; min-height: 386px;"><h1 class="jss123 jss128">Log into your account</h1><form><div class="jss147 jss148 jss150"><label class="jss157 jss151 jss152 jss155" data-shrink="false">Email<span class="jss161"> *</span></label><div class="jss163 jss170 jss164 jss167"><input type="email" aria-invalid="false" aria-required="true" class="jss171 jss175" required="" value="" spellcheck="false"></div></div><div class="jss147 jss148 jss150"><label class="jss157 jss151 jss152 jss155" data-shrink="false">Password<span class="jss161"> *</span></label><div class="jss163 jss170 jss164 jss167"><input type="password" aria-invalid="false" aria-required="true" class="jss171 jss175" required="" value=""></div></div><button tabindex="0" class="jss192 jss177 jss179 jss189" type="button" style="float: right;"><span class="jss178"><span style="text-transform: none;">Forgot your password?</span></span><span class="jss195"></span></button></form><button tabindex="0" class="jss192 jss177 jss182 jss184 jss190 jss121" type="button" style="width: 100%;"><span class="jss178">Login</span><span class="jss195"></span></button><h3 class="jss123 jss130" style="padding: 12px 0px;">Don't you have an account?</h3><a tabindex="0" class="jss192 jss177 jss182 jss185 jss190 jss122" role="button" href="/signup" style="width: 100%;"><span class="jss178"> Register for free!</span><span class="jss195"></span></a></div></div></div></div>}