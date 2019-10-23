const styles = theme => ({
  portalDashboardPageWrapper: {
    padding: 16,
    minHeight: '100%',
    boxSizing: 'border-box'
  },
  portalWidget: {
    flex: '1 1 100%',
    display: 'flex',
    flexDirection: 'column'
  },
  portalWidgetHeading: {
    textTransform: 'uppercase',
    paddingLeft: 12,
    borderLeftWidth: 2,
    borderLeftStyle: 'solid',
    marginTop: 16,
    marginBottom: 16,
    '&:after': {
      content: '""',
      width: 2,
      height: '0%',
      position: 'absolute',
      bottom: 0,
      left: -2,
      transition: 'height .5s'
    }
  },
  portalWidgetContent: {
    flex: '1 1 100%',
    padding: theme.spacing(2)
  },
  planContainer: {
    marginTop: '20px',
    border: '1px solid gray',
    borderRadius: '10px',
    padding: theme.spacing(2),
    margin: theme.spacing(1)
  },
  desc: {
    height: '200px',
    marginLeft: '20px',
    marginRight: '20px',
    // overflow: 'hidden',
    // 'word-break': 'break-all'
    whiteSpace: 'unset'
  },
  mainDesc: {
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '10px'
  },
  card: {
    border: '0px solid transparent',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    margin: '10px',
    width: '18%',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      cursor: 'pointer'
    },
    borderRadius: '5px',
    textAlign: 'center'
  },
  cardHeader: {
    width: '100%',
    height: '70px',
    color: '#fff',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  planValue: {
    marginTop: '10px',
    marginBottom: '10px'
  },
  planView: {
    marginBottom: '20px'
  },
  typoStyle: {
    fontWeight: 'bold'
  },
  detailView: {
    border: '1px solid #f3f3f3',
    borderRadius: '10px',
    backgroundColor: '#f3f3f3',
    padding: theme.spacing(1),
    margin: theme.spacing(3)
  },
  planCard: {
    position: 'relative',
    margin: '5px',
    marginRight: '20px',
    width: '20%',
    height: '350px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    textAlign: 'center'
  },
  planActivateButton: {
    position: 'absolute',
    bottom: 10
  },
  subPlanHeader: {
    position: 'absolute',
    width: '100%',
    height: '70px',
    color: '#fff',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  subContentWrapper: {
    position: 'absolute',
    top: '33%'
    // margin: '10px'
  },
  subPriceWrapper: {
    position: 'absolute',
    top: '65%'
  }
});

export default styles;
