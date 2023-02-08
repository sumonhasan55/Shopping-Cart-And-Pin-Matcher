function getPin() {
    const Pin =  codeGenarator();
    const pinString = Pin + '';
    if (pinString.length === 4) {
        return Pin; 
    } else {
        return codeGenarator();
    }
};


function codeGenarator() {
    const number = Math.round(Math.random()*10000)
    return number;
};

document.getElementById('generator-btn').addEventListener('click',function(){
    const pin =getPin()
    
    const displayPin = document.getElementById('display-pin');
    const displayPinValue = displayPin.value;
    displayPin.value = pin;

});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText
    const verifyPinField = document.getElementById('verify-pinfield');
    const verifyPinFieldValue = verifyPinField.value;
    const PreviousTypedNumber = verifyPinField.value;

    if (isNaN(number)) {
        console.log('clicked')
        if (number === 'C'){
            verifyPinField.value = '';
        }
        else if(number === '>'){
            const digits = PreviousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            verifyPinField.value= remainingDigits;
        }
    }
        
    else {
        const NewTypedNumber = PreviousTypedNumber + number;
        verifyPinField.value = NewTypedNumber;
    }
     
});
//pin cheack 

document.getElementById('submit-btn').addEventListener('click', function(){
  const generatePinField = document.getElementById('display-pin');
  const generatePin = generatePinField.value;

  const typedPinField = document.getElementById('verify-pinfield');
  const typedPin = typedPinField.value;

  if (generatePin === typedPin) {
   alert('✅ &nbsp; Pin Matched... Secret door is opening for you')

    
  } else {
    const Failuremsg = document.getElementById('notify-failure');
    console.log(Failuremsg)
   alert('❌ &nbsp; Pin Didn t Match, Please try again')
   
  }
  generatePinField.value= '';
  typedPinField.value = '';
});



