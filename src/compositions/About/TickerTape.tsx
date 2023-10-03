// TickerTape.tsx
import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {interpolate} from 'remotion';
import {REACT_INDIA_BLUE, REACT_INDIA_YELLOW} from '../../constants';
import {loadFont} from '@remotion/google-fonts/Syne';
import {useFadeOut} from '../../hooks/useFadeOut';

const layers = [
	{direction: 'left', color: REACT_INDIA_YELLOW, text: 'BIGGER'},
	{
		direction: 'right',
		background: REACT_INDIA_YELLOW,
		text: 'HYBRID',
	},
	{direction: 'left', color: REACT_INDIA_YELLOW, text: 'BETTER'},
];

const TickerTape: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height, durationInFrames} = useVideoConfig();
	const {fontFamily} = loadFont();
	const {opacity} = useFadeOut(5, 0);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: REACT_INDIA_BLUE,
				opacity,
			}}
		>
			{layers.map((layer, index) => {
				const position = interpolate(
					frame,
					[0, durationInFrames],
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
