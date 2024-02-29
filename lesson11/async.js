function hi() {
  console.log("hi");
}

function checkElement() {
  console.log("searching for ui element");
}
setTimeout(hi, 1000); //2nd

function hiWithoParam(name) {
  console.log(`Hi ${name}`);
}

const timeoutId = setTimeout(hiWithoParam, 2000, "Elephant"); //not executed
clearTimeout(timeoutId);

setTimeout(hiWithoParam, 2000, "Koala"); //3rd

hiWithoParam("Koala2"); //1st

const intervalId = setInterval(checkElement, 1000);
clearInterval(intervalId);

let timeoutId2 = setTimeout(function check() {
  console.log("Checking the UI header element");
  timeoutId2 = setTimeout(check, 500);
}, 1000);
clearTimeout(timeoutId2);

//promise
// new Promise(
//     function (resolve, reject) { ··· if (···) {
//     resolve(value); // success
// } else {
//     reject(reason); // failure
// } } );
let myOwnPromise = new Promise(function (resolve, reject) {
  resolve("result of function based on promise- good");
  reject(new Error("bad result of promise"));
});

myOwnPromise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

let myOwnPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Good result"), 1000);
});

myOwnPromise2.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

let myOwnPromise3 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("Errorka"), 1000);
});

// myOwnPromise3.catch(() => "value").then(console.log);
myOwnPromise3
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("final message of promise"));

// new Promise((resolve) => resolve(value));
Promise.resolve(200).then((data) => {
  console.log(data);
});

//Promise.all([myOwnPromise, myOwnPromise2, myOwnPromise3]); //if one from array promise failed - all will be failed
//Promise.allSettled([myOwnPromise, myOwnPromise2, myOwnPromise3]); //if one from array promise failed - we receive the result of all promises

async function hello() {
  return "Hello";
}
/* console.log(hello()); */ hello().then(console.log);

const urlFetch = "https://api.github.com/users/github";
async function getDataApi() {
  const response = await fetch("https://api.github.com/users/github");
  const data = await response.json();
  return data;
}
// getDataApi().then(console.log);
getDataApi(urlFetch).then(console.log);

const response = await fetch("https://api.github.com/users/github");
const data = await response.json();
console.log(data);

async function postDataApi(url_param) {
  const post_response = await fetch({
    method: "POST",
    url: url_param,
    body: JSON.stringify({ name: "Jane Dou" }),
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer 7462957h4ri23y4",
    },
  });
  const post_r_data = await post_response.json();
  return post_r_data;
}
getDataApi("https://api.github.com/users/github").then(console.log);

async function postDataApi2(url_param) {
  try {
    const post_response = await fetch({
      method: "POST",
      url: url_param,
      body: JSON.stringify({ name: "Jane Dou" }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer 7462957h4ri23y4",
      },
    });
    const post_r_data = await post_response.json();
    return post_r_data;
  } catch (error) {
    console.log(error);
  }
}
