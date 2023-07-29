import React, {useState} from 'react';

export type StarPropsType = {
    selected: boolean
    setValue: ()=> void
}
export type RatingType = {
    //value: number
}

export const UncontrolledRating = (props: RatingType) => {
    console.log("UncontrolledRating rendering")
let [value, setValue] =useState<number>(0)

    return (
        <div>
            <Star selected={value > 0} setValue={()=>{setValue(1)}}/>
            <Star selected={value > 1} setValue={()=>{setValue(2)}}/>
            <Star selected={value > 2} setValue={()=>{setValue(3)}}/>
            <Star selected={value > 3} setValue={()=>{setValue(4)}}/>
            <Star selected={value > 4} setValue={()=>{setValue(5)}}/>
        </div>
    );

}
export const Star = (props: StarPropsType) => {
    console.log("Star rendering")
    return <span onClick={()=> {props.setValue()}}>
        { props.selected ? <b>star</b> : "star"}
    </span>

}




