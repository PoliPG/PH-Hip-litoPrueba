<template>
    <article class="ph-review">
        <div class="ph-review-valoracion">
            <div class="ph-review-valoracion-stars">
                <span v-for="star in 5" :key="star">
                    <font-awesome-icon v-if="review.rating >= star" icon="star"></font-awesome-icon>
                    <font-awesome-icon v-else :icon="['far', 'star']"></font-awesome-icon>
                </span>
                <span class="ph-review-valoracion-total">{{ review.rating }}</span>
            </div>
            <span class="ph-review-valoracion-author">{{ review.author}} {{dateFormatted}}</span>
            <p>{{ review.comment}}</p>
        </div>
        <div class="ph-review-buttons">
            <button v-bind:class="{active: voted }" @click="esUtil(review)"><font-awesome-icon icon="thumbs-up"></font-awesome-icon>Es útil</button>
            <span>{{review.useful_count}} <span v-if="voted == false">Creen que es útil</span><span v-else>Creéis que es útil</span> </span>
        </div>
    </article>
</template>
<!-- Añadimos el ts en un archivo separado -->
<script lang="ts" src="./ph-review.ts"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./ph-review.scss"></style>
