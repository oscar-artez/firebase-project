// src/components/RegisterForm.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';

interface FormValues {
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Formulario enviado:', data);
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Registrarse
      </Button>
    </Box>
  );
};

export default RegisterForm;
