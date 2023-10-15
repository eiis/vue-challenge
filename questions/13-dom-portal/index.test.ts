import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import App from "./App.vue"

describe("DomPortal", () => {
  it("render to body", () => {
    const wrapper = mount(App)
    //用于验证某个值是否为JavaScript中的"假值"
    expect(wrapper.find("span").exists()).toBeFalsy()
    expect(document.body.innerHTML).toMatchInlineSnapshot("\"<span>Hello World</span>\"")
  })
})
