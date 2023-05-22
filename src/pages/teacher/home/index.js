// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Button } from '@mui/material'
import OptionsMenu from 'src/@core/components/option-menu'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <Grid container spacing={8} sx={{ textAlign: 'center', minHeight: 300, alignItems: 'center' }}>
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                onClick={() => {
                  router.push('/teacher/class')
                }}
              >
                Mis Clases
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
