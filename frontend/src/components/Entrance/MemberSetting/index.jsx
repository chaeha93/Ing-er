import React from 'react';
import Wrapper from './styles';
import {
  Button,
  Grid,
  Container,
  TextField,
  makeStyles,
  withStyles,
  IconButton,
  Switch,
  FormControlLabel,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const textStyles = makeStyles((theme) => ({
  input: {
    color: 'white',
    fontFamily: 'regular',
    fontSize: '20px',
  },
}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
        color: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function MEMBERSETTING({
  isJoin,
  isAuth,
  name,
  setname,
  category,
  setCategory,
  isOpen,
  setisOpen,
  onUpdateInfo,
  onDuplicateHandler,
  onWithdrawalHandler,
}) {
  const [open, setOpen] = React.useState(false);
  const classes = textStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const categoryName = {
    4: '??????',
    5: '??????',
    6: '?????????',
    7: '??????',
    8: '??????',
  };

  const isOpenName = {
    true: '??????',
    false: '?????????',
  };

  return (
    <Wrapper>
      <Container
        className="all-container"
        style={{
          alignItems: 'center',
        }}
      >
        <Grid container direction="column" className="container">
          <Grid item xs={12}>
            <div
              className="title"
              style={{ fontSize: '36px', fontFamily: 'bold' }}
            >
              ?????? ?????? ??????
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              xs={12}
            >
              <Grid item xs={2}>
                <h1
                  style={{
                    fontFamily: 'bold',
                  }}
                >
                  ?????????
                </h1>
              </Grid>
              <Grid item xs={8}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item xs={1}>
                    <AccountCircle />
                  </Grid>
                  <Grid item xs={11}>
                    <CssTextField
                      className="name-input"
                      type="name"
                      value={name || ''}
                      InputProps={{
                        className: classes.input,
                      }}
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Button
                  className="duple"
                  variant="outlined"
                  onClick={onDuplicateHandler}
                >
                  ?????? ??????
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className="category-container">
            <Grid container direction="column">
              <Grid item xs={12}>
                <h1
                  style={{
                    fontFamily: 'bold',
                  }}
                >
                  ???????????? ??????
                </h1>
              </Grid>
              <Grid item xs={12}>
                <p
                  style={{
                    fontSize: '16px',
                    fontFamily: 'regular',
                  }}
                >
                  ?????? ???????????? : {categoryName[category]}
                </p>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                spacing={2}
                xs={12}
              >
                <Grid item xs={2}>
                  <Button
                    className="button"
                    value="4"
                    onClick={(e) => {
                      setCategory(e.currentTarget.value);
                    }}
                  >
                    ??????
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    className="button"
                    value="5"
                    onClick={(e) => {
                      setCategory(e.currentTarget.value);
                    }}
                  >
                    ??????
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    className="button"
                    value="6"
                    onClick={(e) => {
                      setCategory(e.currentTarget.value);
                    }}
                  >
                    ?????????
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    className="button"
                    value="7"
                    onClick={(e) => {
                      setCategory(e.currentTarget.value);
                    }}
                  >
                    ??????
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    className="button"
                    value="8"
                    onClick={(e) => {
                      setCategory(e.currentTarget.value);
                    }}
                  >
                    ??????
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              xs={12}
            >
              <Grid item xs={3}>
                <h1
                  style={{
                    fontFamily: 'bold',
                  }}
                >
                  ?????? ?????? ??????
                </h1>
              </Grid>
              <Grid item xs={7}></Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isOpen || ''}
                      onChange={(e) => {
                        setisOpen((isOpen) => !isOpen);
                      }}
                      style={{ color: '#E96F02' }}
                    />
                  }
                  labelPlacement="top"
                />
              </Grid>
            </Grid>
            <p
              style={{
                fontFamily: 'bold',
                fontSize: '16px',
              }}
            >
              ?????? ?????? ?????? ?????? : {isOpenName[isOpen]}
            </p>
          </Grid>
          {!isJoin && isAuth ? (
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                xs={12}
              >
                <Grid item xs={2}>
                  <h1
                    style={{
                      fontFamily: 'bold',
                    }}
                  >
                    ?????? ??????
                  </h1>
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={2}>
                  <Button
                    className="withdrawal"
                    variant="outlined"
                    onClick={handleClickOpen}
                  >
                    ????????????
                  </Button>
                  <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <DialogTitle
                      id="customized-dialog-title"
                      onClose={handleClose}
                      style={{
                        backgroundColor: '#292A33',
                        color: 'white',
                      }}
                    >
                      ?????? ??????
                    </DialogTitle>
                    <DialogContent
                      dividers
                      style={{
                        backgroundColor: '#292A33',
                        color: 'white',
                      }}
                    >
                      <Typography gutterBottom>
                        ???????????? ??? ??? ??? ???????????? ????????? ?????? ????????? ????????????,
                        <br></br>
                        ????????? ????????? ?????????.
                      </Typography>
                    </DialogContent>
                    <DialogActions
                      style={{
                        backgroundColor: '#292A33',
                        borderColor: 'white',
                      }}
                    >
                      <Button
                        autoFocus
                        onClick={onWithdrawalHandler}
                        style={{
                          color: '#CD0C22',
                        }}
                      >
                        ????????????
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <div></div>
          )}
          <Grid item xs={12}>
            <Grid container direction="row" justifyContent="center" spacing={2}>
              <Grid item>
                <IconButton className="check" onClick={onUpdateInfo}>
                  <HowToRegIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
export default MEMBERSETTING;
