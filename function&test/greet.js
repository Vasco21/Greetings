var greetButton = document.querySelector('.greetButton')
var greetText = document.querySelector('.greetText')
var namesList = document.querySelector('.namesList')
var listButton = document.querySelector('.listButton')
var greetTextHolder = document.querySelector('.greetTextHolder')
var count = document.querySelector('.numberCounter')
var restButton = document.querySelector('.resetButton')
var errorMessage = document.querySelector('.errorMessage')



var storedNamesList = []

//retrive the names from local storage


var greetLang = greetLangRadio()


greetButton.addEventListener('click', function(){
    var checkedlanguageElem = document.querySelector("input[name='languageRadio']:checked")
    var namePerson = greetTextHolder.value
    
    if (!checkedlanguageElem && namePerson ==""){
        errorMessage.innerHTML = "Please insert a name and Select a language!";
        return 
    } 
    if (!checkedlanguageElem){
        errorMessage.innerHTML = "Please Select a language!"
    } 
    if (namePerson == "" || !/^[a-zA-Z]*$/.test(namePerson)) {
        errorMessage.innerHTML = "insert your name not numbers or any characters!";
        return;
    }
    
    var checkedlanguage = checkedlanguageElem.value
    var personNameCapFirstLetter = greetLang.capFirstLetter(namePerson)
    if (checkedlanguageElem && /^[a-zA-Z]*$/.test(namePerson)){
        
        greetLang.langON(checkedlanguage, personNameCapFirstLetter)
        
        greetText.innerHTML = greetLang.greetnames()
        count.innerHTML = greetLang.nameLists(personNameCapFirstLetter)
    }
    setTimeout(function(){
        errorMessage.innerHTML = ""
    }, 1000)
    
    setTimeout(function(){
        greetText.innerHTML = ""
    }, 5000)
    greetTextHolder.value = ""
    dispalyNames();
})

/**
 * This button event listener handles the display of names stored in the localStorage
 */
listButton.addEventListener('click', function(){
    dispalyNames()
})

function dispalyNames() {
    // Find a <table> element with id="myTable"
    var table = document.createElement("TABLE");
    table.border = "1";
    //Get localStorage list of names
    storedNamesList = JSON.parse(localStorage.getItem('NamesStored'));
    //Iterate through the list to create rows and cells
    for (var i = 0; i < storedNamesList.length; i++) {
        //Create an empty <tr> element and add it to the 1st position of the table
        row = table.insertRow(-1);
         //Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell = row.insertCell(-1);
        //Get current row name
        cell.innerHTML = storedNamesList[i].name;
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell2 = row.insertCell(-1);
        //Get current row count value
        cell2.innerHTML = storedNamesList[i].count;
    }
    var dvTable = document.getElementById("namesList");
    //If you want to create a new paragraph, with text, remember to create the text as a Text node which you append to the paragraph, then append the paragraph to the document.
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

restButton.addEventListener('click', function(){
    localStorage.clear()
    alert("successfully reset your greetings page");
    location.reload()
    
});






