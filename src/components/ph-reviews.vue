<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Aquí puedes consultar las últimas valoraciones que los usuarios han hecho sobre este producto</h3>
    <ul id="reviews-list">
      <li v-for="(reviewItem, index) in this.reviewsList" v-bind:key="index">
          <ph-review v-bind:review="reviewItem" />
      </li>
    </ul>
  </div>
</template>
<!-- Añadimos el ts en un archivo separado -->
<script lang="ts" src="./ph-reviews.ts"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./ph-reviews.scss"></style>
