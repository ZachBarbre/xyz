import { useState } from "react";
import { ParentSize } from "@visx/responsive";
import { BracketSVG } from "./BracketSVG";
import styles from "./Bracket.module.css";
import { TreeNode } from "./Matchup";
export const margin = { top: 20, bottom: 20, left: 20, right: 20 };

export const lineTextColor = "#c2c9ce";

function DetailCard({ heading, body, songURL = null }) {
  return (
    <div className={styles.detailCard}>
      <h6>{heading}</h6>
      {songURL ? (
        <a target="_blank" href={songURL}>
          {body}
        </a>
      ) : (
        <p>{body}</p>
      )}
    </div>
  );
}

function NotPlayed({ player1, player2, seed1, seed2 }) {
  if (player1 || player2) {
    return (
      <div className={styles.detailGrid}>
        {player1 && (
          <>
            <DetailCard heading="Player 1" body={player1} />
            <DetailCard heading="Seed 1" body={seed1} />
          </>
        )}
        {player2 && (
          <>
            <DetailCard heading="Player 2" body={player2} />
            <DetailCard heading="Seed 2" body={seed2} />
          </>
        )}
      </div>
    );
  }
  return <p>Select a Matchup</p>;
}

function getPlayerNumbers(matchup: TreeNode) {
  if (!matchup) {
    return [];
  }
  if (matchup.winner === matchup.pick1) {
    return [1, 2];
  }
  if (matchup.winner === matchup.pick2) {
    return [2, 1];
  }
  return [];
}

export function Bracket({ data }) {
  const [matchupDetails, setMatchupDetails] = useState<TreeNode>();
  console.log(
    "🚀 ~ file: index.tsx:12 ~ Bracket ~ matchupDetails",
    matchupDetails
  );
  const playerNumbers = getPlayerNumbers(matchupDetails);
  return (
    <>
      <ParentSize className={styles.scrollContainer}>
        {({ width }) => (
          <BracketSVG
            data={data}
            parentWidth={width}
            setMatchupDetails={setMatchupDetails}
          />
        )}
      </ParentSize>
      <article className={styles.details}>
        <h5>Matchup Details</h5>
        {matchupDetails?.winner ? (
          <>
            <div className={styles.detailGrid}>
              <DetailCard
                heading="Winner"
                body={matchupDetails[`player${playerNumbers[0]}`]}
              />
              <DetailCard
                heading="Winning Pick"
                body={matchupDetails.winner}
                songURL={matchupDetails.winningSong}
              />
              <DetailCard
                heading="Winning Seed"
                body={matchupDetails[`pick${playerNumbers[0]}Seed`]}
              />
              <DetailCard
                heading="Winning Votes"
                body={matchupDetails.winVotes}
              />
            </div>
            <div className={styles.detailGrid}>
              <DetailCard
                heading="Loser"
                body={matchupDetails[`player${playerNumbers[1]}`]}
              />
              <DetailCard
                heading="Losing Pick"
                body={matchupDetails.loser}
                songURL={matchupDetails.losingSong}
              />
              <DetailCard
                heading="Losing Seed"
                body={matchupDetails[`pick${playerNumbers[1]}Seed`]}
              />
              <DetailCard
                heading="Losing Votes"
                body={matchupDetails.lossVotes}
              />
            </div>
            <DetailCard
              heading="Judge Vote"
              body={matchupDetails.judgeVote ? "Yes" : "No"}
            />
          </>
        ) : (
          <NotPlayed
            player1={matchupDetails?.player1}
            player2={matchupDetails?.player2}
            seed1={matchupDetails?.pick1Seed}
            seed2={matchupDetails?.pick2Seed}
          />
        )}
      </article>
    </>
  );
}
