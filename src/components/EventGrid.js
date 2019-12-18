import React, { useState } from 'react';
import eventList from '../assets/events';

import styled from 'styled-components';

const Events = styled.section`
  column-count: 3;
  column-gap: 140px;
  width: 78%;
  margin: 100px auto 200px auto;
  @media only screen and (max-width: 768px) {
    column-count: 2;
  }
  @media only screen and (max-width: 665px) {
    column-gap: 85px;
  }
  @media only screen and (max-width: 450px) {
    column-gap: 60px;
  }
  @media only screen and (max-width: 350px) {
    column-gap: 35px;
  }
`;
const Card = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  width: 100%;
  display: inline-block;
  border-bottom: 1px solid rgb(219, 219, 219);
  height: auto;
  margin-bottom 50px;
`;

const EventDate = styled.p`
  font-size: 11px;
  font-family: 'Arial';
  color: rgb(118, 118, 118);
  text-transform: uppercase;
  line-height: 4.364;
`;

const Description = styled.p`
  font-size: 48px;
  font-family: 'Springville';
  color: rgb(19, 19, 19);
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
`;
const EventMore = styled.p`
  font-size: 14px;
  font-family: 'CaslonPro';
  color: rgb(19, 19, 19);
`;
const Content = styled.div`
  margin-bottom: 50px;
`;
const EventGrid = () => {
  const [events] = useState(eventList);
  let eventsSorted = events.sort((a, b) => {
    let keyA = new Date(a.date),
      keyB = new Date(b.date);
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  return (
    <Events>
      {eventsSorted.map(event => (
        <Card className="card" key={event.id}>
          <img src={event.image} alt="event pic" />
          <Content>
            <EventDate>{event.event_date}</EventDate>
            <Description>{event.description}</Description>
            <EventMore>
              Presented by <span className="underline">LOREM IPSUM</span>
            </EventMore>
          </Content>
        </Card>
      ))}
    </Events>
  );
};
export default EventGrid;
