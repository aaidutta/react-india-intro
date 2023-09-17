// TickerTape.tsx
import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {interpolate} from 'remotion';
import {REACT_INDIA_BLUE, REACT_INDIA_YELLOW} from '../../constants';
import {loadFont} from '@remotion/google-fonts/Syne';
import {useFadeOut} from '../../hooks/useFadeOut';

const layers = [
	{direction: 'left', speed: 100, color: REACT_INDIA_YELLOW, text: 'BIGGER'},
	{
		direction: 'right',
		background: REACT_INDIA_YELLOW,
		speed: 100,
		text: 'HYBRID',
	},
	{direction: 'left', speed: 100, color: REACT_INDIA_YELLOW, text: 'BETTER'},
];

const TickerTape: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();
	const {fontFamily} = loadFont();
	const {opacity} = useFadeOut(15, 5);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: REACT_INDIA_BLUE,
				opacity,
			}}
		>
			{layers.map((layer, index) => {
				const framesPerCycle = layer.speed;

				const position = interpolate(
					frame,
					[0, framesPerCycle],
					layer.direction === 'left' ? [width, -width] : [-width, width],
					{
						extrapolateRight: 'clamp',
						extrapolateLeft: 'clamp',
					}
				);

				return (
					<div
						key={`TickerLayer${index}`}
						style={{
							background: layer.background,

							height: height / 3,
						}}
					>
						<div
							style={{
								whiteSpace: 'nowrap',
								fontFamily,
								fontWeight: 900,
								fontSize: `${height / 3 - 10}px`,
								transform: `translateX(${position}px)`,
								color: layer.color,
							}}
						>
							{layer.text}
						</div>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};

export default TickerTape;
