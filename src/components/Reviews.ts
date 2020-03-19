import { Component, Prop, Vue } from 'vue-property-decorator';

/** Interfaz para las reviews */
interface review
{
  id_review: number,
  rating: number,
  author: string,
  date: Date,
  comment: string,
  useful_count: number

}

@Component
export default class Reviews extends Vue 
{
  @Prop() private msg!: string;
  private reviewsList: review[] = this.getReviews();

  /**
   * Obtiene las reviews 
   * @return review[] Listado de reviews
   */
  getReviews(): review[]
  {
    const JsonReviews = require('./review.json');
    this.reviewsList = Array();
  
    if(typeof(JsonReviews.reviews) !== "undefined")
    {
      const reviews = JsonReviews.reviews
      let id_review = 0;
    
      reviews.forEach((review: any) => {

        let date = new Date(review.date);
        let fecha = date.toUTCString();
        const stringDate = `${fecha}`;

        review.date = stringDate;
        review.id_review = id_review;
        this.reviewsList.push( review );
        id_review++;
      });
    }

    return this.reviewsList;
  }

  /**
   * Al hacer click en el botón de es util suma un nuevo dato
   * @param reviewSelected 
   */
  esUtil(reviewSelected: review): void
  {
    let reviews = null;

    this.reviewsList.forEach((reviewI: review) => {
          
          if(reviewSelected.id_review === reviewI.id_review)
          {
              reviewI.useful_count++;
          }
          reviews.push( reviewI );

      });

    this.reviewsList = reviews;

  }

}