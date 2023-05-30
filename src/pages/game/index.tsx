// ** MUI Imports
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const GamePage = () => {
    // ** Hooks
    return (
        <Grid container spacing={6}>
            <Grid item md={12} xs={12}>
                <Card>
                    <CardHeader title='Home page' />
                    <CardContent>
                        <Typography sx={{ mb: 4 }}>List all menu game</Typography>
                        <Typography sx={{ color: 'primary.main' }}>
                            This card is visible to 'user' and 'admin' both
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default GamePage;
