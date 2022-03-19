import {
    Box, Chip, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography
} from '@mui/material';

const rows = [
    {
        type: 'UST',
        percent: '34.87%',
        amount: '25.016 UST',
    }
]

const DepositTable = () => {
    return (
        
        <Box bgcolor="#f3f3f5" p="60px" borderRadius="20px">
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right">APY</TableCell>
                            <TableCell align="right">Deposit Amount</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Typography sx={{ fontWeight: 700 }}>{row.type}</Typography>
                                <Typography>Terra USD</Typography>
                            </TableCell>
                            <TableCell align="right">{row.percent}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">
                                <Chip clickable={true} label="Deposit" sx={{ bgcolor: '#000000', color: '#FFFFFF', px: 3 }} />
                                <Chip clickable={true} label="Withraw" sx={{ bgcolor: '#FFFFFF', color: '#000000', ml: 2, px: 3 }} />
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default DepositTable;