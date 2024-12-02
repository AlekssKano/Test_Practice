export const a =0;
test("should take older mane then 90", ()=>{
    const ages =[18, 20, 11, 555, 33, 22, 64, 86]

    const predicate = (age: number)=>{
        return age>90;
    }
    const oldAges= ages.filter(predicate)


    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(555)
})

test("should cost less then 160", ()=>{
    type courseType ={
        title: string
        price: number
    }
    const courses =[
        {title: "CSS", price: 100},
        {title: "Javascript", price: 200},
        {title: "React", price: 150},]



        const cheapCourse = courses.filter(course=>course.price < 160)

        expect(cheapCourse.length).toBe(2)
        expect(cheapCourse[1].price).toBe(150)
        expect(cheapCourse[0].title).toBe("CSS")
    })
test("get only comleted tasks", ()=>{
    const tasks =[
    {id:1, title:"Bread", isDone:false},
    {id:2, title:"Milk", isDone:true},
    {id:3, title:"Solt", isDone:false},
    {id:4, title:"Sugar", isDone:true}
    ]

    const DoneTasks = tasks.filter(task=>task.isDone)

    expect(DoneTasks.length).toBe(2)
    expect(DoneTasks[0].title).toBe("Milk")
    expect(DoneTasks[1].title).toBe("Sugar")
})