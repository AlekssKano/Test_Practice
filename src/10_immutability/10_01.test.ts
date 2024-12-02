import {
    addNewBooksToUser, addNewCompany, changeCompanyName,
    changingHouse,
    makeHairStyle,
    moveUser, removeBook, updateBook, updateCompanyTitle,
    upgradeUser,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";
import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;

export const a=2





test('reference type test', ()=>{
    let user: UserType ={
        name:'Dimych',
        hair:32,
        address:{city:'Minsk', house:2}
    }
    const awesomeUser=makeHairStyle(user,2)
// user=awesomeUser переназначение переменной с нашего контроля

    //
    // expect(user.hair).toBe(32)
    // expect(awesomeUser.hair).toBe(16)
    // expect(awesomeUser.address).toBe(user.address)


})


test('change Adreess', ()=>{
    let user: UserWithLaptopType ={
        name:'Dimych',
        hair:32,
        address:{city:'Minsk',
        house:12},
        laptop:
            {title:'ZenBook'}
    }
    const movedUser=moveUser(user,'Kiyv')
// user=movedUser


//     expect(user).not.toBe(movedUser)
//    expect(user.address).not.toBe(movedUser.address)
//     expect(user.laptop).toBe(movedUser.laptop)
// expect(movedUser.address.city).toBe('Kiyv')

})

test('update La[top to MacBook', ()=> {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop:
            {title: 'ZenBook'}
    }
    const upgradedUser:UserWithLaptopType = upgradeUser(user, 'Macbook')
// user=movedUser
//     expect(user).not.toBe(upgradedUser)
//     expect(user.laptop).not.toBe(upgradedUser.laptop)
//     expect(upgradedUser.laptop.title).toBe('Macbook')
//     expect(user.laptop.title).toBe('ZenBook')

})
test('change house number', ()=> {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop:
            {title: 'ZenBook'}
    }

    const changedHouse=changingHouse(user, 4)

        // expect(user).not.toBe(changedHouse)
        // expect(user.address.house).not.toBe(changedHouse.address.house)
        // expect(changedHouse.address.house).toBe(4)

}
)
test('books', ()=> {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
                title: 'ZenBook'
            },
        books: ['css', 'html', 'js', 'react']
            }


const upgradedUser = addNewBooksToUser(user, ['ts', 'restApi'])

    // expect(user).not.toBe(upgradedUser)
    // expect(user.books).not.toBe(upgradedUser.books)
    // expect(user.laptop.title).toBe(upgradedUser.laptop.title)
    // expect(user.address.house).toBe(upgradedUser.address.house)
    // expect(upgradedUser.books[4]).toBe('ts')
    // expect(upgradedUser.books[5]).toBe('restApi')
})
test('update book', ()=> {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }


    const upgradedUser = updateBook(user, ['js', 'ts'])
    // expect (upgradedUser.books).toBe('css', 'html', 'js', 'react')

    // expect(upgradedUser.books[2]).toBe('ts')
    //


})
test('remove Js book', ()=> {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }


    const upgradedUser = removeBook(user, 'js')
    // expect (upgradedUser.books).toBe('css', 'html', 'js', 'react')

    // expect(upgradedUser.books[2]).toBe('react')
    // expect(user.books[2]).toBe('js')
    //


})
test('add New company', ()=> {
        let user: UserWithLaptopType & WithCompaniesType = {
            name: 'Dimych',
            hair: 32,
            address: {
                city: 'Minsk',
                house: 12
            },
            laptop: {
                title: 'ZenBook'
            },
            companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT Incubator'}]
        }

        const upgradedUser = addNewCompany(user, {id:3, title:'Google'})
    expect(user).not.toBe(upgradedUser)
    expect(user.companies).not.toBe(upgradedUser.companies)
    expect(user.companies.length).toBe(2)
    expect(upgradedUser.companies.length).toBe(3)
    expect(upgradedUser.companies[2]).toStrictEqual({id:3, title:'Google'})


    }
)
test('change  company name', ()=> {
        let user: UserWithLaptopType & WithCompaniesType = {
            name: 'Dimych',
            hair: 32,
            address: {
                city: 'Minsk',
                house: 12
            },
            laptop: {
                title: 'ZenBook'
            },
            companies: [{id: 1, title: 'Eqam'}, {id: 2, title: 'IT Incubator'}]
        }

        const upgradedUser = changeCompanyName(user, 1, 'EPAM')
    // expect(user).not.toBe(upgradedUser)
    // expect(user.companies).not.toBe(upgradedUser.companies)
    // expect(user.companies.length).toBe(2)
    // expect(upgradedUser.companies[0].title).toBe('EPAM')
    //

    }
)
test('update  company name', ()=> {

let companies= {
   Dimych:[{id: 1, title: 'Eqam'}, {id: 2, title: 'IT Incubator'}],
   Artym:[{id: 2, title: 'IT Incubator'}]
}

const copy= updateCompanyTitle(companies, 'Dimych',1,'EPAM')

expect(copy['Dimych']).not.toBe(companies['Dimych'])
expect(copy['Artym']).toBe(companies['Artym'])
expect(copy['Dimych'][0].title).toBe('EPAM')


    }
)