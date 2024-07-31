'use client'
import { useUser } from '../context/UserContext';
import { Button, Typography, Box } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/client';

export default function Profile() {
  const { user, loading } = useUser();

  if (loading) return <Typography>Loading...</Typography>;

  if (!user) return <Typography>No estás autenticado</Typography>;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <Box>
      <Typography variant="h6">Bienvenido, {user.displayName}</Typography>
      <Button onClick={handleSignOut} variant="contained" color="secondary">
        Cerrar sesión
      </Button>
    </Box>
  );
}
