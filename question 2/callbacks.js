function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(resolve({ message: "delayed success!" }), 500);
  });
}

function delayedException() {
  return new Promise((resolve, reject) => {
    setTimeout(reject({ error: "delayed exception!" }), 500);
  });
}

delayedSuccess().then((out) => console.log(out));
delayedException().catch((out) => console.error(out));
