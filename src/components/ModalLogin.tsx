import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button, Grid, IconButton, Typography, TextField, Box } from '@mui/material';
import { styled } from '@mui/system';
import SocialLoginButtons from './SocialLogos';
import { Form } from 'react-hook-form';
import LoginForm from './LoginForm';

type Props = {
    isOpen: boolean
    onClose: () => void
    onOpenRegister:() => void
}

export default function LoginModal({ isOpen, onClose, onOpenRegister}:Props) {


  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="xs">
      <DialogContent>
        <LoginForm/>
        <SocialLoginButtons/>
        <Typography className='text-center' sx={{
            cursor: 'pointer',
        }} onClick={onOpenRegister}>¿No tienes cuenta aún? Registrate</Typography>
      </DialogContent>
    </Dialog>
  );
}