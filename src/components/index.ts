import headerNav from './header/index.vue'

interface ComponentBase {
  init (vue: any): void
}

class GlobalComponents {
  public init (vue: any) {
    vue.component('headerNav', headerNav)
  }
}

export default new GlobalComponents()
