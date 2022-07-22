import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Bookings')
export class DataBaseConnection{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'booking_id'
    }
    )
    id: number;
    @Column()
    title: string;
    @Column()
    Rating: number;
    @Column()
    EvTREx: number;
    @Column({
        name:'start_time'
    })
    startTime: string;
    @Column({
        name:'end_time'
    })
    endTime:string;
    @Column({
        type:'bigint',
        name:'user_vid'
    })
    VID:number;

}