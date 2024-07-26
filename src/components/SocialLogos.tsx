import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Google, Twitter, GitHub, Facebook } from '@mui/icons-material';
import { styled } from '@mui/system';

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

export default function SocialLoginButtons (){
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Tooltip title="Iniciar sesión con Google">
        <CircleButton color="primary">
          <Google />
        </CircleButton>
      </Tooltip>
      <Tooltip title="Iniciar sesión con Twitter">
        <CircleButton color="info">
          <Twitter />
        </CircleButton>
      </Tooltip>
      <Tooltip title="Iniciar sesión con GitHub">
        <CircleButton color="default">
          <GitHub />
        </CircleButton>
      </Tooltip>
      <Tooltip title="Iniciar sesión con Facebook">
        <CircleButton color="primary">
          <Facebook />
        </CircleButton>
      </Tooltip>
    </div>
  );
};

