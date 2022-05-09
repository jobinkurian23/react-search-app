import { shallow } from "enzyme";
import App from "./App";

const mockedUseLocation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useLocation: () => mockedUseLocation,
}));

describe("Component is properly rendered", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();

  it("should have button element", () => {
    expect(component.find(".pageContent")).toHaveLength(1);
  });
});
