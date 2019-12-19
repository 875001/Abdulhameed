function angle3(){
    alert("give me the two angles and I will give you the third angle"); 
    let angle1=prompt("Enter angle 1");
    let angle2=prompt("Enter angle 2");
    let angle3=180- angle1 - angle2;
    alert("the 3rd angle is" + angle3);
}

function century(){
  // prompt user for the current_year
  // use their input to calculate the current_century
  // alert the user to the current_century
    

}

function tenfour(){
    for(let i = 0; i < 101 ; i++){
        if(i % 10 == 0 && i % 4 == 0){
            console.log("tenFour");
        }
        else if(i % 4 == 0){
            console.log("Four");
        }
        else if(i % 10 == 0){
            console.log("Ten");
        }
        else {
            console.log(i);
        }
    }
}


function test(){
    console.log("working!");
}

//  centryfromyear(95) returns (1)
//  centryfromyear(150) returns (2)
//  centryfromyear(295) returns (3)
//  centryfromyear(305) returns (4)
 
 
//  }

function wordlength(){
    let words = prompt("enter some texts");
    let howmany = words.length;
    alert("there are "+ howmany+" letters");
}

function login(){
    let username = prompt("username");
    let password = prompt("password");
    if(username == "abdul" && password == "June2003"){
        alert("Welcome")
    }
    else{
        alert("Invalid")
    }
}

function Encrypt(){
    let plaintext = prompt('Type plaintexts here');
    let ciphertext = '';
    ciphertext = plaintext.replace('a','d').replace('b','e').replace('c','f').replace('d','g').replace('e','h').replace('f','i').replace('g','j').replace('h','k').replace('i','l').replace('j','m').replace('k','n').replace('l','o').replace('m','p').replace('n','q').replace('o','r').replace('p','s').replace('q','t').replace('r','u').replace('s','v').replace('t','w').replace('u','x').replce('v','y').replce('w','z').replce('x','a').replce('y','b').replce('z','c');
    document.getElementById("ciphertext").innerHTML = ciphertext; 
}


function Decrypt(){
    let plaintext = prompt('Type plaintexts here');
    let ciphertext = '';
    ciphertext = plaintext.replace('d','a').replace('e','b').replace('f','c').replace('g','d').replace('h','e').replace('i','f').replace('j','g').replace('k','h').replace('l','i').replace('m','j').replace('n','k').replace('o','l').replace('p','m').replace('q','n').replace('r','o').replace('s','q').replace('t','q').replace('u','r').replace('v','s').replace('w','t').replace('x','u').replce('y','v').replce('z','w').replce('a','x').replce('b','y').replce('c','z');
    document.getElementById("ciphertext").innerHTML = ciphertext; 
}
    