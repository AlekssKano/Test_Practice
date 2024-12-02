import {ManType1} from "./destructing";


export const a = 0;
let props: ManType1
beforeEach(() => {
        props = {
            name: "Dimych",
            age: 32,
            lessons: [{title: "1"}, {title: "2"}, {title: "2"}],
            address: {
                street: {
                    title: "Nezavisimostu street"
                }
            }
        }
    }
)
test("1", () => {


    const age = props.age
    const lessons = props.lessons
    const {title} = props.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(title).toBe("Nezavisimostu street")

})
test("2", () => {

    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    // const [ls1, ls2] = props.lessons;
    const [ls1, ...restLessons]=props.lessons
    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    expect(ls1.title).toBe('1')
    // expect(ls2.title).toBe('2')
})