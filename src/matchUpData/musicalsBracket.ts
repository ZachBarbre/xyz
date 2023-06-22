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
                    seeds: [1, 27],
                  },
                  {
                    round: 1,
                    matchup: 2,
                    seeds: [9, 23],
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
                    seeds: [13,19],
                  },
                  {
                    round: 1,
                    matchup: 4,
                    seeds: [5, 31],
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
                    seeds: [2, 29],
                  },
                  {
                    round: 1,
                    matchup: 6,
                    seeds: [10,17],
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
                    seeds: [14,21],
                  },
                  {
                    round: 1,
                    matchup: 8,
                    seeds: [6,25],
                    
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
                    seeds: [3, 32],
                  },
                  {
                    round: 1,
                    matchup: 10,
                    seeds: [11, 20],
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
                    seeds: [15,24],
                  },
                  {
                    round: 1,
                    matchup: 12,
                    seeds: [7,28],
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
                    seeds: [4, 26],
                  },
                  {
                    round: 1,
                    matchup: 14,
                    seeds: [12,22],
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
                    seeds: [16,18],
                  },
                  {
                    round: 1,
                    matchup: 16,
                    seeds: [8,30],
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
