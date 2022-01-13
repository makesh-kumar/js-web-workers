function loadWebWorker() {
  const ele = document.querySelector(".webworker-data");
  let worker = new Worker("./webworker.js");
  //   console.log(worker);
  worker.onmessage = (event) => {
    // console.log(event.data);
    ele.innerHTML = event.data;
  };
}
loadWebWorker();

const ele2 = document.querySelector(".normal-data");
setInterval(function () {
  ele2.innerHTML = Math.floor(Math.random() * 1000);
}, 1000);
