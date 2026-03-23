const runCallbackExample = require("./examples/callback");
const runPromiseExample = require("./examples/promise");
const runAsyncExample = require("./examples/async");

async function runExamples() {
  runCallbackExample();

  await new Promise((resolve) => setTimeout(resolve, 3000));
  await runPromiseExample();
  await runAsyncExample();
}

runExamples();
