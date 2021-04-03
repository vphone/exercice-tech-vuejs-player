<template>
  <div>
  <h1>{{this.title}}</h1>
  <p>{{this.description}}</p>
  </div>
</template>

<script>

export default {
  name: 'Overlay',
  props: {
    title: String,
    description: String
  }
}
</script>