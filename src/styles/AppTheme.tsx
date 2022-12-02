import { createTheme } from '@mui/material/styles';
// import createPalette from '@mui/material/styles/createPalette';

// const COLORS = {
//   lighterPrimary: '#fdf7e1',
// }
// const customPalette = createPalette({
//   common: COLORS,
// });

export const theme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#333333',
    },
    primary: {
      main: '#e96e19',
      light: '#fbf8e2', //#ed8b47',
      dark: '#a34d11',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#e96e19',
    },
    grey: {
      100: '#f4f4f8',
      600: '#888888',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderWidth: '2px',
          "&:hover": {
            borderWidth: '2px',
          },
          "&:disabled": {
            backgroundColor: '#ed8b47',
            color: '#fff',
            cursor: 'disabled',
          },
        }
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body2: 'span',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(10px)',
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          display: 'flex',
          gap: '16px',
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          border: '2px solid rgba(0,0,0,0.1)',
          background: 'rgba(243, 244, 248, 0.65)',
          borderRadius: '4px',
          padding: 0,
          minWidth: '100px',
          '&.selected': {
            borderColor: '#e96e19',
            background: '#fff',
          },
          '&.textList': {
            border: 0,
            background: '#fff',
            width: '200px',
            '& label': {
              background: '#fff',
            }
          }
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexWrap: 'nowrap',
          textAlign: 'center',
          '&:hover': {
            background: '#fff',
            '& .hidden': {
              display: 'flex',
            },
          },
          '& .hidden': {
            display: 'none',
          },
          '& .selected svg': {
            fill: '#e96e19'
          }
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          '&.hidden': {
            position: 'absolute',
            left: '-13px',
            borderRadius: '16px',
            backgroundColor: '#fff',
          },
          '&.selected': {
            position: 'absolute',
            left: '-13px',
            borderRadius: '16px',
            backgroundColor: '#fff',
          },
        }

      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& input': {
            borderRadius: '4px',
            border: '2px solid #e96e19'
          }
        }
      }
    },
  }
});
