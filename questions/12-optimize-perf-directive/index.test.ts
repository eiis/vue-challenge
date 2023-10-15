import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import OptimizePerfDirective from "./App.vue"

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

describe("OptimizePerfDirective", () => {
  it("should work", async() => {
    const wrapper = mount(OptimizePerfDirective)
    await delay(1100)
    //从组件的HTML内容中提取数字 
    //+ 符号是将得到的字符串转换为数字
    const content = +wrapper.vm.$el.innerHTML.replace(/\D/g, "")
    expect(content).toBe(0)
  })
})
