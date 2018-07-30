import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	return <div className="scroll pa0 bg-custom">{props.children}</div>;
};

export default Scroll;
