<template>
  <div>
    <div id="modifiers" @click="clickDiv">
      DIV 영역
      <p @click.self="clickP">
        P 영역
        <!-- <span @click.stop="clickSpan">SPAN 영역</span> -->
        <span @click="clickSpan">SPAN 영역</span>
        <a href="https://naver.com" @click.prevent.stop="clickA">A 영역</a>
      </p>
    </div>
    <button @click.once="clickDiv">once</button>
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log("clickDiv");
      //location.href = "https://naver.com";
    };
    const clickP = () => {
      console.log("clickP");
    };
    const clickSpan = () => {
      console.log("clickSpan");
      //e.stopPropagation(); // .stop = e.stopPropagation() 이벤트 전파 중지
      //alert("좋아요");
    };
    const clickA = () => {
      //e.preventDefault(); // .prevent = e.preventDefault() 기본 동작 중지
      alert("어떤기능~");
    };

    return { clickDiv, clickP, clickSpan, clickA };
  },
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}
#modifiers div {
  background-color: #ccc;
}
#modifiers p {
  background-color: #999;
}
#modifiers span {
  background-color: #666;
  display: block;
}
</style>
