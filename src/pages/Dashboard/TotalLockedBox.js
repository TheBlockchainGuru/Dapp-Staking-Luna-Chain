import { Box, Stack, Typography, Divider } from '@mui/material';
import Chart from 'react-apexcharts';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const TotalLockedBox = () => {

    const data = {
        series: [60, 55],
        options: {
            labels: ["LUNA", "UST"],
            plotOptions: {
                pie: {
                    expandOnClick: false,
                    donut: {
                        labels: {
                            show: true,
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

    return(
        <Box bgcolor="#212121" pt={7.5} pb={8} px={6} borderRadius={3}>
            <Stack flexDirection="row">
                <Box>
                    <Typography fontFamily="SF Pro" fontWeight={860} lineHeight={1.5} fontSize={24} color="#FFFFFF" textTransform="uppercase" >Total value locked</Typography>
                    <Stack flexDirection="row" alignItems="flex-end" pb={5}>
                        <Typography component="div" fontWeight={860} fontFamily="SF Pro" fontSize={36} lineHeight="unset" color="#FFFFFF" >15,597,018,699</Typography>
                        <Typography component="div" pl={.5} fontWeight={860} color="#FFFFFF">UST</Typography>
                        <ArrowDropUpIcon sx={{ fontSize: "20", color: "#00B929" }}/>
                        <Typography lineHeight="20px" component="div" fontSize={14} color="#00B929" > 2% </Typography>
                    </Stack>
                    <Chart options={data.options} series={data.series} type="donut" width={380} />
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ borderColor: '#5C5353'}} />
                <Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default TotalLockedBox;

