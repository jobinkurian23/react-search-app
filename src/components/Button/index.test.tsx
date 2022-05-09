import React from "react";
import { shallow } from "enzyme";
import Button from "./index";

describe("Component is properly rendered", () => {
  const component = shallow(<Button />);
  expect(component).toMatchSnapshot();

  it("should have button element", () => {
    expect(component.find("button")).toHaveLength(1);
  });
});
