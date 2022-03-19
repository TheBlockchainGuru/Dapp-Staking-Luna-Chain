import { Avatar,Box, Container, Stack, Typography, Divider } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EcosystemBox from "./EcosystemBox";
import TotalLockedBox from "./TotalLockedBox";
import StakeBox from "./StakeBox";
import EarnBox from './EarnBox';

const Dashboard = () => {
    return (
        <Box pt="150px">
            <Container maxWidth="xl">
                <Stack flexDirection="row" justifyContent="space-between" alignItems="flex-end" pb="50px">
                    <Stack flexDirection="row" alignItems="flex-end" gap={2}>
                        <Typography variant="h1" 
                            color="#1e1e1e"
                            fontSize={48}
                            fontWeight={900}
                            lineHeight="0.875"
                            textTransform="uppercase"
                        >Dashboard</Typography>
                        <Stack flexDirection="row" alignItems="flex-end">
                            <Typography component="div" fontSize="14px" fontWeight="700" lineHeight={1} color="#b3b3b4">Docs</Typography>
                            <OpenInNewIcon sx={{ color: '#b3b3b4' }} fontSize="14" />
                        </Stack>
                    </Stack>
                    <Stack flexDirection="row">
                        <Typography fontWeight={700}>1 LUNA &asymp; </Typography>
                        {/* <Avatar /> */}
                        <Typography fontWeight={700}>&nbsp;1.212 UST</Typography>
                        {/* <Avatar /> */}
                    </Stack>
                </Stack>
                <Stack flexDirection="column" gap={5}>
                    <TotalLockedBox />
                    <Stack flexDirection="row" gap={5}>
                        <StakeBox />
                        <StakeBox />
                    </Stack>
                    <EarnBox />
                    <EcosystemBox />
                </Stack>
            </Container>
        </Box>
    );
}

export default Dashboard;