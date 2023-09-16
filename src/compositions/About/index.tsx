import {AbsoluteFill, Sequence} from 'remotion';
import IconNoise from '../../layers/IconNoise';
import {PopText} from './PopText';

export const About = () => {
	const icons = [
		'ball.png',
		'beach.png',
		'coconut.png',
		'flip-flop.png',
		'float.png',
		'umbrella.png',
	];
	return (
		<AbsoluteFill style={{background: '#ed5d26'}}>
			<AbsoluteFill>
				<IconNoise icons={icons} speed={0.005} />
				<Sequence durationInFrames={20}>
					<PopText text="The" />
				</Sequence>
				<Sequence from={20} durationInFrames={20}>
					<PopText text="Biggest" />
				</Sequence>
				<Sequence from={40} durationInFrames={20}>
					<PopText text="React" />
				</Sequence>
				<Sequence from={60} durationInFrames={20}>
					<PopText text="Conference" />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
