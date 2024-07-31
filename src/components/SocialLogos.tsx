import React, { useState } from 'react';
import { Alert, Box, IconButton, Tooltip } from '@mui/material';
import { Google, Twitter, GitHub, Facebook } from '@mui/icons-material';
import { styled } from '@mui/system';
import { GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '../app/firebase/client'
import { handleSignInWithProvider } from '@/lib/authUtils';


const CircleButton = styled(IconButton)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '50%',
  padding: 0,
  margin: theme.spacing(1),
  '& svg': {
    fontSize: 28,
  },
}));


const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export default function SocialLoginButtons (){

  const [isEnabled, setIsEnabled] = useState(false)
  const handleSignInGoogle = async () => {
    setIsEnabled(false)
    try {
     await handleSignInWithProvider(auth, googleProvider)
      // TODO: Necesito implementar la redirección del usuario a la plataforma
    } catch (error) {
      console.error('Error al autenticar:', error);
      setIsEnabled(true)
    }
  };
  
  const handleSignInFacebook = async () => {
    setIsEnabled(false)
    try {
        await handleSignInWithProvider(auth, facebookProvider);

      // TODO: Necesito implementar la redirección del usuario a la plataforma
    } catch (error) {
      console.error('Error al autenticar:', error);
      setIsEnabled(true)

    }
  };
  
  const handleSignInTwitter = async () => {
    setIsEnabled(false)
    try {
      await handleSignInWithProvider(auth, twitterProvider);

      console.log("--->",auth)
      // TODO: Necesito implementar la redirección del usuario a la plataforma
    } catch (error) {
      console.error('Error al autenticar:', error);
      
      setIsEnabled(true)

    }
  };
  
  const handleSignInGitHub = async () => {
    setIsEnabled(false)
    try {
      const result = await signInWithPopup(auth, githubProvider)
      // const credential = GithubAuthProvider.credentialFromResult(result);
      // console.log("--->", credential)
      return result;
    } catch (error) {
      console.error('Error durante la autenticación:', error);
      setIsEnabled(true)
    }
    // signInWithPopup(auth, githubProvider)
  
      // .then((result) => {
      //   // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      //   // The signed-in user info.
      //   const user = result.user;
      //   // IdP data available using getAdditionalUserInfo(result)
      //   // ...
      // }).catch((error) => {
      //   // Handle Errors here.
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // The email of the user's account used.
      //   const email = error.customData.email;
      //   // The AuthCredential type that was used.
      //   const credential = GithubAuthProvider.credentialFromError(error);
      //   // ...
      // });
  };

  return (
    <>
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Tooltip title="Iniciar sesión con Google">
        <CircleButton color="primary" onClick={handleSignInGoogle}>
          <Google />
        </CircleButton>
      </Tooltip>
      <Tooltip title="Iniciar sesión con Twitter" onClick={handleSignInTwitter}>
        <CircleButton color="info">
          <Twitter />
        </CircleButton>
      </Tooltip>
      <Tooltip title="Iniciar sesión con GitHub" onClick={handleSignInGitHub}>
        <CircleButton color="default">
          <GitHub />
        </CircleButton>
      </Tooltip>
      <Tooltip title="Iniciar sesión con Facebook" onClick={handleSignInFacebook}>
        <CircleButton color="primary">
          <Facebook />
        </CircleButton>
      </Tooltip>
      </Box>
      {isEnabled && 

      <Alert severity="info">Por el momento no puedes iniciar sesión con este servicio</Alert>
      }
    </>

  );
};

