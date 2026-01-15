function requestValidator(httpRequestObj) {
  // Write a function that validates an HTTP request object. 
  // The object has the properties method, uri, version, and message. 
  // Your function will receive the object as a parameter and has to verify that each property meets the following requirements:


  // •	method - can be GET, POST, DELETE or CONNECT
  if (!httpRequestObj.hasOwnProperty("method")) {
    throw new Error("Invalid request header: Invalid Method");
  };
  const methodData = httpRequestObj.method;
  const validMethodsArr = ["GET", "POST", "DELETE", "CONNECT"];
  if (!validMethodsArr.includes(methodData)) {
    throw new Error("Invalid request header: Invalid Method");
  };


  // •	uri - must be a valid resource address or an asterisk (*); 
  // a resource address is a combination of alphanumeric characters and periods; 
  // all letters are Latin; the URI cannot be an empty string
  if (!httpRequestObj.hasOwnProperty("uri")) {
    throw new Error("Invalid request header: Invalid URI");
  };

  let uriData = httpRequestObj.uri;
  if (uriData === "") {
    throw new Error("Invalid request header: Invalid URI");
  };

  let regexp = /^[a-z.0-9]+$/
  let containsValidUri = regexp.test(uriData);

  if (!containsValidUri) {
    if (uriData === "*") {
      containsValidUri = true;
    } else {
      throw new Error("Invalid request header: Invalid URI");
    }
  };


  // •	version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
  if (!httpRequestObj.hasOwnProperty("version")) {
    throw new Error("Invalid request header: Invalid Version");
  };

  const versionData = httpRequestObj.version;
  const validVersionsArr = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  if (!validVersionsArr.includes(versionData)) {
    throw new Error("Invalid request header: Invalid Version");
  };


  // •	message - may contain any number of non-special characters (special characters are <, >, \, &, ', ")
  let invalidCharsInMessage = ['<', '>', "\\", "&", "'", '"'];
  if (httpRequestObj.hasOwnProperty('message')) {
    httpRequestObj.message.split('').forEach(element => {
      if (invalidCharsInMessage.includes(element)) {
        throw new Error(`Invalid request header: Invalid Message`);
      }
    });
  } else {
    throw new Error(`Invalid request header: Invalid Message`);
  }

  
  // If a request is valid, return it unchanged:
  return httpRequestObj;
}

console.log(requestValidator({
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: '',
}
));
requestValidator({               // Invalid request header: Invalid Method
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }
  );
requestValidator({                // Invalid request header: Invalid Version
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }
  );




  // Решение 2: 


//   function requestValidator (inputObj) {

//     let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
//     let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0" ];
//     let invalidCharsInMessage = ['<', '>', "\\","&", "'",'"']
//     let pattern = /^[\w.]+$/g;

//     if (inputObj.hasOwnProperty("method")) {
//         if (!validMethods.includes(inputObj["method"])) {
//             throw new Error(`Invalid request header: Invalid Method`);
//         }
//     } else {
//         throw new Error(`Invalid request header: Invalid Method`);
//     };

//     if (inputObj.hasOwnProperty("uri")) {
//         if(!pattern.test(inputObj.uri) || inputObj.uri.length < 1) {
//             if (inputObj.uri != "*") {
//                 throw new Error(`Invalid request header: Invalid URI`);
//             } 
//         }
//     } else {
//         throw new Error(`Invalid request header: Invalid URI`);
//     };

//     if (!inputObj.hasOwnProperty("version") || !validVersions.includes(inputObj.version) ) {
//             throw new Error(`Invalid request header: Invalid Version`);
//     };
    
//     if (inputObj.hasOwnProperty('message')) {
//         inputObj.message.split('').forEach(element => {
//             if (invalidCharsInMessage.includes(element)) {
//                 throw new Error(`Invalid request header: Invalid Message`);
//             }
//         });
//     } else {
//         throw new Error(`Invalid request header: Invalid Message`);
//     }
    


// return inputObj
// }
// requestValidator( {
//     method: 'POST',
//     version: 'HTTP/2.0',
//     message: 'rm -rf /*'
// })