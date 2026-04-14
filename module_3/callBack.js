//callback

function pakhiBhai(callMeBack, patro , patri){
    console.log("callMeBack Perameter",callMeBack);
    console.log("value of patro",patro);
    if(patri){
        console.log(callMeBack,'patro');
    }
} 

function CallSomeOne(person){
    console.log("Calling",person);
}
// CallSomeOne("Jodu");


pakhiBhai(CallSomeOne,"jodu",'modu');


myBtn.addEventListener('Click',()=>{

})

const addFirst=x=>x+5
[1,2,3,5].map(addFirst)