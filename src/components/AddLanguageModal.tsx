import { Button, Dialog, Slide, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { forwardRef, useState } from "react";
import { TransitionProps } from '@mui/material/transitions';
import { handleLanguage } from "./addLanguageSlice";
import { useDispatch } from "react-redux";

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

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  }

  const handleClick = () => {
    dispatch(handleLanguage(value));
    handleClose();
  }

  return (
    <Dialog
      fullScreen
      open={showModal}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Box height="100vh"
        display="flex"
        justifyContent="start"
        alignItems="center"
        flexDirection="column" sx={{ pt: '8rem' }}>
        <Typography variant="h4" mt={2} mb={3}>Add New Language</Typography>
        <TextField id="language" name="language" sx={{ mb: '16px' }}
          label="Language Name" variant="standard" onChange={handleTextChange} />
        <Button variant="contained" size="large" sx={{
          m: '10px 0', textTransform: 'capitalize',
        }} onClick={handleClick}>
          I know this language
        </Button>
      </Box>
    </Dialog >
  )
}