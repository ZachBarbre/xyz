import { Matchup, Pick, BracketMatchup } from "./dataTypes";
import { getPlayerByPick } from "./getPlayerByPicks";
import { getSeedByPick } from "./getSeedByPick";

function addInitialPick(tree: BracketMatchup, pick: Pick) {
  const traverse = (node: BracketMatchup) => {
    if (node.children?.[0]) {
      traverse(node.children[0]);
    }
    if (node.children?.[1]) {
      traverse(node.children[1]);
    }
    if (node.seeds && node.seeds.includes(pick.seed)) {
      const seedIndex = node.seeds.indexOf(pick.seed);
      node[`pick${seedIndex + 1}`] = pick.pick;
      node[`pick${seedIndex + 1}Seed`] = pick.seed;
      node[`player${seedIndex + 1}`] = pick.player;
    }
  };
  traverse(tree);
  return;
}

function addWinLoss(tree: BracketMatchup, matchup: Matchup) {
  const traverse = (node: BracketMatchup) => {
    if (node.children?.[0]) {
      traverse(node.children[0]);
    }
    if (node.children?.[1]) {
      traverse(node.children[1]);
    }
    if (node.round === matchup.round && node.matchup === matchup.matchup) {
      node.winner = matchup.winner;
      node.winningSong = matchup.winningSong;
      node.loser = matchup.loser;
      node.losingSong = matchup.losingSong;
      node.winVotes = matchup.winVotes;
      node.lossVotes = matchup.lossVotes;
      node.judgeVote = matchup.judgeVote;
    }
  };
  traverse(tree);
  return;
}

function addRemaingPicks(tree: BracketMatchup, picks: Pick[]) {
  const traverse = (node: BracketMatchup) => {
    if (node.children?.[0]) {
      traverse(node.children[0]);
    }
    if (node.children?.[1]) {
      traverse(node.children[1]);
    }
    if (node.seeds?.length === 1) {
      const winner2 = node.children[0].winner;
      node.pick2 = winner2;
      node.player2 = getPlayerByPick(winner2, picks);
      node.pick2Seed = getSeedByPick(winner2, picks);
    } else {
      if (node.children && node.children[0]?.winner) {
        const winner1 = node.children[0].winner;
        node.pick1 = winner1;
        node.player1 = getPlayerByPick(winner1, picks);
        node.pick1Seed = getSeedByPick(winner1, picks);
      }
      if (node.children && node.children[1]?.winner) {
        const winner2 = node.children[1].winner;
        node.pick2 = winner2;
        node.player2 = getPlayerByPick(winner2, picks);
        node.pick2Seed = getSeedByPick(winner2, picks);
      }
    }
  };
  traverse(tree);
  return;
}

export function buildBracket(
  bracketSkeleton: BracketMatchup[],
  picks: Pick[],
  matchups: Matchup[]
) {
  const leftTree = structuredClone(bracketSkeleton[0]);
  const rightTree = structuredClone(bracketSkeleton[1]);

  // add picks to each tree
  picks.forEach((pick) => addInitialPick(leftTree, pick));
  picks.forEach((pick) => addInitialPick(rightTree, pick));
  matchups.forEach((matchup) => addWinLoss(leftTree, matchup));
  matchups.forEach((matchup) => addWinLoss(rightTree, matchup));
  addRemaingPicks(leftTree, picks);
  addRemaingPicks(rightTree, picks);

  return [leftTree, rightTree];
}
