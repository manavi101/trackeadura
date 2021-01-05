import { createMuiTheme } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const lightTheme = createMuiTheme({
    palette:{
        type:"light",
        primary: deepPurple,
        background: {
            default:'#ededed'
        }
    }
})

export default lightTheme;