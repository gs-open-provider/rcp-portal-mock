import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import CONFIG from '../../assets/data/membership/membership-plans';
import Button from '../../components/Button/button.component';
import styles from './memberships.style';

const Memberships = (props) => {
  const { classes } = props;
  const { t, ready } = useTranslation();
  const [subPlans, setSubPlans] = React.useState([]);
  const [backgroundColor, setBackgroundColor] = React.useState('');

  const selectPlan = (plan, color) => {
    setSubPlans(plan);
    setBackgroundColor(color);
  };

  return (
    <div className={classes.portalDashboardPageWrapper}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid key={1} item xs={12} sm={12} md={12} className={classes.portalWidget}>
            <Typography variant="subtitle1" className={classes.portalWidgetHeading}>
              {ready && t('MEMBERSHIP_PLAN')}
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <Grid container direction="row">
                <Grid item xs={12} sm={8} className={classes.mainDesc}>
                  <Typography variant="inherit" align="center">
                    {ready && t(CONFIG.description)}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Grid container direction="row" justify="flex-end">
                    <Button name="DOMAIN_COST_PRICES" type={1} />
                    <Button name="MEMBERSHIP_FAQ" type={4} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={classes.planContainer}>
                <Grid container direction="row" justify="center">
                  {
                    CONFIG.plans.map((plan, index) => (
                      <Grid
                        item
                        container
                        key={index}
                        justify="center"
                        // xs={6}
                        onClick={() => selectPlan(plan.viewPlan, plan.backgroundColor)}
                        className={classes.card}
                      >
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                          className={classes.cardHeader}
                          style={{ backgroundColor: plan.backgroundColor }}
                        >
                          <Typography variant="h5" className={classes.typoStyle}>{ready && t(plan.title)}</Typography>
                        </Grid>
                        <Grid className={classes.planValue}>
                          <Typography variant="h6">{ready && t(plan.value)}</Typography>
                        </Grid>
                        <Grid container className={classes.desc}>
                          <Typography align="center">{ready && t(plan.desc)}</Typography>
                        </Grid>
                        <Grid className={classes.planView}>
                          <Link>{ready && t('VIEW_PLAN_PRICING')}</Link>
                        </Grid>
                      </Grid>
                    ))
                  }
                </Grid>
                {
                  (subPlans.length > 0) &&
                  <Grid item xs={12} className={classes.detailView}>
                    <Grid container direction="row" justify="center">
                      {
                        subPlans.map((plan, index) => (
                          <Grid
                            item
                            container
                            key={index}
                            justify="center"
                            className={classes.planCard}
                          >
                            <Grid
                              container
                              direction="row"
                              justify="center"
                              alignItems="center"
                              className={classes.subPlanHeader}
                              style={{ backgroundColor }}
                            >
                              <Typography variant="h5" className={classes.typoStyle}>{ready && t(plan.type)}</Typography>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              className={classes.subContentWrapper}
                            >
                              <Grid xs={plan.ssl_certicates ? 6 : 12}>
                                <Typography variant="h5">{plan.domains}</Typography>
                                <Typography variant="subtitle2">
                                  {plan.ssl_certicates ? ready && t('DOMAINS') : ready && t('NEW_nTLDs')}
                                </Typography>
                              </Grid>
                              {
                                plan.ssl_certicates &&
                                <Grid xs={6}>
                                  <Typography variant="h5">
                                    {
                                      plan.ssl_certicates === 'UNLIMITED' ?
                                        '∞' : plan.ssl_certicates

                                    }
                                  </Typography>
                                  <Typography variant="subtitle2">{ready && t('SSL_CERTIFIC.')}</Typography>
                                </Grid>
                              }
                            </Grid>
                            <Grid className={classes.subPriceWrapper}>
                              <Typography variant="h5">{ready && t(plan.price)}</Typography>
                            </Grid>
                            <Grid className={classes.planActivateButton}>
                              <Button name={ready && t('ACTIVATE')} type={1} />
                            </Grid>
                          </Grid>
                        ))
                      }
                    </Grid>
                  </Grid>
                }
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Memberships.defaultProps = {
};

Memberships.propTypes = {
  classes: PropTypes.shape({
    portalDashboardPageWrapper: PropTypes.string,
    portalWidget: PropTypes.string,
    portalWidgetHeading: PropTypes.string,
    portalWidgetContent: PropTypes.string,
    planContainer: PropTypes.string
  }).isRequired
};

export default withStyles(styles, { withTheme: true })(Memberships);
