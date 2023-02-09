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
                    children: [{ round: 0, matchup: 1, seeds: [32, 29] }],
                  },
                  {
                    round: 1,
                    matchup: 2,
                    seeds: [17, 10],
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
                    seeds: [15, 13],
                  },
                  {
                    round: 1,
                    matchup: 4,
                    seeds: [7, 26],
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
                    seeds: [2, 24],
                  },
                  {
                    round: 1,
                    matchup: 6,
                    seeds: [14, 22],
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
                    seeds: [14, 25],
                  },
                  {
                    round: 1,
                    matchup: 8,
                    seeds: [9],
                    children: [{ round: 0, matchup: 2, seeds: [31, 36] }],
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
                    children: [{ round: 0, matchup: 3, seeds: [30, 23] }],
                  },
                  {
                    round: 1,
                    matchup: 10,
                    seeds: [18, 20],
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
                    seeds: [11, 23],
                  },
                  {
                    round: 1,
                    matchup: 12,
                    seeds: [4, 27],
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
                    seeds: [5, 35],
                  },
                  {
                    round: 1,
                    matchup: 14,
                    seeds: [6, 21],
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
                    seeds: [12, 19],
                  },
                  {
                    round: 1,
                    matchup: 16,
                    seeds: [8],
                    children: [{ round: 0, matchup: 4, seeds: [28, 34] }],
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
