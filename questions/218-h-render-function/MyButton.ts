import { defineComponent,h } from "vue"

export default defineComponent({
  name: 'MyButton',
  render(context) {
    return h('button',{
      disabled:false,
      onclick: () => context.$emit('custom-click')
    },
    {
      default: () => 'my button',
    }
    )
  }
})
