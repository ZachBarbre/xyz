export default [
  {
    side: "left",
    round: 5,
    matchup: 1,
    children: [
      {
        round: 4,
        matchup: 1,
        children: [
          {
            round: 3,
            matchup: 1,
            children: [
              {
                round: 2,
                matchup: 1,
                children: [
                  {
                    round: 1,
                    matchup: 1,
                    seeds: [1],
                    children: [{ round: 0, matchup: 1, seeds: [23, 35] }],
                  },
                  {
                    round: 1,
                    matchup: 2,
                    seeds: [9, 24],
                  },
                ],
              },
              {
                round: 2,
                matchup: 2,
                children: [
                  {
                    round: 1,
                    matchup: 3,
                    seeds: [11, 25],
                  },
                  {
                    round: 1,
                    matchup: 4,
                    seeds: [7],
                    children: [{ round: 0, matchup: 2, seeds: [22, 33] }],
                  },
                ],
              },
            ],
          },
          {
            round: 3,
            matchup: 2,
            children: [
              {
                round: 2,
                matchup: 3,
                children: [
                  {
                    round: 1,
                    matchup: 5,
                    seeds: [2],
                    children: [{ round: 0, matchup: 3, seeds: [21, 31] }],
                  },
                  {
                    round: 1,
                    matchup: 6,
                    seeds: [12, 26],
                  },
                ],
              },
              {
                round: 2,
                matchup: 4,
                children: [
                  {
                    round: 1,
                    matchup: 7,
                    seeds: [16, 17],
                  },
                  {
                    round: 1,
                    matchup: 8,
                    seeds: [8],
                    children: [{ round: 0, matchup: 4, seeds: [27, 38] }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    side: "right",
    round: 5,
    matchup: 2,
    children: [
      {
        round: 4,
        matchup: 2,
        children: [
          {
            round: 3,
            matchup: 3,
            children: [
              {
                round: 2,
                matchup: 5,
                children: [
                  {
                    round: 1,
                    matchup: 9,
                    seeds: [3],
                    children: [{ round: 0, matchup: 5, seeds: [29, 36] }],
                  },
                  {
                    round: 1,
                    matchup: 10,
                    seeds: [10, 28],
                  },
                ],
              },
              {
                round: 2,
                matchup: 6,
                children: [
                  {
                    round: 1,
                    matchup: 11,
                    seeds: [14, 19],
                  },
                  {
                    round: 1,
                    matchup: 12,
                    seeds: [6],
                    children: [{ round: 0, matchup: 6, seeds: [37, 40] }],
                  },
                ],
              },
            ],
          },
          {
            round: 3,
            matchup: 4,
            children: [
              {
                round: 2,
                matchup: 7,
                children: [
                  {
                    round: 1,
                    matchup: 13,
                    seeds: [4],
                    children: [{ round: 0, matchup: 7, seeds: [30, 39] }],
                  },
                  {
                    round: 1,
                    matchup: 14,
                    seeds: [15, 20],
                  },
                ],
              },
              {
                round: 2,
                matchup: 8,
                children: [
                  {
                    round: 1,
                    matchup: 15,
                    seeds: [18, 13],
                  },
                  {
                    round: 1,
                    matchup: 16,
                    seeds: [5],
                    children: [{ round: 0, matchup: 8, seeds: [34, 32] }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
