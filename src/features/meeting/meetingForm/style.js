const style = {

  form: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'whitesmoke',
    border: '1px solid white',
    borderRadius: 7,
    boxShadow: 24,
    p: 4,
    margin: 'auto',
    '@media (max-width:780px)': {
      width: '70%',
      height: '70%',
    },
  },

  header: {
    textAlign: 'center',
    p: 2,
    fontSize: '1.5rem',
    fontWeight: 600,
    letterSpacing: '1px',
    '@media (max-width:780px)': {
      padding: 0,
      fontSize: '1.2rem',
    },
    '@media (max-width:440px)': {
      fontSize: '1rem',
    },
  },

  btn: {
    display: 'flex',
    margin: 'auto',
    bgcolor: 'teal',
    width: '100%',
    '@media (max-width:440px)': {
      fontSize: '0.8rem',
    },
  },

  meetingBtn: {
    fontsize: '1rem',
    padding: '0.5rem 6rem',
    fontWeight: 600,
    letterSpacing: '1px',
    marginTop: '3rem',
  },
};

export default style;
