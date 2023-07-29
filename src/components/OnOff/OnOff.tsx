import React, {} from 'react';



type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}


export const OnOff = (props: OnOffPropsType) => {


    const onStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.on ? "green" : "red"
    };


    return (
        <div>
            <div style={onStyle}>
                <button onClick={() => {
                    props.onChange(true)
                }}>on
                </button>
            </div>
            <div style={offStyle}>
                <button onClick={() => {
                    props.onChange(false)
                }}>off
                </button>
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

