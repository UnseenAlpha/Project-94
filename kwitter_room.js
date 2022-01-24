const firebaseConfig = {
  apiKey: "AIzaSyC7lP2n7hunU67dkkC8hB4RdS5uFz2Bwlc",
  authDomain: "kwitter-2b58e.firebaseapp.com",
  projectId: "kwitter-2b58e",
  storageBucket: "kwitter-2b58e.appspot.com",
  messagingSenderId: "498043714049",
  appId: "1:498043714049:web:09ddaf27c998ecb5fd5e00"
};

  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;

     });});}
getData();

function logout(){
  window.location = "index.html";
}

document.getElementById("username").innerHTML = user_name;