describe('The Greet with factory function' , function(){

    describe('Returning all the names', function(){
        var greetFunc = greetLangRadio()
        var vascoName = "Vasco" 
        var eddieName = "Eddie"
        var etiName = "Eti"
        it('Should return the name greated in english and add', function(){
            greetFunc.langON('english', vascoName)
            assert.equal('Hello, Vasco', greetFunc.greetnames())
        })
        it('Should return the name greated in sesotho and add', function(){
            greetFunc.langON('sesotho', etiName)
            assert.equal('Dumela, Eti', greetFunc.greetnames())
        })
        it('Should return the name greated in xhosa and add', function(){
            greetFunc.langON('isixhosa', eddieName)
            assert.equal('Molweni, Eddie', greetFunc.greetnames())
        });
    });

    describe('Error handling in case of non slected language or and empty string for the name', function(){
        var greetFunc = greetLangRadio()
        var vascoName = "Vasco" 
        it('Should return "Please pass a name" if the string is empy for name', function(){
          greetFunc.checkErrors('', 'sesotho')
          assert.equal('Please pass a name', greetFunc.checkErrors('', 'sesotho') )
        })

        it('Should return "Please Select a Language" if the radio has not been selected', function(){
            var name = greetFunc.langON('english', vascoName)
            var returnedMsg =  greetFunc.checkErrors(name, '')
            assert.equal('Please Select a Language', returnedMsg )
          })
    })
    describe('function uppercases the first charater' , function(){
        var eddieName = "Eddie"
        var vascoName = "Vasco" 
        it('should change the first letter to upperCase', function(){
            var greetFunc = greetLangRadio();
            assert.equal(vascoName, greetFunc.capFirstLetter(vascoName));
            
        });
        it('should change the uppercase to lower can when you write name', function(){
            var greetFunc = greetLangRadio();
            assert.equal(eddieName, greetFunc.capFirstLetter(eddieName));
            
        });
    });

    describe('Differnt languages and name', function(){
        var greetFunc = greetLangRadio()
        var vascoName = "Vasco" 
        it('Should return the name greated in Engilish', function(){
            greetFunc.langON('english', vascoName)
            assert.equal('Hello, Vasco', greetFunc.greetnames())
        })
        it('Should return the name greated in Sesotho', function(){
            greetFunc.langON('sesotho', vascoName)

            assert.equal('Dumela, Vasco', greetFunc.greetnames())
        })
        it('Should return the name greated in Xhosa', function(){
            greetFunc.langON('isixhosa', vascoName)
            assert.equal('Molweni, Vasco', greetFunc.greetnames())
        });
    });

    describe('Counter for the names in the localstorage', function(){
        var greetFunc = greetLangRadio()
        it('Should return the counter for the supplied values', function(){
            localStorage.clear()
            var count = 0
            count = greetFunc.nameLists('Vasco')
            count = greetFunc.nameLists('Peter')
            count =  greetFunc.nameLists('James')
            count =  greetFunc.nameLists('Peterson') 
            count =  greetFunc.nameLists('Vasco')
            count =  greetFunc.nameLists('Peter') 
            count =  greetFunc.nameLists('James')
            count =  greetFunc.nameLists('Peterson')
            assert.equal(4, count)
        });
    });


});


