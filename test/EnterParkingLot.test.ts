import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import GetParkingLot from "../src/core/usecase/GetParkingLot";
import ParkingLotMemoryRepository from "../src/infra/repository/ParkingLotMemoryRepository";
import ParkingLotSQLRepository from "../src/infra/repository/ParkingLotSQLRepository";

test.skip('Should get parking lot', async () => {
    const parkingLotMemotyRepository = new ParkingLotMemoryRepository();
    const parkinglotSQLRepository = new ParkingLotSQLRepository();
    const getParkingLot = new GetParkingLot(parkinglotSQLRepository);
    const parkingLot = await getParkingLot.execute("shopping");
    expect(parkingLot.code).toBe("shopping");
});

test('Should enter parking lot', async () => {
    const parkingLotMemotyRepository = new ParkingLotMemoryRepository();
    const parkinglotSQLRepository = new ParkingLotSQLRepository();
    const enterParkingLot = new EnterParkingLot(parkinglotSQLRepository);
    const getParkingLot = new GetParkingLot(parkinglotSQLRepository);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

    await enterParkingLot.execute("shopping", "MMM-0001", new Date("2021-03-01T10:00:00"));
    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);

});

test.skip('Should be closed', async () => {
    const parkingLotMemotyRepository = new ParkingLotMemoryRepository();
    const enterParkingLot = new EnterParkingLot(parkingLotMemotyRepository);
    const getParkingLot = new GetParkingLot(parkingLotMemotyRepository);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

    await enterParkingLot.execute("shopping", "MMM-0001", new Date("2021-03-01T23:00:00"));
});

test.skip('Should be full', async () => {
    const parkingLotMemotyRepository = new ParkingLotMemoryRepository();
    const enterParkingLot = new EnterParkingLot(parkingLotMemotyRepository);
    const getParkingLot = new GetParkingLot(parkingLotMemotyRepository);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

    await enterParkingLot.execute("shopping", "MMM-0001", new Date("2021-03-01T10:00:00"));
    await enterParkingLot.execute("shopping", "MMM-0002", new Date("2021-03-01T10:00:00"));
    await enterParkingLot.execute("shopping", "MMM-0003", new Date("2021-03-01T10:00:00"));
    await enterParkingLot.execute("shopping", "MMM-0004", new Date("2021-03-01T10:00:00"));
    await enterParkingLot.execute("shopping", "MMM-0005", new Date("2021-03-01T10:00:00"));
    await enterParkingLot.execute("shopping", "MMM-0006", new Date("2021-03-01T10:00:00"));
});