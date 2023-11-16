import { Box } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { data } from "./chartData";

function OverviewChart() { 
    return (
        <ResponsiveLine
        colors={["#5569ff"]}
        curve="monotoneX"
        theme={{
            text: {
                fill: "rgba(0,0,0,0.5)"
            }
        }}
        enableGridX={false}
        data={data}
        lineWidth={3.5}
        margin={{ top: 50, right: 60, bottom: 200, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 0,
            legend: 'Week',
            legendOffset: 36,
            legendPosition: 'middle',
        }}
        axisLeft={{
            tickSize: 0,
            legend: 'Attendance',
            legendOffset: -40,
            legendPosition: 'middle',
        }}
        pointSize={12}
        pointColor={"white"}
        pointBorderWidth={3.5}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 10,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    );
}   

export default OverviewChart;