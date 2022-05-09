import React from "react";
import { shallow } from "enzyme";
import Card from "./index";

describe("Component is properly rendered", () => {
  const component = shallow(<Card />);
  expect(component).toMatchSnapshot();

  it("should have class Card", () => {
    expect(component.find(".Card")).toHaveLength(1);
  });
});
