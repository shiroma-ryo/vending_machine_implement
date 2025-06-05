import * as readline from "readline";

const question = (prompt: string) => {
  const rlInterface = readline.createInterface(
    process.stdin,
    process.stdout,
  );

  return new Promise((resolve) => {
    rlInterface.question(prompt, (answer) => {
      resolve(answer);
      rlInterface.close();
    });
  });
};
export { question };