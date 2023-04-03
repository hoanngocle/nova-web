// ** React Imports
import { ReactNode } from 'react'

// ** MUI Components
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrations from 'src/views/pages/misc/FooterIllustrations'

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(20)
  }
}))

const ComingSoon = () => {
  return (
    <Box className='content-center'>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <BoxWrapper>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant='h4' sx={{ mb: 1.5 }}>
              We are launching soon
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              We're creating something awesome. Please subscribe to get notified when it's ready!
            </Typography>
          </Box>
          <Box
            noValidate
            component='form'
            autoComplete='off'
            onSubmit={e => e.preventDefault()}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <TextField
              autoFocus
              size='small'
              type='email'
              placeholder='Enter your email'
              sx={{
                '& .MuiInputBase-input': { py: 1.875 },
                '& .MuiInputBase-root': {
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  backgroundColor: 'background.paper'
                }
              }}
            />
            <Button type='submit' variant='contained' sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
              Notify
            </Button>
          </Box>
        </BoxWrapper>
        <Img height='500' alt='coming-soon-illustration' src='/images/pages/misc-coming-soon.png' />
      </Box>
      <FooterIllustrations />
    </Box>
  )
}

ComingSoon.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default ComingSoon
