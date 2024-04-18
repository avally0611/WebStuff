
const para = document.getElementById('hello');
  
const baseUrl = 'http://localhost:8383/'

//performs an HTTP request and returns a promise object containing an HTTP response
const responsePromise = fetch(`${baseUrl}api/recruits/`);

function promiseSuccess(response) {
    //set inner text to something in the response object

    //HTTP request/response cycle
    console.log("Success: " + response.status);
    //console.log(response);

    //print data from response object
    jsonPromise = response.json()
    jsonPromise.then(jsonPromiseFunction, jsonPromiseFunctionFailure);

}


function jsonPromiseFunction(data){
    console.log(data);

}

function jsonPromiseFunctionFailure(error){
    console.log(error);
}

function promiseFailure(error) {
    console.log("Failure: " + error.status);
    console.log(error);
}   

responsePromise.then(promiseSuccess, promiseFailure);


