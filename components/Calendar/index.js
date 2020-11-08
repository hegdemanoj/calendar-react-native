import React, { useRef, useState } from 'react';
import {  Text, View, Animated, TouchableOpacity } from 'react-native';
import {styles,MonthArrow,CalendarHeader,MonthYear,CalendarBody,WeekDaysContainer,WeekDays,Divider,CalendarDatesView,OtherMonthDates,CurrentMonthDates} from './styles'
import { getCalendarDates } from './utils';


export default function Calendar() {
   
    const [d,setd] = useState(new Date());
    const today = new Date();
    const animatedWidth = useRef(new Animated.Value(165)).current;
    const animatedOpacity = useRef(new Animated.Value(1)).current;
    const activityDates = [15,24,7];

    const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];
    const weekNames = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
    
    const monthName = monthNames[d.getMonth()];
    const year = d.getFullYear();
    const lastDateOfMonth = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
    const lastMonth = new Date(d.getFullYear(), d.getMonth(), 0);
    const lastDateOfPrevMonth = lastMonth.getDate();
    let lastMonthStartDay = lastDateOfPrevMonth - lastMonth.getDay()+1;
    const allDatesArr=getCalendarDates(lastMonthStartDay,lastDateOfPrevMonth,lastDateOfMonth);

    
    const fadeOut = (animatedWidth,animatedOpacity)=>{
        Animated.timing(animatedWidth, {
            toValue: -400,
            duration: 500,
            }).start()
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 1000
            }).start()
    }

    const fadeIn = (animatedWidth,animatedOpacity)=>{
        Animated.timing(animatedWidth, {
            toValue: -250,
            duration: 500,
            }).start()

        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 500
            }).start()
    }

    const prevMonth = () =>{
        fadeOut(animatedWidth,animatedOpacity);
        setd(new Date(d.getFullYear(), d.getMonth() - 1))
        setTimeout(function(){ fadeIn(animatedWidth,animatedOpacity) }, 500);
    }

    const nextMonth = () =>{
        fadeOut(animatedWidth,animatedOpacity);
        setd(new Date(d.getFullYear(), d.getMonth() + 1))
        setTimeout(function(){ fadeIn(animatedWidth,animatedOpacity) },500);
    }

    const animatedStyle = { width: animatedWidth, opacity: animatedOpacity}

    const thisMonthDates = (datum,i,j) => {
            if (today.getMonth()+1==d.getMonth()+1){
                    return (
                    <View style={datum==today.getDate()?{borderRadius:100,backgroundColor:'#ECEDF1'}:{}}>
                        <View style={{...styles.holiday,opacity:activityDates.includes(datum)?1:0}}/>
                        <CurrentMonthDates>{datum}</CurrentMonthDates>
                    </View>
                    );        
            }
            return (<View>
                <CurrentMonthDates>{datum}</CurrentMonthDates>
                </View>);
    }

    return(
        <Animated.View>
        <CalendarHeader>
                <TouchableOpacity onPress={prevMonth}>
                    <MonthArrow onPress={prevMonth}>{'<'}</MonthArrow>
                </TouchableOpacity>
                <Animated.View style = {[styles.box,animatedStyle]}>
                    <MonthYear>{monthName} {year}</MonthYear>
                </Animated.View>
            <TouchableOpacity onPress={nextMonth}>
                    <MonthArrow>{'>'}</MonthArrow>
                </TouchableOpacity>
        </CalendarHeader>

        <CalendarBody>
            <WeekDaysContainer>
            {
                weekNames.map(dayName=><WeekDays>{dayName}</WeekDays>)
            }
            </WeekDaysContainer>
            <Divider/>
            {
            allDatesArr.map((arr,i) => {
                return (
                    <CalendarDatesView>
                    {
                        arr.map((datum,j) => {
                            if(i===0 && datum>8){
                                    return (<OtherMonthDates>{datum}</OtherMonthDates>);    
                            }
                            if(i===allDatesArr.length-1 && datum<8){
                                    return (<OtherMonthDates>{datum}</OtherMonthDates>);    
                            }
                            return thisMonthDates(datum,i,j);
                        })
                    }
                    </CalendarDatesView>
                );
                })
                }
        </CalendarBody>
    </Animated.View>
    )
}