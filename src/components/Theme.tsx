'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  components: {
    MuiPopover: {
      defaultProps: {
        container: document.body
      }
    },
    MuiPopper: {
      defaultProps: {
        container: document.body
      }
    },
    MuiModal: {
      defaultProps: {
        container: document.body
      }
    }
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
