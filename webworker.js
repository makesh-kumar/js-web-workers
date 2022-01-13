function startBackgroundTask() {
  setInterval(function () {
    postMessage(Math.floor(Math.random() * 1000));
  }, 1000);
}
startBackgroundTask();
