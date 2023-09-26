import {AbsoluteFill, Sequence} from 'remotion';
import IconNoise from '../../layers/IconNoise';
import {PopText} from './PopText';
import {REACT_INDIA_BLUE, REACT_INDIA_ORANGE} from '../../constants';

export const NoisePunch = () => {
	const icons = [
		'ball.png',
		'beach.png',
		'coconut.png',
		'flip-flop.png',
		'float.png',
		'umbrella.png',
	];
	return (
		<AbsoluteFill style={{background: REACT_INDIA_ORANGE}}>
			<AbsoluteFill>
				<IconNoise icons={icons} speed={0.005} />
				<Sequence from={4} durationInFrames={20}>
					<PopText text="The" textColor={REACT_INDIA_BLUE} />
				</Sequence>
				<Sequence from={24} durationInFrames={20}>
					<PopText text="Biggest" textColor={REACT_INDIA_BLUE} />
				</Sequence>
				<Sequence from={44} durationInFrames={20}>
					<PopText text="React" textColor={REACT_INDIA_BLUE} />
				</Sequence>
				<Sequence from={64} durationInFrames={20}>
					<PopText text="Conference" textColor={REACT_INDIA_BLUE} />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
