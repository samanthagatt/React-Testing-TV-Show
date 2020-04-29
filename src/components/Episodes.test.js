import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";
import { mockSeasonEpisodesData } from "../mockData";
import { EPISODES_PARENT_DIV, EPISODE_DIV } from "../testIds";

test("Episodes component is set up correctly", () => {
  const { getByTestId, queryAllByTestId } = render(
    <Episodes episodes={mockSeasonEpisodesData} />
  );

  getByTestId(EPISODES_PARENT_DIV);
  expect(queryAllByTestId(EPISODE_DIV)).toHaveLength(mockSeasonEpisodesData.length);
});