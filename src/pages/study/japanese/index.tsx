// ** React Imports
import { useContext } from 'react';

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can';

// ** MUI Imports
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const Japanese = () => {
    // ** Hooks

    return (
        <Grid container spacing={6}>
            <Grid item md={6} xs={12}>
                <Card>
                    <CardHeader title='Common' />
                    <CardContent>
                        <Typography sx={{ mb: 4 }}>No ability is required to view this card</Typography>
                        <Typography sx={{ color: 'primary.main' }}>
                            This card is visible to 'user' and 'admin' both
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Japanese;
