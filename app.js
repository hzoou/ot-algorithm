const opParser = require("./operationParser");
const { inclusionTransform, merge } = require("./otAlgorithm");

const origin = `hello`;

const user1 = "helloa";
const parsed1 = opParser(origin, user1);
const operation1 = parsed1.getOperation();
operation1.unshift({ operator: "asdf", value: 123 });

const user2 = "hell";
const parsed2 = opParser(origin, user2);
const operation2 = parsed2.getOperation();
operation2.unshift({ operator: "asdf", value: 124 });

const history1 = inclusionTransform(operation1);
history1.unshift({ operator: "asdf", value: 180 });
const merge1 = merge(history1, origin);
const history2 = inclusionTransform(operation2, history1);
// history2.unshift({ operator: "asdf", value: 190 });
const merge2 = merge(history2, merge1);

console.log("operation1: ", operation1);
console.log("operation2: ", operation2);
console.log("history1: ", history1);
console.log("history2: ", history2);

console.log("merge1: ", merge1);
console.log("merge2: ", merge2);
