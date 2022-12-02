import { Button, Dialog, IconButton, Slide, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { forwardRef, useState } from "react";
import { TransitionProps } from '@mui/material/transitions';
import { handleLanguage } from "./addLanguageSlice";
import { useDispatch } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IAddLanguageModal {
  showModal: boolean,
  handleClose: any,
}

export const AddLanguageModal = ({ showModal, handleClose }: IAddLanguageModal) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  }

  const handleClick = () => {
    if (value) {
      dispatch(handleLanguage({ name: value, nativeLanguage: false }));
      handleClose();
    } else {
      setError(true);
    }
  }

  return (
    <Dialog
      fullScreen
      open={showModal}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          color: (theme) => theme.palette.primary.main,
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box height="100vh"
        display="flex"
        justifyContent="start"
        alignItems="center"
        flexDirection="column" sx={{ pt: '8rem' }}>
        <Typography variant="h4" mt={2} mb={3}>Add New Language</Typography>
        <TextField error={error} id="language" name="language" sx={{ mb: '16px' }}
          label="Language Name" variant="standard" onChange={handleTextChange}
          helperText={error ? 'This field is required.' : ''} />
        <Button variant="contained" size="large" sx={{
          m: '10px 0', textTransform: 'capitalize',
        }} onClick={handleClick}>
          I know this language
        </Button>
      </Box>
    </Dialog >
  )
}