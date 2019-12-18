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

function encrypt(){
    let plaintext = prompt('Type plaintext here');
    let ciphertext = '';
    ciphertext = plaintext.replace('b','nxt')plaintext.replace('e','hhk')plaintext.replace('a','ddk')plaintext.replace('t','bbk');
    document.getElementById("ciphertext").innerHTML = ciphertext; 
}


function decrypt(){
    let plaintext = prompt('Type plaintext here');
    let ciphertext = '';
    ciphertext = plaintext.replace('nxt','b')plaintext.replace('hhk','e')plaintext.replace('ddk','a')plaintext.replace('bbk','t');
    document.getElementById("ciphertext").innerHTML = ciphertext; 
}
    