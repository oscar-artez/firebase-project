import { Dialog, DialogContent,Typography} from '@mui/material';
import SocialLoginButtons from './SocialLogos';
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