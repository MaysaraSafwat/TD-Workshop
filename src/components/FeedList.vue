<template>
  <transition appear
  @before-enter="beforePageEnter"
  @enter="pageEnter"
  > <div>
    <div class="feed-container">
        <div class="feed-item" v-for="item in feed" :key="item.title" >
         <ItemCard :item="item"/>
        </div>
    </div>
    </div>
  </transition>
</template>

<script>
import ItemCard from './ItemCard.vue';
import gsap from "gsap";

export default {
  props: ["feed"],
  components : {
   ItemCard,
  },
  setup(){
    const beforePageEnter = (el)=>{
      el.style.transform = 'translateY(-100px)'
      el.style.opacity = 0
    }
    const pageEnter = (el)=>{
      gsap.to(el, {
        y:0,
        opacity:1,
        duration: 2,
        ease: "bounce.out"
      })
    }


   return {beforePageEnter, pageEnter}
  }
  
  
}
</script>

<style lang="scss">
.feed-container{
 display: grid;
 gap:1rem;
  
 @media (max-width: $bp-sm) {
    display: flex;
    flex-direction: column;
  }
 @media (min-width: $bp-md) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: $bp-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}
.feed-item{
    padding: 0.1rem;
}
.feed-item:first-of-type {
    grid-column : span 2;
    
}
.feed-item:nth-of-type(7){
    grid-column : span 2;
    
}
</style>