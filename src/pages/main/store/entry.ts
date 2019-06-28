import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component
export default class Store extends Vue {

  @Getter('commodity/get_commodity') public commodity: any

  @Action('commodity/add_commodity_to_shoppingcart_by_id') public addToShoppingcart: any
}