import { Vue, Component } from 'vue-property-decorator'

@Component
export default class LeftNav extends Vue {

  public navTo (name: string): void {
    this.$router.push({
      name: name
    })
  }
}