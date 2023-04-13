// ** Next Import
import Link from 'next/link';

// ** MUI Imports
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const LinkStyled = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.main
}));

const FooterContent = () => {
    // ** Var

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }}>
                {`© ${new Date().getFullYear()}, Made with `}
                <Box component='span' sx={{ color: 'error.main' }}>
                    ❤️
                </Box>
                {` by `}
                <LinkStyled target='_blank' href='#'>
                    Nova World
                </LinkStyled>
            </Typography>
        </Box>
    );
};

export default FooterContent;
