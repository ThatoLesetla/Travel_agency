export interface Booking {
    bookingID: number;
    startDate: Date;
    endDate: Date;
    packageID: number;
    clientID: number;
    numChildren: number;
    numAdults: number;
    numRooms: number;
}