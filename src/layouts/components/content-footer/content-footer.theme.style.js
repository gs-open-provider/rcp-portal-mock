const styles = theme => ({
  coloredIcon: {
    color: theme.palette.secondary.main,
    padding: '0px 10px'
  },
  ownerLink: {
    color: 'black',
    textDecoration: 'none'
  },
  rightsTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10
  },
  linkItem: {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'rgb(29, 170, 241)',
    fontWeight: 500
  },
  linkContainerLarge: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  linkContainerSmall: {
    marginBottom: 10
  }
});

export default styles;
