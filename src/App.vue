<template>
  <div class="content">
    <div v-if="!feed.length">
      <LoadingSpinner />
    </div>
    <div v-else>
      <PageHeader />
      <FeedList :feed="feed" />
      <ViewMoreButton :isDisabled="isDisabled" @loadItems="getNextItems" />
    </div>
  </div>
</template>

<script>
import ViewMoreButton from "./components/ViewMoreButton.vue";
import FeedList from "./components/FeedList.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import PageHeader from "./components/PageHeader.vue";
import { getFeed } from "./Api/api";

export default {
  name: "App",
  data() {
    return {
      feed: [],
      isDisabled: false,
    };
  },
  components: {
    PageHeader,
    ViewMoreButton,
    FeedList,
    LoadingSpinner,
  },
  methods: {
    getInitialData: async function (n) {
      const data = await getFeed(n);
      if (data === undefined) {
        this.feed = [];
      } else {
        this.feed = data;
      }
      console.log(this.feed);
    },
    getNextItems: async function (n) {
      const data = await getFeed(n);
      if (data === undefined) {
        return;
      } else {
        this.feed = this.feed.concat(data);
        this.isDisabled = true;
      }
      console.log(this.feed);
    },
  },
  created() {
    this.getInitialData(7);
  },
};
</script>

<style lang="scss">
img {
  height: 25vh;
}
.content {
  width: 80vw;
  padding-top: 4rem;
  margin: auto;
  text-align: center;
  color: whitesmoke;
}
</style>
