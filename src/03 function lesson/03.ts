import {StudentType} from "../02_lesson/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02_lesson/02/02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export  const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title:skill
    })
}
export function makeStudentActive(student: StudentType) {
    student.isActive = true;
}
export function doesStudentLiveIn(student: StudentType, cityName:string) {
    return student.address.city.title === cityName
}
export function changeBudget(buildings: GovernmentBuildingsType, budget: number){
    buildings.budget += budget
}
export function repairHouse(houseType: HouseType){
return houseType.repaired = true;
}
export function toFireStaff(building: GovernmentBuildingsType, peopleNum: number){
    building.staffCount -= peopleNum
}
export function toHireStaff(building: GovernmentBuildingsType, peopleNum: number){
    building.staffCount += peopleNum
}