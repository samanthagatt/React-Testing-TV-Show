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

test("Episodes component should be dynamic and rerender correct episodes", () => {
  // Render with no episodes
  const { getByTestId, queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);

  // Parent div should be present
  getByTestId(EPISODES_PARENT_DIV);
  // No episode divs should be in parent
  expect(queryAllByTestId(EPISODE_DIV)).toHaveLength(0);

  // Rerender with mock episodes data
  rerender(<Episodes episodes={mockSeasonEpisodesData} />);
  // Parent div should be present
  getByTestId(EPISODES_PARENT_DIV);
  // Number of episode divs should equal
  // the number of episodes in the mock data
  expect(queryAllByTestId(EPISODE_DIV)).toHaveLength(mockSeasonEpisodesData.length);
});