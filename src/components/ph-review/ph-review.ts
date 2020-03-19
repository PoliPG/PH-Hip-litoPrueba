import { Component, Prop, Vue } from 'vue-property-decorator';
import { Review } from '../../review.interface';

@Component
export default class PHReviewComponent extends Vue 
{
  
  @Prop() private review!: Review;

  /** Gestiona si se puede volver a votar */
  protected voted: boolean;

  /** Fecha en formato string */
  protected dateFormatted: string;

  constructor()
  {
    super();
    this.voted = false;
    this.dateFormatted = this.formatDate(); 
  }

  /**
   * Hacemos un format de la fecha de la review.
   *
   * @memberof ReviewComponent
   * @returns String fecha formateada
   */
  formatDate(): string
  {
    let date = new Date(this.review.date);
    let fecha = date.toUTCString();
    return fecha;
  }

  /**
   * Al hacer click en el botón de es util suma un nuevo dato
   * @param reviewSelected 
   */
  esUtil(reviewSelected: Review): void
  {
    if(this.voted === false)
    {
      this.voted = true;
      this.review.useful_count++;
    }
  }

}