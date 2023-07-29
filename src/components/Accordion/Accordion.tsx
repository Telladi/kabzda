import React from 'react';

export type AccordionCollapsedType = true | false

export type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
    onChange: () => void
}

export const Accordion = (props: AccordionPropsType) => {
    console.log("Accordion rendering")

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {props.collapsed === true && <AccordionBody/>}
        </div>
    )

}
export type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h3 onClick={(e)=>props.onChange()}>{props.title}</h3>
        </div>
    )
}


export const AccordionBody = () => {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )

}

