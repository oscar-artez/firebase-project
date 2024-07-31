import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
interface FormValues {
  email: string;
  password: string;
}

 export default function LoginForm (){
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const auth = getAuth();
  const router = useRouter();
  const [isError, setIsError] = useState(false)
  
  const onSubmit = (data: FormValues) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      router.push('/Profile')
    })
    .catch((error) => {
      setIsError(true)
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    console.log('Formulario enviado:', data);
  };

  return (
    <>
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h6" gutterBottom>
        Iniciar sesión
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
        Iniciar sesión
      </Button>
    </Box>
    {isError &&
    <Alert severity="error">Tus credenciales son incorrectas. Intentalo de nuevo</Alert>
    }
    </>
  );
};

