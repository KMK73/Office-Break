/*
BreakSettings {
    days: [
        Monday, Tuesday, Wednesday
    ],
    start_time: datetime; (time for when a break reminder can happen),
    end_time: datetime; (time for when reminders need to stop i.e.5 pm),
    number_of_reminders_per_day: number; 
    breakGoal?: number; 
    locationTrackingOn?: boolean;
}
*/

import { DateTime } from "ionic-angular";

export class BreakSetting {
    //todo add days of the week
    user_id: string; 
    start_time: DateTime; 
    end_time: DateTime; 
    number_of_reminders_per_day?: number; 
    breakGoal?: number; 
    locationTrackingOn?: boolean; 
}