import {GovernmentBuildingsType, HouseType} from "../02_lesson/02/02";

export const  getStreetsTitlesOfGovernmentBuildings= (buildings: Array<GovernmentBuildingsType>)=>{
    return buildings.map(building => building.address.street.title)
}
export const getStreetsTitlesOfHouses= (houses: Array<HouseType>)=>{
    return houses.map(h=>h.address.street.title)
}
export const createMessages=(houses: Array<HouseType>)=>{
    return houses.map(h=>`Hello guys from ${h.address.street.title}`)
}