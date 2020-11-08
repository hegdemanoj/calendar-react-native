export const getCalendarDates=(lastMonthStartDay,lastDateOfPrevMonth,lastDateOfMonth)=>{
    const allDatesArr = [];
    let j=1;
    while (j<=lastDateOfMonth){
        let weekDates=[]
        let addDate=0,newmonthdate=1;
        for(let i=0;i<7;i++){
            
            if (lastMonthStartDay<=lastDateOfPrevMonth){
                addDate=lastMonthStartDay;
                lastMonthStartDay+=1;
            }
            else if (j<=lastDateOfMonth){
                addDate=j;
                j+=1
            }
            else {
                addDate=newmonthdate;
                newmonthdate+=1;
            }
            weekDates.push(addDate);
        }
        console.log(weekDates);
        allDatesArr.push(weekDates);
    }
    return allDatesArr;
}