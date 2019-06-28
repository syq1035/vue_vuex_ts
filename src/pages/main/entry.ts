import { Vue, Component } from 'vue-property-decorator'
import leftNav from './components/left/index.vue'
import { Action, Getter } from 'vuex-class'

@Component({
  components: {
    leftNav
  }
})
export default class Main extends Vue {

  @Action('commodity/add_commodity') public addCommodity: any
  @Getter('commodity/get_commodity') public get_commodity: any

  public needToAddCommodity = [
    {
      id: 0,
      name: '华为 P30',
      count: 10,
      buyNum: 0,
      price: 4999
    },
    {
      id: 1,
      name: 'MacBook',
      count: 10,
      buyNum: 0,
      price: 6999
    },{
      id: 2,
      name: 'IPhone',
      count: 10,
      buyNum: 0,
      price: 5699
    },{
      id: 3,
      name: '耳机',
      count: 10,
      buyNum: 0,
      price: 999
    },{
      id: 4,
      name: '鼠标',
      count: 10,
      buyNum: 0,
      price: 699
    },{
      id: 5,
      name: '键盘',
      count: 10,
      buyNum: 0,
      price: 1999
    }
  ]

  public created () {
    this.addCommodity(this.needToAddCommodity)
    // setTimeout(() => {
    //   console.log(this.get_commodity)
    // }, 1000)
  }
}