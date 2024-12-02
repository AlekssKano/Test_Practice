type UserType ={
    name: string,
    age: number,
    address: {title:string}
}


export var user={
    name: 'Dimych',
        age: 32
}

function increasingAge(u:UserType){
    u.age++
}

// test('big test', ()=>{
//     var user:UserType={
//         name:'Dimych',
//         age: 32,
//     }
//
// increasingAge(user)
//
// expect(user.age).toBe(33)
// })

test('array test', ()=>{
    var users =[
        {name:'Dimych',
            age: 32,
        },
        {name:'Dimych',
            age: 32,
        }
    ]

    let admins=users
admins.push({name:'Bandit', age:10})
    expect(users[2]).toEqual({name:'Bandit', age:10})


})
test('vauetype test',()=>{
    let usersCount =100;
    let adminsCount=usersCount
adminsCount = 101

})
test('reference type array test', ()=>{

const address ={
    title:"Minsk"
}
    var user:UserType =
    {name:'Dimych',
        age: 32,
        address:address}
        let user2:UserType =
    {name:'Natashs',
        age: 32,
        address:address
    }

    const users =[user, user2, {name:'Misha', age: 4, address: address}]
    const admins =[user, user2]
    admins[0].name= "Dmitry"
    expect(users[0].name).toBe("Dmitry")


})