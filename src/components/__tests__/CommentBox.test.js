import React from "react";
import { mount } from "enzyme";

import CommentBox from "../CommentBox";
import Root from "../../Root";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

it("has a textarea and two buttons", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(2);
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
