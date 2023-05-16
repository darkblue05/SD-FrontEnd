// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import OptionsMenu from 'src/@core/components/option-menu'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { IconButton } from '@mui/material'
const columns = [
  { field: 'code', headerName: 'Código', flex: 0.1 },
  {
    field: 'name',
    headerName: 'nombre',
    flex: 0.15
  },
  {
    field: 'actions',
    headerName: 'Acciones',
    flex: 0.05,
    minWidth: 70,
    renderCell: row => {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <OptionsMenu
            options={[
              {
                icon: (
                  <IconButton color='primary' aria-label='upload picture' component='label'>
                    <Icon icon={'mdi:calendar-check'} />
                  </IconButton>
                ),
                text: 'Pasar Lista'
              },
              {
                icon: (
                  <IconButton color='primary' aria-label='upload picture' component='label'>
                    <Icon icon={'heroicons:wrench-screwdriver-solid'} />
                  </IconButton>
                ),
                text: 'Detalles'
              },
              {
                icon: (
                  <IconButton color='primary' aria-label='upload picture' component='label'>
                    <Icon icon={'bi:trash-fill'} />
                  </IconButton>
                ),
                text: 'Eliminar'
              }
            ]}
          />
        </Box>
      )
    }
  }
]
const rows = [{ code: 'dkad', name: 'español', id: 1 }]

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card sx={{ minHeight: 300 }}>
          <CardHeader title='Mis Clases'></CardHeader>
          <CardContent>
            <DataGrid sx={{ minHeight: 300 }} rowHeight={50} rows={rows} columns={columns} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
