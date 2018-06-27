import React from "react";
import { mount } from "enzyme";

import CommentBox from "../CommentBox";

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox />);
});

it("has a textarea and a button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

describe("the textarea", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: {
        value: "New comment"
      }
    });
    wrapper.update();
  });

  it("has a text area that users can type in", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("New comment");
  });

  it("clears textarea on submit", () => {
    wrapper.find("form").simulate("submit");
    wrapper.update();

    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});

afterEach(() => {
  wrapper.unmount();
});
