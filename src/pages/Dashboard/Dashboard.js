import { Avatar,Box, Container, Stack, Typography, Divider } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EcosystemBox from "./EcosystemBox";
import TotalLockedBox from "./TotalLockedBox";
import StakeBox from "./StakeBox";
import EarnBox from './EarnBox';
import USTImage from '../../assets/images/UST.png';
import LUNAImage from '../../assets/images/LUNA.png';

const rows = [
    {
        image: USTImage,
        title: 'UST',
        percent: '34.87',
        date: 'March 16, 2022',
    },
    {
        image: LUNAImage,
        title: 'LUNA',
        percent: '34.87',
        date: 'March 16, 2022',
    },
    
]

const Dashboard = () => {
    return (
        <Box pt={20}>
            <Container maxWidth="xl">
                <Stack flexDirection="row" justifyContent="space-between" alignItems="flex-end" pb={7.5}>
                    <Stack flexDirection="row" alignItems="flex-end" gap={2}>
                        <Typography variant="div" 
                            color="#FFFFFF"
                            fontFamily={'SF Pro'}
                            fontSize={40}
                            fontWeight={860}
                            lineHeight={.8}
                            textTransform="uppercase"
                        >Dashboard</Typography>
                        <Stack flexDirection="row" alignItems="flex-end">
                            <Typography component="div" 
                                fontSize={13} 
                                fontFamily='SF Pro'
                                fontWeight={860} 
                                lineHeight={1} 
                                color="#CEC0C0">Docs</Typography>
                            <OpenInNewIcon sx={{ color: '#CEC0C0' }} fontSize="13" />
                        </Stack>
                    </Stack>
                    {/* <Stack flexDirection="row">
                        <Typography fontWeight={700}>1 LUNA &asymp; </Typography>
                        <Typography fontWeight={700}>&nbsp;1.212 UST</Typography>
                    </Stack> */}
                </Stack>
                <Stack flexDirection="column" gap={7.5}>
                    <TotalLockedBox />
                    <Stack flexDirection="row" gap={7.5}>
                    {rows.map( (row, key) => 
                        <StakeBox key={key} { ...row} />
                    )}  
                    </Stack>
                    <EarnBox />
                    <EcosystemBox />
                </Stack>
            </Container>
        </Box>
    );
}

export default Dashboard;