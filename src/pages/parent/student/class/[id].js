// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Button } from '@mui/material'
import OptionsMenu from 'src/@core/components/option-menu'
import { TextField } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { IconButton } from '@mui/material'
import useClass from 'src/hooks/Student/useClass'

import { useEffect, useState } from 'react'

const Class = () => {
  const { fetchAll, deleteOneClass, store, router, createOneClass } = useClass()
  const [code, setCode] = useState('')

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
                  renderCell: row => {
                    return (
                      <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                        <IconButton color='primary' aria-label='upload picture' component='label' sx={{ mr: 3 }}>
                          <Icon icon={'mdi:bell'} /> <Typography>Notificaciones</Typography>
                        </IconButton>
                      </Box>
                    )
                  }
                }
              ]}
            />
          </Card>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Grid container spacing={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Grid item xs={4} sx={{ background: 'white', p: 2, m: 2 }}>
                <TextField
                  variant='standard'
                  value={code}
                  onChange={e => {
                    setCode(e.target.value)
                  }}
                  label={'Código de Clase'}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={() => {
                    createOneClass({ code })
                  }}
                  variant='contained'
                >
                  Agregar Clase
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Class
