import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import styles from './userinfo.style';

const Userinfo = (props) => {
  const { t, ready } = useTranslation();
  const {
    classes,
    isMobileView,
    userDetails,
    handleMenuOpen
  } = props;

  return (
    <div>
      <Button
        className={classes.buttonContainer}
        onClick={handleMenuOpen}
      >
        {
          isMobileView &&
          <Avatar aria-label="recipe">
            <img alt="avatar" src={userDetails.image} width={40} />
          </Avatar>
        }
        {
          !isMobileView &&
          <div
            className={classes.infoContainer}
          >
            <Avatar aria-label="recipe" className={classes.avatarBlock}>
              <img alt="avatar" src={userDetails.image} width={40} />
            </Avatar>
            <div className={classes.infoTextBlock}>
              {
                ready &&
                <Typography variant="inherit">
                  <span className={classes.usernameBlock}>
                    {userDetails.username}
                  </span>
                  <span className={classes.balanceBlock}>
                    {t('BALANCE')}: <strong>{userDetails.balance}</strong>
                  </span>
                </Typography>
              }
            </div>
          </div>
        }
      </Button>
    </div>
  );
};

Userinfo.defaultProps = {
};

Userinfo.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
  userDetails: PropTypes.shape({
    username: PropTypes.string,
    resellerID: PropTypes.string,
    balance: PropTypes.string,
    image: PropTypes.string
  }).isRequired,
  handleMenuOpen: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    buttonContainer: PropTypes.string,
    infoContainer: PropTypes.string,
    avatarBlock: PropTypes.string,
    infoTextBlock: PropTypes.string,
    usernameBlock: PropTypes.string,
    balanceBlock: PropTypes.string
  }).isRequired
};

export default withStyles(styles, { withTheme: true })(Userinfo);
