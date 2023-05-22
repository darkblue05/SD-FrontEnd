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
    code: yup.string().required('Código es requerido'),
    school: yup.string().required('Escuela es requerida'),
    state: yup.string().required('Estado es requerido'),
    town: yup.string().required('Ciudad es requerida'),
    grade: yup.string().required('Grado es requerido'),
    group: yup.string().required('Grupo es requerido')
  })

  const defaultValues = {
    name: '',
    code: '',
    town: '',
    state: '',
    school: '',
    grade: '',
    group: ''
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

  const { fetchAll, deleteOneClass, store, createOneClass } = useClass()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} container>
        <Grid item xs={12} md={6} sx={{ px: 6 }}>
          <form noValidate autoComplete='off' onSubmit={handleSubmit(createOneClass)}>
            <Box sx={{ my: 4, textAlign: 'center' }}>
              <Typography variant='h4'>Registrar Clase</Typography>
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
                    label='Nombre de la clase'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.name)}
                    placeholder='Español I'
                    sx={{ background: 'white' }}
                  />
                )}
              />
              {errors.name && <FormHelperText sx={{ color: 'error.main' }}>{errors.name.message}</FormHelperText>}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 4, p: 2, background: 'white' }}>
              <Controller
                name='code'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    variant='standard'
                    autoFocus
                    label='Código de la clase'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.code)}
                    placeholder='XXXXX'
                    sx={{ background: 'white' }}
                  />
                )}
              />
              {errors.code && <FormHelperText sx={{ color: 'error.main' }}>{errors.code.message}</FormHelperText>}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 4, p: 2, background: 'white' }}>
              <Controller
                name='grade'
                control={control}
                rules={{ required: false }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    variant='standard'
                    autoFocus
                    label='Grado'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder='X'
                    sx={{ background: 'white' }}
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 4, p: 2, background: 'white' }}>
              <Controller
                name='group'
                control={control}
                rules={{ required: false }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    variant='standard'
                    autoFocus
                    label='Grupo'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder='X'
                    sx={{ background: 'white' }}
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 4, p: 2, background: 'white' }}>
              <Controller
                name='school'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    variant='standard'
                    autoFocus
                    label='Escuela'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.school)}
                    placeholder='Nombre de la escuela'
                    sx={{ background: 'white' }}
                  />
                )}
              />
              {errors.school && <FormHelperText sx={{ color: 'error.main' }}>{errors.school.message}</FormHelperText>}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 4, p: 2, background: 'white' }}>
              <Controller
                name='state'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    variant='standard'
                    autoFocus
                    label='Estado'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.state)}
                    placeholder='Estado'
                    sx={{ background: 'white' }}
                  />
                )}
              />
              {errors.state && <FormHelperText sx={{ color: 'error.main' }}>{errors.state.message}</FormHelperText>}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 4, p: 2, background: 'white' }}>
              <Controller
                name='town'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    variant='standard'
                    autoFocus
                    label='Ciudad'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.town)}
                    placeholder='Ciudad'
                    sx={{ background: 'white' }}
                  />
                )}
              />
              {errors.town && <FormHelperText sx={{ color: 'error.main' }}>{errors.town.message}</FormHelperText>}
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
