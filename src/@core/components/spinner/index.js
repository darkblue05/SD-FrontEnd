// ** MUI Imports
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'

const LoginImage = styled('img')(({ theme }) => ({
  zIndex: 2,
  height: 150,
  marginLeft: -10,
  marginTop: 20,
  marginBottom: 20
}))

const FallbackSpinner = ({ sx }) => {
  // ** Hook
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      <LoginImage src='/images/favicon.png' />
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

export default FallbackSpinner
