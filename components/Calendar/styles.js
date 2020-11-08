import {StyleSheet} from 'react-native';
import styled from 'styled-components';


export const MonthArrow=styled.Text`
width:50;
text-align:center;
font-family:Montserrat-SemiBold;
 font-size:18;
`;

export const CalendarHeader=styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #111111;
`;

export const MonthYear=styled.Text`
font-family:Montserrat-SemiBold;
font-size:18;
width:165;
text-align:center;

`;
export const WeekDays=styled.Text`
display:flex;
flex-direction:row;
font-family: Montserrat-Medium;
color: #ECEDF1;
font-size: 15;
padding:5px;
text-align:center;

`;


export const WeekDaysContainer=styled.View`
display:flex;
flex-direction:row;
padding:5px;
`;
export const CalendarBody=styled.View`
padding-top:50;
`;


export const Divider=styled.View`
height:1;
border-width:.5;
width: 250;
border-color:#ECEDF1;
`;

export const CalendarDatesView=styled.View`
display: flex;
flex-direction: row;
padding:5px;
`;

export const OtherMonthDates=styled.Text`
font-family: Montserrat-Medium;
color: #ECEDF1;
font-size: 15;
padding:5px;
width:40;
height:40;
text-align:center;
text-alignVertical:center;
`;

export const CurrentMonthDates=styled.Text`
display: flex;
flex-direction: column;
font-family: Montserrat-Medium;
color: #111111;
font-size: 15;
padding:5px;
width:40;
height:40;
text-align:center;
text-alignVertical:center;
`;

export const styles= StyleSheet.create ({
    container: {
       flexDirection: 'column',
       opacity: 1
    },

    currmonthdates: {
        
     },

     othermonthdates: {
        // display: 'flex',
        // flexDirection: 'column',
        
     },

     weeknames: {
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'Montserrat-Medium',
        color: '#ECEDF1',
        fontSize: 15,
        padding:5,
        textAlign:'center'
     },

     monthnames: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'center', 
        color: '#111111',
     },

     box: {
         justifyContent:'center',
         alignItems:'center',
     },
     
     line: {
         
     },
     holiday:{
         height:10,
         width:10,
         backgroundColor:'red',
         borderRadius:5,
         position:'absolute',
         right:0
     }

})
