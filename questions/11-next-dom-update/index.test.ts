import { mount } from "@vue/test-utils"
import { describe, it, expect, vi } from "vitest"

import App from "./App.vue"

//测试套件
describe("next-dom-update", () => {
  it("should work'", async() => {
    let printLog = ''
    //重写 console.log
    console.log = vi.fn(
      (log: string) => {
        printLog = log?.toString()?.trim()
      })
    //允许我们对组件进行操作和查询
    const wrapper = mount(App)

    expect(wrapper.text()).toMatchInlineSnapshot("\"0\"")

    const button = wrapper.find("button")
    await button.trigger("click")

    expect(wrapper.text()).toMatchInlineSnapshot('"1"')
    expect(printLog).toMatchInlineSnapshot('"true"')
  })
})
