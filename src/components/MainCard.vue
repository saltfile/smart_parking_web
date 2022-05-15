<template>
  <div class="maincard">
    <div class="cardcontent">
      <div class="icon">
        <img
          :src="require(`../assets/${cardlists[index].img}`)"
          alt=""
          style="height: 35px; width: 35px; margin: 23px"
        />
      </div>
      <div class="title">
        <div style="margin-top: 70px; font-size: 25px">{{cardlists[index].name}}</div>
        <div style="margin-top: 20px; font-size: 15px; color: grey">
          {{cardlists[index].content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['index'],
    data() {
        return {
            cardlists:[
                {'img':'master.png','name':'基础监控','content':'支持视频采集、实时查看和存储回放；统一云端存储与管理。'},
                {'img':'cloud.png','name':'云平台','content':'通过服务端与智能设备对接，实现可视化运营管理。'},
                {'img':'admin.png','name':'车位管理','content':'提供车位引导、车位标识等功能，方便您的出行'}
            ]
        }
    },
}
</script>

<style scoped>
.maincard {
  margin-bottom: 40px;
  height: 350px;
  width: 430px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0.2px 0.3px 0.5px rgba(0, 0, 0, 0.024),
    0.6px 0.8px 1.3px rgba(0, 0, 0, 0.035), 1.5px 1.8px 3px rgba(0, 0, 0, 0.046),
    5px 6px 10px rgba(0, 0, 0, 0.07);
}
.cardcontent {
  display: flex;
  flex-direction: column;
  margin: 35px;
}
.icon {
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background-color: rgb(235, 230, 248);
}
</style>