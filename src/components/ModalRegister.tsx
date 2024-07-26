import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button, Grid, IconButton, Typography, TextField, Box } from '@mui/material';
import { styled } from '@mui/system';
import SocialLoginButtons from './SocialLogos';
import { Form } from 'react-hook-form';
import RegisterForm from './RegisterForm';

type Props = {
    isOpen: boolean
    onClose: () => void
}

export default function RegisterModal({ isOpen, onClose}:Props) {
  return (
    <Dialog  open={isOpen} onClose={onClose} fullWidth maxWidth="xs">
      <DialogContent>
        <RegisterForm/>
        <SocialLoginButtons/>
      </DialogContent>
    </Dialog>
  );
}

