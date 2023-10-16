import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkedCar from "../../core/entity/ParkedCar";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotMemoryRepository implements ParkingLotRepository {

    parkingLots = [{
        code: "shopping",
        capacity: 5,
        openHour: 8,
        closeHour: 22,
        occupiedSpaces: 0
    }];
    parkedCars = [];

    getParkingLot(code: string): Promise<ParkingLot> {
        const parkingLotData = this.parkingLots.find(parkingLot => parkingLot.code === code);
        const occupiedSpaces = this.parkedCars.length
        const parkingLot = ParkingLotAdapter.create(
            parkingLotData.code,
            parkingLotData.capacity,
            parkingLotData.openHour,
            parkingLotData.closeHour,
            occupiedSpaces
        );

        return Promise.resolve(parkingLot);
    }

    saveParkedCar(code: string, plate: string, date: Date): void {
        const parkedCar = new ParkedCar(code, plate, date);
        this.parkedCars.push(parkedCar);
    }
}