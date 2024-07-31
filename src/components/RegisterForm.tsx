import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';
import {auth} from '../app/firebase/client'
import { createUserWithEmailAndPassword } from 'firebase/auth';
interface FormValues {
  email: string;
  password: string;
}

export default function RegisterForm(){
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log('Usuario registrado:', userCredential.user);
    // TODO: Necesito implementar la redirección del usuario al inicio  de sesión o a la plataforma.
  } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };


  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)} // Maneja el envío del formulario
    >
      <Typography variant="h6" gutterBottom>
        Registro de Usuario
      </Typography>
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'El correo electrónico es obligatorio',
          pattern: {
            value: /^[^@]+@[^@]+\.[^@]+$/,
            message: 'El correo electrónico no es válido',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: 'La contraseña es obligatoria',
          minLength: {
            value: 6,
            message: 'La contraseña debe tener al menos 6 caracteres',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        )}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth >
        Registrarse
      </Button>
    </Box>
  );
};

