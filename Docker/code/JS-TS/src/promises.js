const myPromise = new Promise((resolve, reject) => {
  reject(new Error("Something went wrong"));
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error.message);
  });