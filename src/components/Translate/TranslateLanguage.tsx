import { Box, Button, List, ListItem, Paper, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { theme } from '../../styles/AppTheme';
import { LanguageType } from '../../types/Language';
import { selectLanguage, selectNativeLanguage } from '../Add/addLanguageSlice';
import { TranslateTable } from './TranslateTable';

const mark = {
  display: 'inline-block',
  background: theme.palette.primary.light,
  padding: '5px',
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.common.black,
}

export const TranslateLanguage = () => {
  const { isNative } = useSelector(selectNativeLanguage);
  const { language } = useSelector(selectLanguage);
  console.log("language = ", language)
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
            Make Volcabulary with Translation
          </Typography>
          <Typography color="grey.600">
            Add{" "}
            <Typography variant="body2" sx={{ ...mark }}>(Min 5)</Typography>{" "}
            word of your native language <strong>{isNative.name.toUpperCase()}</strong> and Translate it into others.
          </Typography>
          <Box display="flex"
            justifyContent="center"
            alignItems="center" gap="15px" mt={2} mb={2}>
            <List>
              {

                language.map((item: LanguageType, index: number) => {
                  let languageName = isNative.name === item.name ? `${item.name} (Native)` : `In ${item.name}`
                  let name = 'word' + index;
                  return (
                    <ListItem disablePadding key={index} className='textList'>
                      <TextField className="textField" name={name} size="small" id="outlined-basic" label={languageName} variant="outlined" InputLabelProps={{ shrink: true, }} />
                    </ListItem>
                  )
                })
              }
            </List>
          </Box>
          <TranslateTable />
          <Button variant="contained" size="large" sx={{
            m: '10px 0', textTransform: 'capitalize',
          }} disabled>
            Start Test
          </Button>
        </Paper>
      </Box>
    </div>
  )
}