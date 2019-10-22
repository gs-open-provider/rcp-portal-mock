import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom/';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from 'react-i18next';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from './menu-sidenav-item.style';

class MenuSidenavItem extends React.Component {
    state = { open: false };

    handleClick = () => {
      this.setState({ open: !this.state.open });
    };

    render() {
      const {
        children, classes, href, title, info, icon, type, t, tReady
      } = this.props;

      if (type && type === 'header') {
        return (
          <ListSubheader disableSticky className={classes.root}>
            {tReady && t(title)}
          </ListSubheader>
        );
      }

      const listItemAttrs = {};
      if (href && !children) {
        listItemAttrs.to = href;
        listItemAttrs.component = NavLink;
        listItemAttrs.exact = true;
        listItemAttrs.activeClassName = classes.listItemActive;
      }

      const iconStyle = {
        fontSize: 16
      };

      return (
        <ListItem {...listItemAttrs} className={classes.root} disableGutters>
          <Button
            onClick={this.handleClick}
            classes={{
              root: classes.listItem,
              label: classes.listItemButtonLabel
            }}
          >
            <span className={classes.listIcon}>{icon && icon}</span>
            <Typography variant="button" color="inherit" className={classes.listItemText}>
              {
                tReady && t(title)
              }
              <br />
              <div style={{ fontSize: 11 }}>
                {
                  tReady && t(info)
                }
              </div>
            </Typography>
            {!href && (this.state.open ? <ExpandLessIcon style={iconStyle} /> : <ExpandMoreIcon style={iconStyle} />)}
          </Button>
          {children &&
            <Collapse
              in={this.state.open}
              timeout="auto"
              unmountOnExit
              className={classes.nested}
            >
              {children}
            </Collapse>}
        </ListItem>
      );
    }
}

MenuSidenavItem.defaultProps = {
  children: null,
  info: null,
  href: null,
  icon: null,
  type: null,
  t: () => {},
  tReady: false
};

MenuSidenavItem.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    listItem: PropTypes.string,
    listItemText: PropTypes.string,
    listItemActive: PropTypes.string,
    listIcon: PropTypes.string,
    listItemButtonLabel: PropTypes.string,
    nested: PropTypes.string
  }).isRequired,
  children: PropTypes.shape({}),
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
  icon: PropTypes.shape({}),
  type: PropTypes.string,
  t: PropTypes.func,
  tReady: PropTypes.bool
};

export default compose(withStyles(styles), withTranslation())(MenuSidenavItem);
