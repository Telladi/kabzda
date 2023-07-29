import React, {useState} from 'react';


type OnOffPropsType = {
    // on: boolean
    onChange: (on: boolean)=> void
}


export const UncontrolledOnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(true)
    console.log("on:" + on)

    const onStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "green" : "red"
    };

    const onClicked=()=> {
        setOn(true)
        props.onChange(true)
    }
    const offClicked=()=> {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle}><button onClick={onClicked}>on</button></div>
            <div style={offStyle}><button onClick={offClicked}>off</button></div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

