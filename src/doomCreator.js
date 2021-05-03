


export const doomCreator = () => {

    let firstName = ''
    let lastName = ''

    const wordBank = [
        'electric', 'bong', 'wizard', 'witch','mountain', 'acid',
        'black','weed', 'doom', 'throne', 'goat', 'sleep', 
        'pot', 'sword', 'skull', 'ghost', 'wolf', 'hunter',
        'ripper', 'necromancer', 'dark', 'corpse'
    ]

    do {
        firstName = generateFirstName( wordBank )
        lastName = generateSecondName( wordBank )
    } while ( firstName === lastName )    

    return firstName + ' ' + lastName

}



const generateFirstName = w => {

    let firstName = ''

    do{
        firstName =  generateWord( w )
    } while ( firstName === 'hunter' ) 

    return firstName

}

const generateSecondName = w => {

    let secondName = ''

    do {
        secondName = generateWord( w )
    } while ( secondName === 'electric' || secondName === 'black' )

    return secondName
}

const generateWord = w => {
    return w[ Math.floor( Math.random() * w.length ) ]
}
