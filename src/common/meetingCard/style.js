const style = {

  card: {
    maxWidth: 345,
    backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCnrAvtDMYbdQ2iYqIVOUzQ-y59fPSrMtdQ&usqp=CAU'})`,
    backgroundSize: 'cover',
    borderRadius: 7,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  box: {
    color: 'white',
    display: 'flex',
    justifyContent: 'inherit',
    margin: 2,
  },

  title: {
    bgcolor: 'teal',
    color: 'white',
    letterSpacing: 1,
    borderRadius: 5,
    fontWeight: 600,
    margin: 'auto',
    padding: '0 1rem',
  },

  cardcontent: {
    bgcolor: 'whitesmoke',
    borderRadius: 7,
    margin: 2,
  },
};

export default style;
