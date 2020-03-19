import { Component, Prop, Vue } from 'vue-property-decorator';
import { Review } from '../review.interface';
import PHReviewComponent from './ph-review/ph-review.vue';

@Component({
  name: 'PHReviewsComponent',
  components: {
    "ph-review": PHReviewComponent
  }
})
export default class PHReviewsComponent extends Vue 
{
  @Prop() private msg!: string;
  private reviewsList: Review[] = this.getReviews();

  /**
   * Obtiene las reviews 
   * @return review[] Listado de reviews
   */
  getReviews(): Review[]
  {
    const JsonReviews = require('./review.json');
    this.reviewsList = Array();
  
    if(typeof(JsonReviews.reviews) !== "undefined")
    {
      const reviews = JsonReviews.reviews
      let id_review = 0;
    
      reviews.forEach((review: Review) => {    
        review.id_review = id_review;
        this.reviewsList.push( review );
        id_review++;
      });
    }

    return this.reviewsList;
  }

}