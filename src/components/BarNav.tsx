'use client'
import {useState, ChangeEvent,MouseEvent} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import BasicModal from './ModalRegister';
import LoginModal from './ModalLogin';
import RegisterModal from './ModalRegister';

export default function MenuAppBar() {
  const [auth, setAuth] = useState(false);
  const [open,setOpen] = useState(false)
  const [onOpenRegister, setOpenRegister] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const handleOpenRegister = () => {
    setOpen(false);
    setOpenRegister(true);
  };
  const handleCloseModalRegister = () => setOpenRegister(false);


  return (
    <Box className="w-full">
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Firebase Project
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
         <Button size="medium" className='text-white font-semibold border-r-2 bg-slate-600' onClick={handleOpen}>Iniciar sesión</Button>
        </Toolbar>
        <LoginModal
            isOpen={open}
            onClose={handleCloseModal}
            onOpenRegister = {handleOpenRegister}
        />
        <RegisterModal
                    isOpen={onOpenRegister}
                    onClose={handleCloseModalRegister}
        
        />
      </AppBar>
    </Box>
  );
}