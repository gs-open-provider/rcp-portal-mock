import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, withStyles } from '@material-ui/core';

const style = theme => ({
  btn: {
    color: '#fff',
    margin: theme.spacing(1),
    width: '200px'
  },
  successbtn: {
    backgroundColor: '#00C851',
    '&:hover': {
      backgroundColor: '#007E33'
    }
  },
  errorbtn: {
    backgroundColor: '#ff4444',
    '&:hover': {
      backgroundColor: '#CC0000'
    }
  },
  infobtn: {
    backgroundColor: '#ffbb33',
    '&:hover': {
      backgroundColor: '#FF8800'
    }
  },
  morebtn: {
    backgroundColor: '#455a64',
    '&:hover': {
      backgroundColor: '#263238'
    }
  },
  primarybtn: {
    backgroundColor: '#0275d8',
    '&:hover': {
      backgroundColor: '#0d47a1'
    }
  }
});

function ButtonBtn(props) {
  const { name, classes, type } = props;
  let button;
  switch (type) {
  case 1:
    button = classes.successbtn;
    break;
  case 2:
    button = classes.errorbtn;
    break;
  case 3:
    button = classes.infobtn;
    break;
  case 4:
    button = classes.morebtn;
    break;
  case 5:
    button = classes.primarybtn;
    break;
  default:
    button = {
      backgroundColor: '#fff'
    };
  }
  return (
    <div>
      <Grid container>
        <Button
          variant="contained"
          className={[classes.btn, button]}
        >
          {name}
        </Button>
      </Grid>
    </div>
  );
}

ButtonBtn.propTypes = {
  classes: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired
};

export default withStyles(style)(ButtonBtn);

