<template>
  <div class="content">
     <div v-if="!feed.length">
       <LoadingSpinner/>
    </div>
    <div v-else>
      <FeedList :feed="feed"/>
      <LoadMoreButton :text="text" :isDisabled="isDisabled" @loadItems="getNextItems"/>
    </div> 
  </div>
</template>

<script>
import LoadMoreButton from "./components/LoadMoreButton.vue";
import FeedList from "./components/FeedList.vue"
import LoadingSpinner from "./components/LoadingSpinner.vue";
import {getFeed} from "./Api/api"

export default {
  name: 'App',
  data(){
    return {
      text: "Load More",
      feed: [],
      isDisabled: false,
    }
  },
  components: {
    LoadMoreButton,
    FeedList,
    LoadingSpinner,
  },
  methods: {
    getInitialData: async function(n){
      const data = await getFeed(n)
      if (data === undefined) {
        this.feed = [];
      } else {
        this.feed = data;
      }
      console.log(this.feed)
    },
    getNextItems: async function(n){
      const data = await getFeed(n)
      if (data === undefined) {
        return
      } else {
        this.feed = this.feed.concat(data);
        this.isDisabled = true;
      }
      console.log(this.feed)
    }
  },
  created(){
    this.getInitialData(7);
  }
}
</script>

<style lang="scss">
img {
  height: 25vh;
}
.content {
  width: 80vw;
  padding-top: 8rem;
  margin: auto;
  text-align: center;
  color: whitesmoke;
  
}
  
</style>
