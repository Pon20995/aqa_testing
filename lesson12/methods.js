import dataFromFile from './example.json' with { type: 'json' };
console.log(dataFromFile);

async function getSingleUserData() {
  let response = await fetch('https://reqres.in/api/users/2');
  let data = await response.json();
  console.log(data); // чиста відповідь JSON
  // console.log(response); //багато непотрібного добра
}

getSingleUserData();

//JSON =>
// JSON.parse
// JSON.stringify

// const dataJSON = {
//   "name": 'Koala',
//   "job": 'worker'
// }

const dataJSONobject = {
  name: 'morpheus',
  job: 'leader',
};

async function createSingleUser() {
  const post_response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: dataFromFile,
  });

  let statusCode = post_response.status;
  console.log(statusCode);

  //   let data_response = JSON.parse(post_response);
  //   console.log(data_response);
}

createSingleUser();

let convertJSONinJS = JSON.stringify(dataJSONobject);
console.log(convertJSONinJS);
