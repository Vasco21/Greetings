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

var ONE = 1;
var ZERO = 0;
var storedArray =  [];

/**
 * This method handles the insert and updates of name objects being added to the localstorage
 * @param {*} incomingName 
 * @returns {*} storedArray count
 */
function nameLists(incomingName) {
    let objectindex;
    //Get existing array of objects in localStorage
    storedArray = JSON.parse(localStorage.getItem('NamesStored'));
    if(storedArray) {
    //Filter incomingName name in existing array on localstorage
    //creates an array filled with all array elements that pass a test (provided as a function).    
        let existingobject = storedArray.filter(x => x.name === incomingName)[ZERO]
        if(existingobject) {
            //Get index of object for latter use after edit
            objectindex = storedArray.indexOf(existingobject)
            //increment the existing count value
            storedArray[objectindex].count = existingobject.count + ONE
        } else {
            storedArray.push({name : incomingName , count: ONE})
        }
    } else {
        storedArray = []
        storedArray.push({name : incomingName , count: ONE})
        localStorage.setItem('NamesStored', JSON.stringify(storedArray))
        return ONE
    }
    //Update NamesStored array in localstorage with new added data
    localStorage.setItem('NamesStored', JSON.stringify(storedArray))
    return storedArray.length
}

greetButton.addEventListener('click', function(){
    var checkedlanguageElem = document.querySelector("input[name='languageRadio']:checked")
    var namePerson = greetTextHolder.value
    
    if (!checkedlanguageElem && namePerson ==""){
        errorMessage.innerHTML = "Please insert a name and Select a language!";
        errorMessageTimeout()
        return;
    } 
    if (!checkedlanguageElem){
        errorMessage.innerHTML = "Please Select a language!"
        errorMessageTimeout()
        return
    } 
    if (namePerson == "" || !/^[a-zA-Z]*$/.test(namePerson)) {
        errorMessage.innerHTML = "insert your name not numbers or any characters!";
        errorMessageTimeout()
        return;
    }
    if(checkedlanguageElem !== null) {
        var checkedlanguage = checkedlanguageElem.value
        var personNameCapFirstLetter = greetLang.capFirstLetter(namePerson)
        if (checkedlanguageElem && /^[a-zA-Z]*$/.test(namePerson)){
            
            greetLang.langON(checkedlanguage, personNameCapFirstLetter)
            
            greetText.innerHTML = greetLang.greetnames()
            count.innerHTML = nameLists(personNameCapFirstLetter)
        }
    }

    setTimeout(function(){
        greetText.innerHTML = ""
    }, 2000)
    greetTextHolder.value = ""
    dispalyNames();
})

function errorMessageTimeout() {
    setTimeout(function(){
        errorMessage.innerHTML = ""
    }, 2000)
}


/**
 * This button event listener handles the display of names stored in the localStorage
 */
listButton.addEventListener('click', function(){
    dispalyNames()
});

function dispalyNames() {
    // Find a <table> element with id="myTable"
    var table = document.createElement("TABLE");
    table.border = "1";
    //Get localStorage list of names
    storedNamesList = JSON.parse(localStorage.getItem('NamesStored'));
    //Iterate through the list to create rows and cells
    if(storedNamesList !== null) {
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
        //create a new paragraph, with text, remember to create the text as a Text node which you append to the paragraph, then append the paragraph to the document.
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }
}
function done(){

    localStorage.clear();
    location.reload()
   
}
restButton.addEventListener('click', function(){
    var resetCheck = document.querySelector('.resetButton')
        setTimeout(function(){
            done()
        }, 2000)
        errorMessage.innerHTML = "You are successfuly reset a page!!!";
        
    
});

window.onload = function() {
    storedNamesList = JSON.parse(localStorage.getItem('NamesStored'));
    if(storedNamesList !== null) {
        count.innerHTML = storedNamesList.length;
    }
}