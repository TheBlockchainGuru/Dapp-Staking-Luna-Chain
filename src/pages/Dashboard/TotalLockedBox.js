import { Box, Stack, Typography, Divider } from '@mui/material';
import Chart from 'react-apexcharts';

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
        <Box bgcolor="#f3f3f5" p="60px" borderRadius="20px">
            <Stack flexDirection="row">
                <Box>
                    <Typography textTransform="uppercase">Total value locked</Typography>
                    <Typography component="div">15,597,018,699 
                        <Typography component="span">UST</Typography>
                    </Typography>
                    <Chart options={data.options} series={data.series} type="donut" width={380} />
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default TotalLockedBox;

