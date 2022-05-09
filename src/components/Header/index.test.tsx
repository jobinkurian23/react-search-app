import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Component is properly rendered with Props", () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();

  it("should have header class", () => {
    expect(component.find(".header")).toHaveLength(1);
  });
});
