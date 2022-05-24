<template>
  <div style="height: 100%">
    <video id="video" width="100%" height="100%" autoplay />
  </div>
</template>
<script>
export default {
  data() {
    return {
      video: null,
    };
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      this.video = document.getElementById("video");

      navigator.getUserMedia =
        navigator["webkitGetUserMedia"] ||
        navigator["mozGetUserMedia"] ||
        navigator["getUserMedia"];

      // 打开摄像头
      navigator.getUserMedia(
        { video: true, audio: true },
        this.gotStream,
        this.noStream
      );
    },

    gotStream(stream) {
      try {
        this.video.src = URL.createObjectURL(stream);
      } catch (error) {
        this.video.srcObject = stream;
      }

      this.video.onerror = () => {
        stream.stop();
      };
      stream.onended = this.noStream;
      this.video.onloadedmetadata = () => {
        console.log("成功打开摄像头");
      };
    },

    noStream(e) {
      console.log(e);
      if (e["name"] === "PermissionDeniedError") {
        alert("用户没有同意开启摄像头");
      }
    },
  },
};
</script>
 