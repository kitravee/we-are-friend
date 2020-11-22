import React, { useState } from 'react';
import type { FC } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Hidden,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { APP_VERSION } from 'src/constants';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ScreenDialog from './Dialog';
// import Logo from 'src/components/Logo';

interface TopBarProps {
  className?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    boxShadow: '0 0px',
  },
  toolbar: {
    height: 64,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const TopBar: FC<TopBarProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const [formOpen, setFormOpen] = useState(false);

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const handleCreateContentWrapperClick = () => {
    setFormOpen(true);
  };
  return (
    <AppBar className={clsx(classes.root, className)} color="default" {...rest}>
      <Toolbar className={classes.toolbar}>
        {/* <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink> */}
        <ScreenDialog formOpen={formOpen} onClose={handleFormClose} />
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleCreateContentWrapperClick}
        >
          <MenuIcon />
        </IconButton>
        <Hidden mdDown>
          <Typography variant="caption" color="textSecondary">
            {APP_VERSION}
          </Typography>
        </Hidden>
        <Box flexGrow={1} />
        <Hidden smDown>
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit">Documentation</Button>
        </Hidden>
        <Divider className={classes.divider} />
        <Button
          color="secondary"
          component="a"
          href="https://material-ui.com/store/items/devias-kit-pro"
          variant="contained"
          size="small"
        >
          Get the kit
        </Button>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
