import dataFromFile from './example.json' with { type: 'json' };
console.log(dataFromFile);

async function getSingleUserData() {
  const response = await fetch('https://reqres.in/api/users/2');
  const data = await response.json();
  console.log(data); // чиста відповідь JSON
  // console.log(response); //багато непотрібного добра
}

let nonUsed;
getSingleUserData();

// JSON =>
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
  const postResponse = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: dataFromFile,
  });

  const statusCode = postResponse.status;
  console.log(statusCode);

  //   let data_response = JSON.parse(post_response);
  //   console.log(data_response);
}

createSingleUser();

const convertJSONinJS = JSON.stringify(dataJSONobject);
console.log(convertJSONinJS);
