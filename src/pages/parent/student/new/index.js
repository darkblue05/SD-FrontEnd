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
import useStudent from 'src/hooks/Student/useStudent'
import { useEffect } from 'react'
import { FormControl } from '@mui/material'
import * as yup from 'yup'
import { FormHelperText } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputLabel } from '@mui/material'
import { TextField } from '@mui/material'
import { OutlinedInput } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

const Class = () => {
  const schema = yup.object().shape({
    name: yup.string().required('Nombre es requerido'),
    lastname: yup.string().required('Código es requerido')
  })

  const defaultValues = {
    name: '',
    lastname: ''
  }

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })

  const { fetchAll, deleteOneStudent, store, createOneStudent } = useStudent()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} container>
        <Grid item xs={12} md={6} sx={{ px: 6 }}>
          <form noValidate autoComplete='off' onSubmit={handleSubmit(createOneStudent)}>
            <Box sx={{ my: 4, textAlign: 'center' }}>
              <Typography variant='h4'>Registrar Estudiante</Typography>
            </Box>
            <FormControl fullWidth sx={{ mb: 4, p: 2, background: 'white' }}>
              <Controller
                name='name'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    variant='standard'
                    autoFocus
                    label='Nombre'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.name)}
                    placeholder='Marco'
                    sx={{ background: 'white' }}
                  />
                )}
              />
              {errors.name && <FormHelperText sx={{ color: 'error.main' }}>{errors.name.message}</FormHelperText>}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 4, p: 2, background: 'white' }}>
              <Controller
                name='lastname'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    variant='standard'
                    autoFocus
                    label='Apellido'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.lastname)}
                    placeholder='Díaz'
                    sx={{ background: 'white' }}
                  />
                )}
              />
              {errors.lastname && (
                <FormHelperText sx={{ color: 'error.main' }}>{errors.lastname.message}</FormHelperText>
              )}
            </FormControl>

            <Box sx={{ m: 4, textAlign: 'center' }}>
              <Button type='submit' variant='contained'>
                Registrar
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Class
