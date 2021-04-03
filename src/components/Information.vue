<template>
  <div>
  <h1>{{this.title}}</h1>
  <p>{{this.description}}</p>
  <img :src="this.posterUrl"/>
  </div>
</template>

<script>

export default {
  name: 'Information',
  props: {
    title: String,
    description: String,
    posterUrl: String
  }
}
</script>