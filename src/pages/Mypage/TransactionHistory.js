import { Box, Paper, Stack, TableContainer, Table, TableBody, TableRow, TableCell, Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';

const rows = [
    {
        type: 'Earn',  
        from: 'Deposited 25 UST',
        to: '',
        date: 'Tue, Jan 13, 2022, 11:12:44 PM'
    },
    {
        type: 'Transfer',  
        from: 'Received 0.09743 LUNA from terra1...ww92h',
        to: '',
        date: 'Tue, Jan 13, 2022, 11:12:44 PM'
    },
    {
        type: 'Transfer',  
        from: 'Sent 0.1 LUNA to terra1...7az89',
        to: '',
        date: 'Tue, Jan 13, 2022, 11:12:44 PM'
    },
    {
        type: 'Earn',  
        from: 'Received 0.507397 LUNA from terra1...y5k55',
        to: 'Sent 6 UST to terra1...y5k55',
        date: 'Tue, Jan 13, 2022, 11:12:44 PM'
    },
    {
        type: 'Earn',  
        from: 'Received 97.98 UST from terra1...c48tn',
        to: '',
        date: 'Tue, Jan 13, 2022, 11:12:44 PM'
    }
]

const TransactionHistory = () => {
    return (
        <Box>
            <Typography fontSize={24} fontWeight={700} py={2}>TRANSACTION HISTORY</Typography>
            <Box bgcolor="#f3f3f5" p="60px" borderRadius="20px">
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                        {rows.map((row, key) => (
                            <TableRow
                            key={key}
                            sx={{ height: 100, '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Typography fontSize={14} sx={{ color: '#a1a1a2' }}>{row.type}</Typography>
                                    <Stack flexDirection="row" gap={3}>
                                        <Typography>{row.from}</Typography>
                                        <CallMadeIcon sx={{ color: '#a1a1a2' }} />
                                    </Stack>
                                    <Typography>{row.to}</Typography>
                                </TableCell>
                                <TableCell align="right" sx={{ color: '#a1a1a2' }}>{row.date}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default TransactionHistory;