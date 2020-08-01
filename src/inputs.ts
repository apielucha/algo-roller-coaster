import path from 'path';
import NRL from 'n-readlines';

type Inputs = {
  maxPlaces: number;
  maxTurns: number;
  groupsCount: number;
  groups: number[];
};

/**
 * Prompt user for data and resolve the answer.
 *
 * @param {string} question - Question to ask the user.
 * @returns {Promise<string>} User's answer.
 */
// async function prompt(question: string = ''): Promise<string> {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//
//   return new Promise(resolve => {
//     rl.question(question, (answer: string) => {
//       resolve(answer);
//       rl.close();
//     });
//   });
// }

/**
 * Retrieve user inputs.
 *
 * @returns {Promise<Inputs>} Inputs given by user.
 */
async function get(): Promise<Inputs> {
  const liner = new NRL(path.resolve(__dirname, '../resources/roller_coaster.harder'));

  const [L, C, N]: number[] = liner
    .next()
    .toString()
    .split(' ')
    .map((el: string) => parseInt(el, 10));

  const P: number[] = [];
  for (let i = 0; i < N; i += 1) {
    P.push(parseInt(liner.next().toString(), 10));
  }

  return { maxPlaces: L, maxTurns: C, groupsCount: N, groups: P };
}

export { get };
export type { Inputs };
