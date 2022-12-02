import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { LanguageType } from "../../types/Language";
import { selectLanguage, selectNativeLanguage } from "../Add/addLanguageSlice"

export const TranslateTable = () => {
  const { language } = useSelector(selectLanguage);
  const { isNative } = useSelector(selectNativeLanguage);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>No.</Typography>
            </TableCell>
            {language.map((item: LanguageType, index: number) => (
              <TableCell key={index}>
                <Typography>{item.name} {isNative.name === item.name ? '(Native)' : ''}</Typography>
              </TableCell>
            ))}
            <TableCell>
              <Typography>Action</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            language.map((item: LanguageType, index: number) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                {language.map((item: LanguageType, index: number) => (
                  <TableCell key={index}>
                    <Typography>{item.name}</Typography>
                  </TableCell>
                ))}
                <TableCell>{index + 1}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}