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
    ciphertext = plaintext.replace(/a/g,'F1').replace(/b/g,F2).replace(/c/g,'F3').replace(/d/g,'F4').replace(/e/g,'F5').replace(/f/g,'F6').replace(/g/g,'F7').replace(/h/g,'F8').replace(/i/g,'F9').replace(/j/g,'F10').replace(/k/g,'F11').replace(/l/g,'F12').replace(/m/g,'F13').replace(/n/g,'F14').replace(/o/g,'F15').replace(/p/g,'F16').replace(/q/g,'F17').replace(/r/g,'F18').replace(/s/g,'F19').replace(/t/g,'F20').replace(/u/g,'F21').replace(/v/g,'F22').replace(/w/g,'F23').replace(/x/g,'F24').replace(y/g,'F25').replace(/z/g,'F26');
    document.getElementById("ciphertext").innerHTML = ciphertext; 
}


function Decrypt(){
    let plaintext = prompt('Type plaintexts here');
    let ciphertext = '';
    ciphertext = plaintext.replace(/F1/g,'a').replace(/F2/g,'b').replace(/F3/g,'c').replace(/F4/g,'d').replace(/F5/g,'e').replace(/F6/g,'f').replace(/F7/g,'g').replace(/F8/g,'h').replace(/F9/g,'i').replace(/F10/g,'j').replace(/F11/g,'k').replace(/F12/g,'l').replace(/F13/g,'m').replace(/F14/g,'n').replace(/F15/g,'o').replace(/F16/g,'p').replace(/F17/g,'q').replace(/F18/g,'r').replace(/F19/g,'s').replace(/F20/g,'t').replace(/F21/g,'u').replace(/F22/g,'v').replace(/F23/g,'w').replace(/F24/g,'x').replace(/F25/,'y').replace(/F26/g,'z');
    document.getElementById("ciphertext").innerHTML = ciphertext; 
}
    