export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}
export type LaptopType = {
    title: string

}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}


export type UserWithBooksType=UserType&{
    books: Array<string>
}


export type WithCompaniesType={
    companies:Array<{id:number, title:string}>
}
export type CompanyType={id:number, title:string}
export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair=copy.hair/power

    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address:{
            ...u.address,
            city: city
        }
    }
    // copy.address = { это можно сделать в одну строку, см. Выше
    //     ...copy.address,
    //     city: city
    // }

}
export function upgradeUser(u: UserWithLaptopType, title:string) {
    return{
        ...u,
    laptop:{
            ...u.laptop,
        title: title
    }
    }
}
export function changingHouse(u: UserWithLaptopType, houseNewNumber:number) {
    return {
        ...u,
        address:{
            ...u.address,
            house: houseNewNumber
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType&UserWithBooksType, arr:string[]) {
    return{
        ...u,
        books:{
            ...u.books,
            ...u.books.concat(arr)
//var 2
//                 return{
//                 ...u,
//                     books:[...u.books,arr] лучший вариант
//                 }

        }

    }
}

export function updateBook(u: UserWithLaptopType&UserWithBooksType, arr:string[]) {

    // return {...u, books:{...u.books.map(el=>{ //вариант 1
    //            return el===arr[0]?el=arr[1]:0})}}

    const copy ={
        ...u,
        books: u.books.map(b=>{
            if (b===arr[0]){
                return arr[1]
            }else {
                return b
            }
        })
    }
    return copy
}

export function removeBook(u: UserWithLaptopType&UserWithBooksType, removedBook: string) {

    return{
        ...u,
        books: u.books.filter(b=> b!==removedBook)

    }
}

export function addNewCompany(u:UserWithLaptopType & WithCompaniesType, newCompany:{} ){
    return{
        ...u, companies:[...u.companies,newCompany]
        }
    }

export function changeCompanyName(u: WithCompaniesType,
                                  id:number,
                                  newName: string) {

    // const copy={ //var1
    //     ...u,
    //     companies:[...u.companies.map(c=>c.id===id?
    //         {...c, title:newName}:c)]
    // }
//var 2
    const copy={
        ...u,
        companies: u.companies.map(c=>{
            if(c.id===id){
                return {...c, title:newName}
            }
            else return c
        })
    }
return copy
}
export const updateCompanyTitle=(companies: { [key:string]:Array<CompanyType> },
                                 userName:string,
                                 companyId:number,
                                 newTitle:string)=>{
    let companyCopy={...companies}

    companyCopy[userName]=companyCopy[userName].map(c=>c.id===companyId?
        {...c, title:newTitle}:c)



    return companyCopy
}