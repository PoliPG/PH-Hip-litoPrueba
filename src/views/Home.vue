<template>
  <div class="home">
    <ph-reviews msg="Valoraciones del producto"/>
  </div>
</template>

<script>
import PHReviewsComponent from '../components/ph-reviews.vue'


export default {
  name: 'Home',
  components: {
    "ph-reviews": PHReviewsComponent
  }
}
</script>
