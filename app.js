//VARIABLE DECLARATIONS
const characterAmountRang = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUpperCase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')

//CHAR_CODES FROM ASCII-CODES
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(
    arrayFromLowToHigh(123, 126)
)

//ADD EVENT LISTENER
characterAmountRang.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e =>{
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)
})

function generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols){
    console.log(SYMBOL_CHAR_CODES)
}

//FUNCTION TO LOOP THROUGH CHARCODE
function arrayFromLowToHigh(low, high){
    const array = []
    for(let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}

//FUNCTION......(e) EVENT AGUMENT
function syncCharacterAmount(e){
    const value = e.target.value
    characterAmountRang.value = value
    characterAmountNumber.value = value
}