import GetParkingLot from "../core/usecase/GetParkingLot";
import ParkingLotSQLRepository from "../infra/repository/ParkingLotSQLRepository";

export default class ParkingLotController {
    static async getParkingLot(params, body) {
        const parkingLotSQLRepository = new ParkingLotSQLRepository()
        const getParkingLot = new GetParkingLot(parkingLotSQLRepository);
        const parkinkLot = await getParkingLot.execute(params.code);
        return parkinkLot;
    }
}