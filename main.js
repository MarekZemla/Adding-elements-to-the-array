//1.
const names = [];
//6.
const div = document.querySelector('div');
//3.
const addName = (e) => {
e.preventDefault();
const input = document.querySelector('input');
//4.
const name = input.value;

//9.
if(input.value.length) {
//10.
    for(arrayName of names){
        if(arrayName === name ) {
            alert('Already entered !'); 
            return
        } 
    }

//5.
names.push(name);
//7.
div.textContent += name+", ";
//8.
input.value = "";
}
}
//2.
document.querySelector('button').addEventListener('click', addName);

