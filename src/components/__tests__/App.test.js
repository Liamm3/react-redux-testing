import React from "react";
import { mount } from "enzyme";

import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

let wrapper;

beforeEach(() => {
  wrapper = mount(<App />);
});

it("shows a comment box", () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});

afterAll(() => {
  wrapper.unmount();
});
