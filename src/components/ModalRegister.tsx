import { Dialog, DialogContent} from '@mui/material';
import SocialLoginButtons from './SocialLogos';
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

