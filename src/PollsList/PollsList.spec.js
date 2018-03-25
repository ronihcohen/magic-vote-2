import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PollsList from "./PollsList";

configure({ adapter: new Adapter() });

test("Shallow render PollsList", () => {
  const pollsList = shallow(<PollsList />);
  expect(pollsList.text()).toEqual("<Query />");
});
