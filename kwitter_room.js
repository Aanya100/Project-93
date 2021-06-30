
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCc2-AmIc6vGndXYiFnHfq6kdc40Cd0zrQ",
      authDomain: "kwitter-5a80d.firebaseapp.com",
      databaseURL: "https://kwitter-5a80d-default-rtdb.firebaseio.com",
      projectId: "kwitter-5a80d",
      storageBucket: "kwitter-5a80d.appspot.com",
      messagingSenderId: "940073498237",
      appId: "1:940073498237:web:7d315def632f581fc5a314",
      measurementId: "G-VPT91008WM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code  

      console.log("Room_name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
