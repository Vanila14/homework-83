const myForm = {
    name: 'Alina',
    age: 17,
    hobby:'bicycling',
    myFavouriteColor:'orange',
}
console.log(myForm)

console.log('=========================')

const user = {
    alina: {
        age: 17,
        Hello(name) {
            console.log(`hello ${name}`)
        }
    }
}
console.log(user)
user.alina.Hello('Alina')

console.log('=========================')

const number = 0
const users = [
    {
        name: 'Alina',
        age: 17,
        isAdmin: false
    },
    {
        name: 'alex',
        age: 12,
        isAdmin: true        
    },
    {
        name: 'masha',
        age: 47,
        isAdmin: true
    },
    {
        name: 'julia',
        age: 45,
        isAdmin: true
    },
    {
        name: 'Alina',
        age: 38,
        isAdmin: false
    },
    {
        name: 'chloe',
        age: 19,
        isAdmin: false
    }
]
    for( let i =0; i<users.length; i++){
        if(users[i].isAdmin == false ){
            console.log(number[i])
        }
    }



