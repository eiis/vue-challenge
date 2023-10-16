import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import App from "./App.vue"

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

describe("v-focus", () => {
  it("should work", async() => {
    //指定一个 HTMLElement 或定位到一个 HTML 元素的 CSS 选择器字符串
    //组件将会被完全挂载到文档中的这个元素
    const wrapper = mount(App, {
      attachTo: document.body,
    })

    expect(wrapper.find("input").element).not.toBe(document.activeElement)
    await delay(3000)
    expect(wrapper.find("input").element).toBe(document.activeElement)
  })
})
