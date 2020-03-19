<template>
  <div class="home">
    <Reviews msg="Valoraciones del producto"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Reviews from '../components/Reviews.vue'

export default {
  name: 'Home',
  components: {
    Reviews
  }
}
</script>
