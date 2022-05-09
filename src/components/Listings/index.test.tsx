import { shallow } from "enzyme";
import Listings from "./index";
import React, { useState as useStateMock } from "react";

const mockedUseNavigate = jest.fn();
const mockedUseLocation = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
  useLocation: () => mockedUseLocation,
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
const setIsLoading = jest.fn();

(useStateMock as jest.Mock).mockImplementation((init) => [false, setIsLoading]);

describe("Component is properly rendered with Props", () => {
  const component = shallow(<Listings />);
  expect(component).toMatchSnapshot();

  it("should have pageContent class", () => {
    expect(component.find("SearchForm").length).toEqual(1);
  });
});
