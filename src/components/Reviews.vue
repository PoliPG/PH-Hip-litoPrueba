<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Aquí puedes consultar las últimas valoraciones que los usuarios han hecho sobre este producto</h3>
    <ul id="reviews-list">
      <li v-for="(review, index) in getReviews()" v-bind:key="index">
       <article class="ph-review">
            <div class="ph-review-valoracion">
                <div class="ph-review-valoracion-stars">
                    <span v-for="star in 5" :key="star"><font-awesome-icon icon="star"></font-awesome-icon></span>
                    <span class="ph-review-valoracion-total">{{ review.rating }}</span>
                </div>
                <span class="ph-review-valoracion-author">{{ review.author}} {{review.date}}</span>
                <p>{{ review.comment}}</p>
            </div>
            <div class="ph-review-buttons">
                <button @click="esUtil(review)"><font-awesome-icon icon="thumbs-up"></font-awesome-icon>Es útil</button>
                <span>{{review.useful_count}} <span>Creen que es util</span></span>
            </div>
        </article>
      </li>
    </ul>
  </div>
</template>
<!-- Añadimos el ts en un archivo separado -->
<script lang="ts" src="./Reviews.ts"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Reviews.scss"></style>
