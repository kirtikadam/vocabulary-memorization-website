import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import { theme } from '../styles/AppTheme';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { AddLanguageModal } from './AddLanguageModal';
import { useSelector } from 'react-redux';
import { selectLanguage } from './addLanguageSlice';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const mark = {
  display: 'inline-block',
  background: theme.palette.primary.light,
  padding: '5px',
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.common.black,
}

export const AddLanguage = () => {
  const [showModal, setShowModal] = useState(false);
  const { language } = useSelector(selectLanguage);
  console.log("language = ", language)

  const handleAddLanguage = () => {
    setShowModal(true);
  }
  return (
    <div>
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column" sx={{ backgroundColor: "grey.100" }}>
        <Paper
          elevation={3}
          sx={{
            padding: "2rem", minWidth: "60%", display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', backgroundColor: "secondary"
          }}
        >
          <Typography mb={1.5} color="common.black" variant="h5">
            Add & Select Language
          </Typography>
          <Typography color="grey.600">
            Add languages which you know {" "}
            <Typography variant="body2" sx={{ ...mark }}>(Min 2)</Typography>{" "}
            and{" "}
            <Typography variant="body2" sx={{ ...mark }}>(Max 4)</Typography>{" "}
            and select which is your native.
          </Typography>
          <Box display="flex"
            justifyContent="center"
            alignItems="center" gap="15px" mt={2} mb={2}>
            <List>
              {language.length ? (
                language.map((item: string, index: number) => {
                  return (
                    <ListItem disablePadding key={index}>
                      <ListItemButton alignItems="center">
                        {/* className="hidden" */}
                        <ListItemIcon sx={{ pr: '10px', minWidth: 'auto' }}>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItemButton>
                    </ListItem>
                  )
                })
              ) : (
                null
              )}
            </List>
            {language.length === 4 ? (null) : (
              <Button variant="outlined" size="large" sx={{
                p: '0.5rem 1rem',
                textTransform: 'capitalize',
              }}
                startIcon={<AddIcon />} onClick={handleAddLanguage}>
                Add Language
              </Button>
            )}
          </Box>
          <Button variant="contained" size="large" sx={{
            m: '10px 0', textTransform: 'capitalize',
          }} disabled={!(language.length >= 2)}>
            Let's make list of vocabulary
          </Button>
        </Paper>
      </Box>
      {showModal ? <AddLanguageModal showModal={showModal} handleClose={() => setShowModal(false)} /> : null}
    </div>
  )
}