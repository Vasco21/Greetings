  var greetLangRadio = function() {
    // creating varibale
        var LanguageMsg = '';
        var names = '';
        var ONE = 1;
        var ZERO = 0;
        var nameList = []
        var storedArray = []
        var greetingsCounter = 0;
    // function that will pass the name with greetings

        function langON(languages, str) {
            
            if (languages == 'english'){
                LanguageMsg = 'Hello, '
            } if (languages == 'sesotho'){
                LanguageMsg = 'Dumela, '
            } if (languages == 'isixhosa'){
                LanguageMsg = 'Molweni, '
            }
            
            names = str
            
        }
        /**
         *This method/function does the error handling in case of non slected language or and empty string for the name 
         *
         */
        function checkErrors() {
            if (names == ''){
                return 'Please pass a name'
            } if (LanguageMsg == '' || LanguageMsg == undefined){
                return 'Please Select a Language'
            }
        }
    
        /**
         * This method/function uppercases the first charater of the string and lowercases the rest of the charaters
         * @param {*} str 
         */
        function capFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }

        /**
         * This method handles the insert and updates of name objects being added to the program
         * @param {*} incomingName 
         * @returns {*} storedArray count
         */
        function nameLists(incomingName) {
            let objectindex;
            //Get existing array of objects in localStorage
            storedArray = JSON.parse(localStorage.getItem('NamesStored'));
            if(storedArray) {
            //Filter incomingName name in existing array on localstorage    
               let existingobject = storedArray.filter(x => x.name === incomingName)[ZERO]
               if(existingobject) {
                   //Get index of object for later use after edit
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

    // function that pass lang and the name
        function greetnames(){
            return LanguageMsg + names
        }

    
        return {
            greetnames,
            langON,
            checkErrors,
            nameLists,
            capFirstLetter
        }
    }