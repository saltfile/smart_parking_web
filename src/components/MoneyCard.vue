<template>
  <div class="cardcontainer">
    <div class="container">
      <div class="card">
        <div class="fontcontainer">
          <h1 style="font-size: 30px">¥{{ dateMoney }}</h1>
          <h2
            style="
              font-size: 15px;
              color: lightgray;
              margin-top: 10px;
              font-weight: 400;
            "
          >
            Today
          </h2>
          <h2
            :style="{
              'font-size': '18px',
              'margin-top': '10px',
              color: percent > 0 ? greencolor : redcolor,
            }"
          >
            {{ percent > 0 ? "+" : "" }} {{ percent }}% vs yesterday
          </h2>
        </div>
      </div>
      <div id="card"></div>
    </div>
    <div
      style="
        margin-left: 30px;
        margin-right: 30px;
        height: 2px;
        background-color: rgb(220, 220, 220);
        border-radius: 10px;
      "
    ></div>
    <div class="bottom">
      <div class="progress">
        <div class="progresstitle">距离日收入目标¥5000</div>
        <el-progress
          :percentage="percentarget"
          :color="customColor"
        ></el-progress>
        <div class="progresstitle">日收入占比(7 days)</div>
        <el-progress
          :percentage="percentseven"
          :color="customColors"
        ></el-progress>
      </div>
      <div class="progress">
        <div class="progresstitle">交易笔数占比(7 days)</div>
        <el-progress :percentage="percenttrade" color="#90EE90"></el-progress>
      </div>
    </div>
  </div>
</template>
<script>
let echarts = require("echarts");
export default {
  data() {
    return {
      dateMoney: 2900,
      yesteedayMoney: 1890,
      recentdaysMoney: 12324,
      trade:400,
      recentrade:4321,
      greencolor: "#32CD32",
      redcolor: "red",
      customColor: "#7B68EE",
      customColors: "#DAA520",
    };
  },
  computed: {
    percent() {
      return (
        Math.round(
          ((this.dateMoney - this.yesteedayMoney) / this.yesteedayMoney) * 10000
        ) / 100
      );
    },
    percentarget() {
      return Math.round((this.dateMoney / 5000) * 10000) / 100;
    },
    percentseven() {
      return Math.round((this.dateMoney / this.recentdaysMoney) * 10000) / 100;
    },
    percenttrade(){
      return Math.round((this.trade/this.recentrade*10000))/100
    }
  },
  mounted() {
    var dom = document.getElementById("card");
    var myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });

    var option;

    option = {
      title: {
        text: "前七天收入比较",
        textStyle: {
          fontWeight: 400,
          fontSize: 14,
          Color: "#D3D3D3",
        },
      },
      xAxis: {
        type: "category",
        axisTick: {
          show: false, //不显示坐标轴刻度线
        },
        axisLabel: {
          show: false, //不显示坐标轴上的文字
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        type: "value",
      },
      series: [
        {
          barWidth: 20,
          data: [
            120,
            200,
            150,
            80,
            70,
            110,
            {
              value: 100,
              itemStyle: {
                color: "#7B68EE",
              },
            },
          ],
          itemStyle: {
            color: "#E6E6FA",
            borderRadius: [20, 20, 0, 0],
          },
          type: "bar",
        },
      ],
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    window.addEventListener("resize", myChart.resize);
  },
};
</script>

<style scoped>
.cardcontainer {
  height: 450px;
  width: 820px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0.2px 0.3px 0.5px rgba(0, 0, 0, 0.024),
    0.6px 0.8px 1.3px rgba(0, 0, 0, 0.035), 1.5px 1.8px 3px rgba(0, 0, 0, 0.046),
    5px 6px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.container {
  margin-top: 10px;
  margin-left: 30px;
  height: 270px;
  width: 760px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 30px;
  height: 140px;
  width: 760px;
}
.card {
  width: 375px;
  height: 270px;
}
#card {
  width: 375px;
  height: 320px;
}
.fontcontainer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 170px;
}
.progress {
  width: 370px;
}
.progresstitle {
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(151, 150, 150);
}
.el-progress {
  margin-bottom: 20px;
  width: 100%;
}
</style>