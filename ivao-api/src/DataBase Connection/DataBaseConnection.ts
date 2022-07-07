import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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
    rating: number;
    @Column()
    EvTREx: number;
    @Column({
        name:'start_time'
    })
    startTime: Date;
    @Column({
        name:'end_time'
    })
    endTime:Date;
    @Column({
        type:'bigint',
        name:'user_vid'
    })
    vid:number;

}