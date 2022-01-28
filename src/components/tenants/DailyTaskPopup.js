import * as React from 'react';
import {useContext , useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import AddIcon from '@mui/icons-material/Add';
import AssignmentIcon from '@mui/icons-material/Assignment';

// global variable
import AppContext from '../../AppContext';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({children}) {

 const { currentTab, setCurrentTab, action, setAction, content, setContent, dialogClose, setDialogClose} = useContext(AppContext);
  const [open, setOpen] = React.useState(false);

  useEffect(()=>{

  if(action == "dailyTask"){
    if(dialogClose == true){
      setOpen(true)
    }else if(dialogClose == false){
      setOpen(false)
    }
  }
    

  },[dialogClose])

  const handleClickOpen = () => {
    setAction("dailyTask");
    setDialogClose(true);
    setOpen(true);
  };
  const handleClose = () => {
    setAction("");
    setDialogClose(false);
    setOpen(false);
  };

  return (
    <div>
       {currentTab === "allergy"?
       <BootstrapButton startIcon={<AssignmentIcon />} variant="contained" id="actionBtn2"onClick={handleClickOpen}>
      New
      </BootstrapButton>
       :<BootstrapButton startIcon={<AssignmentIcon />} variant="contained" id="actionBtn"onClick={handleClickOpen}>
       Daily Task
      </BootstrapButton>}
       
     
      <BootstrapDialog
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
      {currentTab === "allergy" ?
       <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         Add New Allergy
        </BootstrapDialogTitle>
      : <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Daily Task
        </BootstrapDialogTitle>}
        
      
   
        
        <DialogContent dividers>
          {children}
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
