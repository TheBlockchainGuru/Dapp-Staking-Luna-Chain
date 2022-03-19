import { Box, Chip, Stack, Typography } from '@mui/material'; 
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const TotalPayedBox = () => {
    return (
        <Box bgcolor="#f3f3f5" p="60px" borderRadius="20px" flex="1 1 auto">
            <Stack flexDirection="row" alignItems="center">
                <Typography fontSize={14} textTransform="uppercase">Total payed interest</Typography>
                <ErrorOutlineIcon sx={{ width: 16, height: 16, color: '#d2d3d3' }} />
            </Stack>
            <Stack flexDirection="row" alignItems="flex-end" py={2}>
                <Typography fontSize={48} lineHeight={1}>0</Typography>
                <Typography fontSize={24}>UST</Typography>
            </Stack>
            <Typography color="#d2d3d3" pb={4}>0 UST</Typography>
            <Typography color="#000000">LUNA PRICE</Typography>
            <Stack flexDirection="row" py={2} alignItems="flex-end">
                <Typography fontSize={36} lineHeight={1}>3.159</Typography>
                <Typography fontSize={16}>UST</Typography>
            </Stack>
            <Stack position="relative" pt={20}>
                <Chip label="STAKE MORE" sx={{ bgcolor: '#000000', color: '#FFFFFF' }} />
            </Stack>
        </Box>
    );
}

export default TotalPayedBox;