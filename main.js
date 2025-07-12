function getPosts(userId) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  request.responseType = "json";
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let posts = request.response;
      document.getElementById("posts").innerHTML = "";
      for (post of posts) {
        let content = `
          <div id="post">
            <h3>${post.title}</h3>
            <h4>
              ${post.body}
            </h4>
          </div>`;
        document.getElementById("posts").innerHTML += content;
      }
    } else {
      alert("error");
    }
  };
}

function getUsers() {
  let request = new XMLHttpRequest(); //créer une requête HTTP (comme GET, POST, etc.) depuis JavaScript vers un serveur.
  request.open("GET", 'https://jsonplaceholder.typicode.com/users'); // préparer une requête HTTP de type GET vers l’URL .
  request.responseType = "json"; //recevoir automatiquement la réponse du serveur au format JSON.
  request.send(); // → envoie la requête.
  request.onload = function() {                     // 	Prépare une fonction pour plus tard, quand la réponse arrive
    if(request.status >= 200 && request.status < 300){
          let users = request.response;
          document.getElementById("users").innerHTML = "";
          for (user of users){
            let content = `
               <div id="user" onclick="userClicked(${user.id}, this)">
                 <h3>${user.name}</h3>
                 <h3>${user.email}</h3>
               </div>
               `
            document.getElementById("users").innerHTML += content;   
               ;
          }

    } else {
      alert("error");
    }

  }

}

getPosts(3);
getUsers();

function userClicked(id, ele) {
  getPosts(id);
  let selectedElements = document.getElementsByClassName("selected");
  for(element of selectedElements){
    element.classList.remove("selected");
  }
  ele.classList.add("selected");
}
