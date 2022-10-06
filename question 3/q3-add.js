import * as fs from "fs";
import * as process from "process";

function randomText() {
  return (Math.random() + 1).toString(36).substring(2);
}

function createLogs() {
  const dir = "./logs";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log("Log directory created!");
  }
  process.chdir(dir);
  for (let index = 1; index <= 10; index++) {
    fs.appendFileSync(`log${index}.txt`, randomText(), function (err) {
      if (err) throw err;
    });
    console.log(`log${index}.txt created!`);
  }
}

createLogs();
