import React from 'react';

const Card = (activities) => {
	const cardComponent = Object.values(activities);
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='tasks' src={`https://picsum.photos/300`} />
			<div>
				<h2>{cardComponent[0].type}: {cardComponent[0].activity}</h2>
			</div>
		</div>
	);

}

export default Card;