//to create a file for stategy definition

const Animals={ dog(){
return 'barks'},cat(){
return 'meows'} 
default :
return 'choose any animal'};

function AnimalSound(animal){
const speak=Animals[animal] || Animal.default;
console.log(animal  +"says"+ speak());
}

//calling function

AnimalSound('dog');  //return dog says barks
AnimalSound('cat');  //return cat says meows

