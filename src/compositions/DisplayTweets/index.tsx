import {
	AbsoluteFill,
	Sequence,
	cancelRender,
	continueRender,
	delayRender,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {TweetLoader} from '../../layers/TweetLoader';
import {REACT_INDIA_ORANGE, REACT_INDIA_YELLOW} from '../../constants';
import {loadFont} from '@remotion/google-fonts/Syne';
import {useCallback, useEffect, useState} from 'react';
import IconNoise from '../../layers/IconNoise';

const icons = [
	'ball.png',
	'beach.png',
	'coconut.png',
	'flip-flop.png',
	'float.png',
	'umbrella.png',
];

export const DisplayTweets = () => {
	const {fontFamily} = loadFont();
	const frame = useCurrentFrame();
	const {height, width} = useVideoConfig();
	const [handle] = useState(() => delayRender('Loading tweet data'));
	const [tweetIds, setTweetIds] = useState<string[]>([]);

	const fetchData = useCallback(async () => {
		try {
			const response = await fetch('http://localhost:8000');
			const json = await response.json();
			const {data} = json;
			const sortData = data.sort((a: any, b: any) => a.id < b.id);
			const filteredData = sortData.map((item: any) => item.id);
			setTweetIds(filteredData);

			continueRender(handle);
		} catch (err) {
			cancelRender(err);
		}
	}, [handle]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const transform = interpolate(frame, [0, 500], [height, -height], {
		extrapolateLeft: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				background: REACT_INDIA_YELLOW,
			}}
		>
			<IconNoise icons={icons} speed={0.005} />
			<Sequence>
				<div
					style={{
						display: 'flex',
						width: '100%',
						height: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						overflow: 'hidden',
					}}
				>
					<div
						style={{
							columnCount: 3,
							maxWidth: `1200px`,
							transform: `translateY(${transform}px)`,
						}}
					>
						{tweetIds.map((num, index) => {
							return (
								<div
									key={index}
									style={{
										width: '100%',
										padding: 0,
										display: 'inline-block',
									}}
								>
									<TweetLoader id={num} />
								</div>
							);
						})}
					</div>
				</div>
			</Sequence>
			<Sequence from={299}>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						background: REACT_INDIA_YELLOW,
					}}
				>
					<h1
						style={{
							fontFamily,
							fontWeight: 'bold',
							fontSize: 150,
							color: REACT_INDIA_ORANGE,
						}}
					>
						#ReactIndia2023
					</h1>
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
