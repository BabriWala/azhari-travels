export const dailyWorkLabels = {not_checked:"Not checked",checked:"Checked",follow_up:"Follow-up needed",done:"Done today"} as const;
export type DailyWorkStatus = keyof typeof dailyWorkLabels;
export type DailyWorkRecord = {id:string;day:string;status:string;author:string;updatedAt:string};
export function workDay(now:Date = new Date()) {
    return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Dhaka",year:"numeric",month:"2-digit",day:"2-digit"}).format(now);
}
export function dailyStatus(records:DailyWorkRecord[], day:string):DailyWorkStatus {
    const status=records.find(record=>record.day===day)?.status;
    return status && Object.hasOwn(dailyWorkLabels,status) ? status as DailyWorkStatus : "not_checked";
}
