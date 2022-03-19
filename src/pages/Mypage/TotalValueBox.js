import { Box, Chip, Stack, Typography, Tooltip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Chart from 'react-apexcharts';

const rows = [
    {
        title: 'UST wallet Ballence',
        price: '25.711 UST',
        color: '#77d75f',
    },
    {
        title: 'Deposit',
        price: '25.016 UST',
        color: '#56a145'
    },
    {
        title: 'UST Deposit',
        price: '25.016 UST',
        color: '#458038'
    },
    {
        title: 'LUNA Deposit',
        price: '09 UST',
        color: '#3a6a2f'
    },
]

const data = {
    series: [60, 55],
    options: {
        labels: ["LUNA", "UST"],
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: false,
                        name: {

                        },
                        value: {
                        }
                    }
                }
            }
        },
        chart: {
            width: 380,
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
            chart: {
                width: 200
            },
            legend: {
                show: false
            }
            }
        }],
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
        }
    },
};

const TotalValueBox = () => {
    return (
        <Box bgcolor="#f3f3f5" p="60px" borderRadius="20px" flex="1 0 40%">
            <Stack flexDirection="row" justifyContent="space-between" pb={1}>
                <Typography textTransform="uppercase">Total value</Typography>
                <Chip icon={<SendIcon color="#000000" sx={{ color: '#000000' }} />} label="Swap" sx={{ bgcolor: '#FFFFFF', color: '#000000' }} />
            </Stack>
            <Stack flexDirection="row" alignItems="flex-end" pb={3}>
                <Typography lineHeight={1} fontSize={48} fontWeight={700}>50.727</Typography>
                <Typography > UST </Typography>
            </Stack>
            <Stack pt={8} flexDirection="row" justifyContent="space-between">
                <Stack gap={2}>
                    {rows.map((row, key) =>
                    <Stack key={key} flexDirection="row" gap={1} alignItems="flex-start">
                        <Box>
                            <Box sx={{ width: 12, height: 12, bgcolor: row.color }}></Box>
                        </Box>
                        <Box>
                            <Stack flexDirection="row" gap={2}>
                                <Typography lineHeight={1} >{row.title}</Typography>
                                <Tooltip title="Total amount of UST held" arrow placement="top-end" sx={{ bgcolor: "#a9f0bd", color: "#FFFFFF" }}>
                                    <ErrorOutlineIcon sx={{ width: 16, height: 16, color: '#d2d3d3' }} />
                                </Tooltip>
                            </Stack>
                            <Typography fontSize={20}>{row.price}</Typography>
                        </Box>
                    </Stack>
                    )}
                </Stack>
                <Stack>
                    <Chart options={data.options} series={data.series} type="donut" width={380} />
                </Stack>
            </Stack>
        </Box>
    );
}

export default TotalValueBox;