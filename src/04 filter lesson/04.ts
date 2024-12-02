export const ages =[18, 20, 11, 555, 33, 22, 64, 86, 93, 100]

export const predicate = (age: number)=>{
    return age>90;
}
type courseType ={
    title: string
    price: number
}

const courses =[
    {title: "CSS", price: 100},
    {title: "Javascript", price: 200},
    {title: "React", price: 150},]

const cheapPredicate =(course: courseType) => {
    return course.price
}