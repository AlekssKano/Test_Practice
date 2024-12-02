import {CityType, GovernmentBuildingsType, HouseType} from "../02_lesson/02/02";

export function demolishHousesOnTheStreet(city: CityType, street: string){
  city.houses=city.houses.filter(h=>h.address.street.title !== street)
    }

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingsType>, number: number){
return buildings.filter(b=>b.staffCount>number)
}
