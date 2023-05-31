// ** React Imports
import { MouseEvent, ReactNode, useEffect, useState } from 'react';

// ** Next Imports
import Link from 'next/link';

// ** MUI Components
import Alert from '@mui/material/Alert';
import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ** Icon Imports
import Icon from 'src/@core/components/icon';

// ** Third Party Imports
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

// ** Hooks
import useBgColor from 'src/@core/hooks/useBgColor';
import { useSettings } from 'src/@core/hooks/useSettings';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';

// ** Configs
import themeConfig from 'src/configs/themeConfig';

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout';
import Footer from 'src/views/pages/auth/Footer';

// ** Styled Components
const Login = styled('img')(({ theme }) => ({
    zIndex: 2,
    maxHeight: 680,
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down(1540)]: {
        maxHeight: 550
    },
    [theme.breakpoints.down('lg')]: {
        maxHeight: 500
    }
}));

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('md')]: {
        maxWidth: 450
    },
    [theme.breakpoints.up('lg')]: {
        maxWidth: 600
    },
    [theme.breakpoints.up('xl')]: {
        maxWidth: 750
    }
}));

const LinkStyled = styled(Link)(({ theme }) => ({
    fontSize: '0.875rem',
    textDecoration: 'none',
    color: theme.palette.primary.main
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
    '& .MuiFormControlLabel-label': {
        fontSize: '0.875rem',
        color: theme.palette.text.secondary
    }
}));

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).required()
});

const defaultValues = {
    email: 'admin@nova.com',
    password: 'admin'
};

interface FormData {
    email: string;
    password: string;
}
import { loginSelector, LoginValidate, asyncLogin, resetLoginState } from 'src/redux/slice/loginSlice';

const LoginPage = () => {
    const [rememberMe, setRememberMe] = useState<boolean>(true);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { error, loading, messages, success } = useAppSelector(loginSelector);

    // ** Hooks
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const hidden = useMediaQuery(theme.breakpoints.down('md'));

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues,
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        const { email, password } = data;

        dispatch(asyncLogin({ email, password }));
    };

    useEffect(() => {
        console.log(error, messages);

        if (error) {
            console.log(error);
            console.log(messages);

            // dispatch(resetLoginState());
        }
    }, [dispatch, error, messages]);

    const imageSource = 'auth-v2-login-illustration';

    return (
        <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
            {!hidden ? (
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        position: 'relative',
                        alignItems: 'center',
                        borderRadius: '20px',
                        justifyContent: 'center',
                        backgroundColor: 'customColors.bodyBg',
                        margin: theme => theme.spacing(8, 0, 8, 8)
                    }}
                >
                    <Login alt='login-illustration' src={`/images/pages/${imageSource}-${theme.palette.mode}.png`} />
                    <Footer />
                </Box>
            ) : null}
            <RightWrapper>
                <Box
                    sx={{
                        p: [6, 12],
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <svg
                            width={34}
                            height={23.375}
                            viewBox='0 0 32 22'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                fill={theme.palette.primary.main}
                                d='M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z'
                            />
                            <path
                                fill='#161616'
                                opacity={0.06}
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z'
                            />
                            <path
                                fill='#161616'
                                opacity={0.06}
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z'
                            />
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                fill={theme.palette.primary.main}
                                d='M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z'
                            />
                        </svg>
                        <Box sx={{ my: 6 }}>
                            <Typography sx={{ mb: 1.5, fontWeight: 500, fontSize: '1.625rem', lineHeight: 1.385 }}>
                                {`Welcome to ${themeConfig.templateName}! 👋🏻`}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                Please sign-in to your account and start the adventure
                            </Typography>
                        </Box>

                        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                            <FormControl fullWidth sx={{ mb: 4 }}>
                                <Controller
                                    name='email'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange, onBlur } }) => (
                                        <TextField
                                            autoFocus
                                            label='Email'
                                            value={value}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            error={Boolean(errors.email)}
                                            placeholder='admin@nova.com'
                                        />
                                    )}
                                />
                                {errors.email && (
                                    <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth sx={{ mb: 1.5 }}>
                                <InputLabel htmlFor='password' error={Boolean(errors.password)}>
                                    Password
                                </InputLabel>
                                <Controller
                                    name='password'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange, onBlur } }) => (
                                        <OutlinedInput
                                            value={value}
                                            onBlur={onBlur}
                                            label='Password'
                                            onChange={onChange}
                                            id='password'
                                            error={Boolean(errors.password)}
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        edge='end'
                                                        onMouseDown={e => e.preventDefault()}
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        <Icon
                                                            icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'}
                                                            fontSize={20}
                                                        />
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    )}
                                />
                                {errors.password && (
                                    <FormHelperText sx={{ color: 'error.main' }} id=''>
                                        {errors.password.message}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <Box
                                sx={{
                                    mb: 1.75,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <FormControlLabel
                                    label='Remember Me'
                                    control={
                                        <Checkbox
                                            checked={rememberMe}
                                            onChange={e => setRememberMe(e.target.checked)}
                                        />
                                    }
                                />
                                <LinkStyled href='/forgot-password'>Forgot Password?</LinkStyled>
                            </Box>
                            <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                                Login
                            </Button>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography sx={{ color: 'text.secondary', mr: 2 }}>New on our platform?</Typography>
                                <Typography variant='body2'>
                                    <LinkStyled href='/register' sx={{ fontSize: '1rem' }}>
                                        Create an account
                                    </LinkStyled>
                                </Typography>
                            </Box>
                            <Divider
                                sx={{
                                    fontSize: '0.875rem',
                                    color: 'text.disabled',
                                    '& .MuiDivider-wrapper': { px: 6 },
                                    my: theme => `${theme.spacing(6)} !important`
                                }}
                            >
                                or
                            </Divider>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <IconButton
                                    href='/'
                                    component={Link}
                                    sx={{ color: '#497ce2' }}
                                    onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                                >
                                    <Icon icon='mdi:facebook' />
                                </IconButton>
                                <IconButton
                                    href='/'
                                    component={Link}
                                    sx={{ color: '#1da1f2' }}
                                    onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                                >
                                    <Icon icon='mdi:twitter' />
                                </IconButton>
                                <IconButton
                                    href='/'
                                    component={Link}
                                    onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                                    sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
                                >
                                    <Icon icon='mdi:github' />
                                </IconButton>
                                <IconButton
                                    href='/'
                                    component={Link}
                                    sx={{ color: '#db4437' }}
                                    onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                                >
                                    <Icon icon='mdi:google' />
                                </IconButton>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </RightWrapper>
        </Box>
    );
};

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

LoginPage.guestGuard = true;

export default LoginPage;
