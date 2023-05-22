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
import useClass from 'src/hooks/Class/useClass'
import { useEffect } from 'react'

const Class = () => {
  const { fetchAll, deleteOneClass, store, router } = useClass()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box sx={{ minHeight: 300, textAlign: 'center' }}>
          <Typography variant='h4'>Mis Clases</Typography>
          <Card sx={{ my: 6 }}>
            <DataGrid
              sx={{ minHeight: 300, maxHeight: 500 }}
              rowHeight={50}
              rows={store.rows}
              rowCount={store.count}
              columns={[
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
                  minWidth: 130,
                  renderCell: ({ row }) => {
                    return (
                      <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                        <IconButton color='primary' aria-label='upload picture' component='label' sx={{ mr: 3 }}>
                          <Icon icon={'mdi:calendar-check'} />
                        </IconButton>
                        <OptionsMenu
                          options={[
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
                                <IconButton
                                  color='primary'
                                  aria-label='upload picture'
                                  onClick={() => {
                                    deleteOneClass(row.id)
                                    fetchAll()
                                  }}
                                  component='label'
                                >
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
              ]}
            />
          </Card>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Button
              onClick={() => {
                router.push('/teacher/class/new')
              }}
              variant='contained'
            >
              Agregar Clase
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Class
