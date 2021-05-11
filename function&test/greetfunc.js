var greetLangRadio = function() {
    // creating varibale
        var LanguageMsg = '';
        var names = '';

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
         *@param {*} 
         */
        function checkErrors(name,language) {
            if (name == ''){
                return 'Please pass a name'
            } 
            if (language == '' || language == undefined){
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

    // function that pass lang and the name
        function greetnames(){
            return LanguageMsg + names
        }

    
        return {
            greetnames,
            langON,
            checkErrors,
            capFirstLetter
        }
    }