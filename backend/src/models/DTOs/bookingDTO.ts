export class BookingDTO {
    readonly bookingID: number;
    readonly startDate: Date;
    readonly endDate: Date;
    readonly packageID: number;
    readonly clientID: number;
    readonly numChildren: number;
    readonly numAdults: number;
    readonly numRooms: number;
}