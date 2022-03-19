import { Box, Container, Stack, Typography } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TotalValueBox from "./TotalValueBox";
import TotalPayedBox from "./TotalPayedBox";
import TransactionHistory from "./TransactionHistory";
import DepositTable from "./DepositTable";

const Mypage = () => {
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
                        >MY PAGE</Typography>
                        <Stack flexDirection="row" alignItems="flex-end">
                            <Typography component="div" fontSize="14px" fontWeight="700" lineHeight={1} color="#b3b3b4">Docs</Typography>
                            <OpenInNewIcon sx={{ color: '#b3b3b4' }} fontSize="14" />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack gap={5}>
                    <Stack flexDirection="row" gap={5}>
                        <TotalValueBox />
                        <TotalPayedBox />
                    </Stack>
                    <DepositTable />
                    <TransactionHistory />
                </Stack>
            </Container>
        </Box>
    );
}

export default Mypage;