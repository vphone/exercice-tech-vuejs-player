<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="this.posterUrl" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="this.title">
          <b-card-text>
            {{this.description}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
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