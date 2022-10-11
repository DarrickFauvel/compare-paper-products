import { AppBar, Container, Typography } from '@mui/material'
import Form from './features/Form'

function App() {
  return (
    <div className='App'>
      <AppBar position='relative' sx={{ mb: '2rem', p: '.5rem' }}>
        <Typography variant='h5' align='center'>
          Compare Paper Products
        </Typography>
      </AppBar>
      <Container component='main' maxWidth='xs'>
        <Form />
      </Container>
    </div>
  )
}

export default App
