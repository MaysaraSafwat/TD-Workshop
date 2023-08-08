<template>
   <transition appear
        @mouseenter="onEnter" @mouseleave="onLeave"
        >
    <div class="card">
        <img class="item-img" :src="item.enclosure.link"/>
          <div class="text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.pubDate }}</p>
          </div>
        
       
   </div>
  </transition>
</template>

<script>
import gsap from "gsap"

export default {
  props: ["item"],
  setup(){

    const onEnter = (e)=> {
      console.log(e.target)
      gsap.to(e.target, {
        duration: 0.3,
        y:-10
      });
    }

    const onLeave = (e)=> {
      gsap.to(e.target, {
        duration: 0.3,
        y:0,
        ease: "back.out"
      });
    }
    
    return{onEnter, onLeave}
  }

}
</script>
<style lang="scss">
.card {
  position: relative;
  text-align: start;
  &::before{
     content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 99%;
    background-color:black;
    opacity: 0.3;
    }
 
 
  div {
    font-family: 'Montserrat', sans-serif;
    width:80%;
    position: absolute;
    bottom: 2%;
    padding: 0 10px 0px 10px;
  }
  div h2{
    font-size: 1.5rem;
    width: 100%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0.5rem ;
  }
  div p{
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
}

.item-img {
    width: 100%;
}
 </style>
 
