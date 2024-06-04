import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Header from "../../components/header.vue";

describe("components -> Header", () => {
  it("should render the h1 text correctly", () => {
    const component = mount(Header);
    expect(component.find("h1").text()).toBe("The Defsafe cat facts page");
  });
});
