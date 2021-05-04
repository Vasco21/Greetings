describe('The Greet with factory function' , function(){
    
    describe('Returning all the names', function(){
        var greetFunc = greetLangRadio()
        var allNames = []
        it('Should return the name greated in english and add', function(){
            greetFunc.langON('english', 'Vasco')
            allNames = greetFunc.nameLists(allNames)
            assert.equal('Hello, Vasco', greetFunc.greetnames())
        })
        it('Should return the name greated in sesotho and add', function(){
            greetFunc.langON('sesotho', 'Eti')
            allNames = greetFunc.nameLists(allNames)
            assert.equal('Dumela, Eti', greetFunc.greetnames())
        })
        it('Should return the name greated in xhosa and add', function(){
            greetFunc.langON('isixhosa', 'Eddie')
            allNames = greetFunc.nameLists(allNames)
            assert.equal('Molweni, Eddie', greetFunc.greetnames())
        });
    });

    describe('Error handling in case of non slected language or and empty string for the name', function(){
        var greetFunc = greetLangRadio()
        it('Should return "Please pass a name" if the string is empy for name', function(){
          greetFunc.checkErrors()
          assert.equal('Please pass a name', greetFunc.checkErrors() )
        })

        it('Should return "Please Select a Language" if the radio has not been selected', function(){
            greetFunc.langON('engilish', 'Vasco')
            greetFunc.checkErrors()
            assert.equal('Please Select a Language', greetFunc.checkErrors() )
          })
    })
    describe('function uppercases the first charater' , function(){

        it('should change the first letter to upperCase', function(){
            var greetFunc = greetLangRadio();
            assert.equal('Vasco', greetFunc.capFirstLetter('vasco'));
            
        });
        it('should change the uppercase to lower can when you write name', function(){
            var greetFunc = greetLangRadio();
            assert.equal('Eddie', greetFunc.capFirstLetter('eddie'));
            
        });
    });

    describe('Differnt languages and name   ', function(){
        var greetFunc = greetLangRadio()
        it('Should return the name greated in Engilish', function(){
            greetFunc.langON('english', 'Vasco')
            assert.equal('Hello, Vasco', greetFunc.greetnames())
        })
        it('Should return the name greated in Sesotho', function(){
            greetFunc.langON('sesotho', 'Vasco')

            assert.equal('Dumela, Vasco', greetFunc.greetnames())
        })
        it('Should return the name greated in Xhosa', function(){
            greetFunc.langON('isixhosa', 'Vasco')
            assert.equal('Molweni, Vasco', greetFunc.greetnames())
        });
    });


});


