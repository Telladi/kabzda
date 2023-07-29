import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
export const UncontrolledAccordion = (props: AccordionPropsType) => {
    console.log("Accordion rendering")

    let [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h3 onClick={() => {
                props.onClick()
            }}>{props.title}</h3>
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

