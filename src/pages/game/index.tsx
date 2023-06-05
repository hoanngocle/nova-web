// ** MUI Imports
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

// ** Demo Components Imports
import CardUser from 'src/views/ui/cards/basic/CardUser';
import CardImgTop from 'src/views/ui/cards/basic/CardImgTop';
import CardMobile from 'src/views/ui/cards/basic/CardMobile';
import CardSupport from 'src/views/ui/cards/basic/CardSupport';
import CardTwitter from 'src/views/ui/cards/basic/CardTwitter';
import CardFacebook from 'src/views/ui/cards/basic/CardFacebook';
import CardLinkedIn from 'src/views/ui/cards/basic/CardLinkedIn';
import CardAppleWatch from 'src/views/ui/cards/basic/CardAppleWatch';
import CardMembership from 'src/views/ui/cards/basic/CardMembership';
import CardInfluencer from 'src/views/ui/cards/basic/CardInfluencer';
import CardNavigation from 'src/views/ui/cards/basic/CardNavigation';
import CardWithCollapse from 'src/views/ui/cards/basic/CardWithCollapse';
import CardVerticalRatings from 'src/views/ui/cards/basic/CardVerticalRatings';
import CardNavigationCenter from 'src/views/ui/cards/basic/CardNavigationCenter';
import CardHorizontalRatings from 'src/views/ui/cards/basic/CardHorizontalRatings';

const GamePage = () => {
    // ** Hooks
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} sx={{ pb: 4 }}>
                <Typography variant='h5'>Basic Cards</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CardUser />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
                <CardImgTop />
            </Grid>
            <Grid item xs={12} sm={6}>
                <CardImgTop />
            </Grid>
            <Grid item xs={12} sm={6}>
                <CardImgTop />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CardImgTop />
            </Grid>
            <Grid item xs={12} md={8}>
                <CardImgTop />
            </Grid>
        </Grid>
    );
};

export default GamePage;
