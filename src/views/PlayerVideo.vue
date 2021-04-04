<template>
  <div v-if="this.streamUrl">
  <b-container>
    <b-row>
      <b-col>
        <Information
          :title="title"
          :description="description"
          :poster-url="posterUrl"
        />
      </b-col>
      <b-col>
        <Video
          :stream-url="streamUrl"
          :poster-url="posterUrl"
        />
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import Video from '@/components/Video.vue'
import Information from '@/components/Information.vue'
import { getPlayerDatas } from '@/api/player';

export default {
  name: 'App',
  components: { Video, Information },
  data() {
    return {
      streamUrl: null,
      posterUrl: null,
      title: null,
      description: null,
    }
  },
  mounted() {
    getPlayerDatas().then(response => {
      const datas = response.data;
      this.streamUrl = datas.stream.url;
      this.posterUrl = datas.overlay.image_bundle.poster_tv.source.url;
      this.title = datas.overlay.title;
      this.description = datas.overlay.description;
    });
  },
}
</script>
