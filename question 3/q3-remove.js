import * as fs from "fs";
import * as process from "process";

function deleteLogs() {
  const dir = "./logs";
  if (!fs.existsSync(dir) || fs.readdirSync(dir).length === 0) {
    console.log("Directory is empty or does not exist");
  } else {
    process.chdir(dir);
    for (let index = 1; index <= 10; index++) {
      fs.unlinkSync(`log${index}.txt`, function (err) {
        if (err) console.error(err);
      });
      console.log(`log${index}.txt deleted!`);
    }
    process.chdir("../");
    fs.rmSync(dir, { recursive: true, force: true });
    if (!fs.existsSync(dir)) {
      console.log("Logs directory deleted");
    } else {
      console.error("Error deleting directory");
    }
  }
}

deleteLogs();
