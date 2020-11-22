import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  dialogPaper: {
    height: '100vh',
    maxHeight: '100vh',
    width: 400,
    maxWidth: 400,
    marginRight: 'auto',
    marginLeft: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    borderRadius: 0,
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      maxWidth: '100vw',
      margin: 0,
    },
  },
}));

interface ScreenDialogProps {
  className?: string;
  formOpen: boolean;
  onClose: () => void;
}

const Transition = React.forwardRef(
  (
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
  ) => <Slide direction="right" ref={ref} {...props} />,
);

const ScreenDialog: FC<ScreenDialogProps> = ({ formOpen, onClose }) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        PaperProps={{
          className: classes.dialogPaper,
        }}
        open={formOpen}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={onClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

ScreenDialog.propTypes = {
  formOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ScreenDialog;
