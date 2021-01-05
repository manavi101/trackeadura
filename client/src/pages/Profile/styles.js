import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    height:'100%',
  },
  banner: {
    height:100,
    width:'100%'
  },
  cardRoot: {
    padding: theme.spacing(2)
  }
}))

export default useStyles;