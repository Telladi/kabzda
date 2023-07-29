import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion, AccordionPropsType} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


type PageTitlePropsType = {
    title: string
}

const App = () => {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className="App">

            <Accordion titleValue={"Menu"} onChange={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }} collapsed={accordionCollapsed}/>
            <Accordion titleValue={"Users"} onChange={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }} collapsed={accordionCollapsed}/>

            Article 2

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <Rating value={ratingValue} onClick={setRatingValue}/>


        </div>
    );
}


export default App;

const PageTitle = (prors: PageTitlePropsType) => {
    console.log("PageTitle rendering")
    return (
        <div>{prors.title}</div>
    )
}
