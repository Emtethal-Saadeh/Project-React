import React from 'react'
import { Row } from 'react-bootstrap';
const buttons = [
    { text: 'Today', backgroundColor: '#f6f6f6' },
    { text: '1W', backgroundColor: '#f6f6f6' },
    { text: '1M', backgroundColor: '#f6f6f6' },
    { text: '1Y', backgroundColor: '#f6f6f6' }
];

const Day = () => {
  return (
    <Row className="pe-3">
        {buttons.map((button, index) => (
                <div key={index} className="col btn rounded-5 me-1 havb" style={{ backgroundColor: button.backgroundColor }}>
                    {button.text}
                </div>
            ))}
    </Row>
  )
}

export default Day
