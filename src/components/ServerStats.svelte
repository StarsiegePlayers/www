<script>
    import {dayDifference, stats, serverChartData, playerChartData} from "../store/serverstats";
    import SvelteHeatmap from 'svelte-heatmap'
    import { chart } from "svelte-apexcharts";

    stats.lastupdated = (new Date());

    console.log(serverChartData, playerChartData);

    let chartSet = {
        series: [
            {
                name: "players",
                data: playerChartData,
            },
            {
                name: "servers",
                data: serverChartData,
            },
        ],
        chart: {
            type: 'area',
            height: 300,
            stacked: true,
        },
        colors: ['#008FFB', '#00E396', '#CED4DC'],
        stroke: {
            curve: 'smooth'
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        tooltip: {
            theme: "dark",
        },
        xaxis: {
            type: 'datetime'
        },
    };

    let StatsInfo = stats;

</script>

<style lang="scss">
  @import "../styles/app/variables";
    .header h3 {
        margin: 1.5rem 0;
    }

    .heatmap h4 {
        margin: 1rem 0 2rem 0;
    }

    hr {
        margin: 0.5rem 0;
    }

    .heatmap,.linegraph,.header {
        background-color: transparentize($starsiege-blue, 0.75);
    }
</style>

<div class="header rounded-3 boarder-3 p-4">
    <h3>There are {stats.currentusers} players and {stats.currentservers} servers currently online</h3>
</div>
<hr />
<div class="linegraph rounded-3 boarder-3 p-4">
    <h4 class="text-start">
        Total players and servers over the past 7 days.
    </h4>
    <div use:chart={chartSet} />
</div>
<hr/>
<div class="heatmap rounded-3 boarder-3 p-4">
    <h4 class="text-start">
        Multiplayer user activity over the past {(dayDifference(stats.startDate, stats.endDate))} days.
    </h4>
    <SvelteHeatmap
            allowOverflow={true}
            data={stats.data}
            cellGap={2}
            cellRadius={2}
            dayLabelWidth={20}
            monthLabelHeight={20}
            emptyColor={'#18303f7f'}
            colors={['#a1dab4', '#42b6c4', '#2c7fb9', '#263494']}
            endDate={stats.endDate}
            startDate={stats.startDate}
    />
</div>
<hr />