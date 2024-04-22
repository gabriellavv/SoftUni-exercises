function loadRepos() {

   let xhttp = new XMLHttpRequest();

   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

         // replace the text content of a div element with id "res" with the value of the responseText property of the request. 
         //Do not format the response in any way.
         let divRef = document.getElementById("res");
         divRef.textContent = xhttp.responseText;
      }
   }

   xhttp.open("GET", "https://api.github.com/users/testnakov/repos", true);
   xhttp.send();

}