import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CatImageGrid from "../../components/image-grid.vue";

describe("components -> ImageGrid", () => {
  it("should render three images", () => {
    const component = mount(CatImageGrid);
    const images = component.findAll('nuxtimg');
    expect(images.length).toBe(3);
  });
});
