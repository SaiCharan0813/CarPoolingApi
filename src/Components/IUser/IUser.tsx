import { v4 as uuid } from "uuid";
export default interface IUser {
    rideId: number;

    rideProviderId: string;

    sourceId: number;

    destinationId: number;

    date: string;

    fair: number;

    totalSeats: number;

    availableSeats: number;

    time: string;
    seatsBooked:number;
}