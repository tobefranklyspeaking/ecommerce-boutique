import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

//higher order component: pass it an array of components to render, as well as an orientation ('row' or 'column'). It also expects a clickhandler (not for the arrows, but for the components themselves) and an optional count for number of components to display at one time.

//necessary styles
const ArrowWrapper = styled.div`
  height: 15px;
  width: 15px;
`;
const SampleCard = styled.div`
  width: 8rem;
  height: 8rem;
  border: 1px solid black;
`;

//test data
const defaultComponents = [
  <SampleCard />,
  <SampleCard />,
  <SampleCard />
];


const ModularCarousel = ({ components=defaultComponents, orientation='row', clickHandler, count=3}) => {

  //state for which components out of the total components prop to display
  const [displayed, updateDisplayed] = useState(components.slice(0, count));

  //this style inside component to allow for passing props
  const CarouselWrapper = styled.div`
    display: flex;
    flex-direction: ${orientation};
    align-items: center;
    justify-content: space-evenly;
  `;

  const decrementDisplayed = (e) => {
    let firstIndex = components.indexOf(displayed[0]);
  };
  const incrementDisplayed = (e) => {};
  //renders right set of arrows based on orientation string value
  return (
  <CarouselWrapper>
    <ArrowWrapper>{orientation === 'row' ? <AiOutlineArrowLeft /> : <AiOutlineArrowUp />}</ArrowWrapper>
    {displayed}
    <ArrowWrapper>{orientation === 'row' ? <AiOutlineArrowRight /> : <AiOutlineArrowDown />}</ArrowWrapper>
  </CarouselWrapper>);
};

export default ModularCarousel;