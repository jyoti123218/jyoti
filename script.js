function showAlert(){
    alert('hello! this is a javascript alert.');
}
function changeText(){
    document.getElementById('text') .innerHTML='text changed';
}
function handleClick(){
    document.getElementById('clickMessage').innerHTML='button clicked!';
}
function validateForm(){
    let name=document.getElementById('name').value;
    if(name =='') {
        alert('please enter your name.');
        return false;
    }
    return true;
    }
    function checkNumber() {
        let num = parseInt(document.getElementById('numberInput').value);
        let result =num > 10 ? 'greater than 10' : '10 or less';
        document.getElementById('numberResult').innerHTML =result;
    }
    function checkage() {
    let age = parseInt(document.getElementById('ageInput').value);
    if(age >=18) {
        document.getElementById('ageresult').innerHTML = 'you are an adult';
    } else {
        document.getElementById('ageresult').innerHTML = 'you are a minor';
    }
}
function displayArrayItem() {
    let items = ['Apple', 'Banana', 'cherry', 'date', 'elderberry'];
    let index = parseInt(document.getElementById('arrayindex').value);
    let result = items[index] || 'invalid index';
    document.getElementById('arrayresult').innerHTML = result;
}