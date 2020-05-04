import React from "react";
import { render } from "@testing-library/react";
import { mockShowData } from "./mockData";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");

test("App should fetch seasons and render data", () => {
  mockFetchShow.mockResolvedValueOnce(mockShowData);
  const { findByText } = render(<App />);

  findByText(mockShowData.name);
});