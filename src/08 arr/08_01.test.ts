

type UsersType={
    [key:string]:{id:number, name:string},
}

export let users:UsersType

beforeEach(()=>{
     users={
        '101':{id:101, name:'Alya'},
        '3232215':{id: 3232215, name:'Lola'},
        '1212':{id: 1212, name:'Leya'},
        '1':{id: 1, name:'Kate'},
    }
})


test('should update corresponding user from obj', ()=>{

  users["1"].name ='Kira'

    expect(users['1'].name).toBe('Kira')
    // expect(users[1]).toBe('Lola')
    // expect(users[2]).toBe('Leya')
    // expect(users[3]).toBe('Kate')
})
test('should delete corresponding user from obj', ()=>{

  delete users["1"]

    expect(users['1']).toBeUndefined()
    // expect(users[1]).toBe('Lola')
    // expect(users[2]).toBe('Leya')
    // expect(users[3]).toBe('Kate')
})