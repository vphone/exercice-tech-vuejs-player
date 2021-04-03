<template>
  <div class="video">
    <video 
      ref="video"
      id="video"
      :poster="posterUrl"
      controls>
    </video>
  </div>
</template>

<script>
const shaka = require('shaka-player/dist/shaka-player.compiled.js');

export default {
  name: 'Video',
  props: {
    streamUrl: String,
    posterUrl: String
  },
  mounted() {
    const player = new shaka.Player(this.$refs.video);
    player.load(this.streamUrl)
    .then(() => console.log('The video has now been loaded!'))
    .catch(error => this.onPlayerErrorEvent(error));
  },
  methods: {
    onPlayerErrorEvent(error) {
      console.error('ERROR', error);
    }
  }
}
</script>