import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component
export default class Shoppingcart extends Vue {
  @Getter('commodity/get_commodity') public commodity: any
  @Action('commodity/reduce_commodity_to_shoppingcart_by_id') public add: any
  @Action('commodity/add_commodity_to_shoppingcart_by_id') public reduce: any
  @Action('commodity/get_commodity_of_shoppingcart') public commodityOfshoppingcart: any

  public dialogVisible: boolean = false
  
}