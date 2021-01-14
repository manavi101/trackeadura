import React from 'react';
import clsx from 'clsx';
import {
  Paper,
  IconButton,
  InputBase,
  Divider
} from '@material-ui/core';
import {
  SearchIcon as SearchIcon,
} from '@material-ui/icons/Search';
import useStyles from './Searchbar.styles';

const Searchbar = () => {

  const classes = useStyles();

  return(
    <div>
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    </div>
  );

}

export default Searchbar;