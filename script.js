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
    ciphertext = plaintext.replace('a'='b').replace('b'='o').replace('c'='p').replace('d'='q').replace('e'='r').replace('f'='s').replace('g'='t').replace('h'='u').replace('i'='v').replace('j'='w').replace('k'='x').replace('l'='y').replace('m'='z').replace('n'='a').replace('o'='b').replace('p'='c').replace('q'='d').replace('r'='e').replace('s'='f').replace('t'='g').replace('u'='h').replace('v'='i').replace('w'='j').replace('x'='k').replace('y'='l').replace('z'='m');
    document.getElementById("ciphertext").innerHTML = ciphertext; 
}


function Decrypt(){
    let plaintext = prompt('Type plaintexts here');
    let ciphertext = '';
    ciphertext = plaintext.replace('b'='a').replace('o'='b').replace('p'='c').replace('q'='d').replace('r'='e').replace('s'='f').replace('t'='g').replace('u'='h').replace('v'='i').replace('w'='j').replace('x'='k').replace('y'='l').replace('z'='m').replace('a'='n').replace('b'='o').replace('c'='p').replace('d'='q').replace('e'='r').replace('f'='s').replace('g'='t').replace('h'='u').replace('i'='v').replace('j'='w').replace('k'='x').replace('l'='y').replace('m'='z');
    document.getElementById("ciphertext").innerHTML = ciphertext; 
}
    