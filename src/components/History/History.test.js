import React from "react";
import HistoryPage from "./HistoryPage";

test("HistoryPage snapshot test", () => {
  const wrapper = shallow(<HistoryPage />);
  expect(wrapper).toMatchSnapshot();
});
