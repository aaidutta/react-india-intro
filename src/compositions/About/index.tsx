import {AbsoluteFill, Sequence} from 'remotion';
import {NoisePunch} from './NoisePunch';
import {RippleTransition} from '../../layers/RippleTransition';
import {
	REACT_INDIA_BLUE,
	REACT_INDIA_GREEN,
	REACT_INDIA_ORANGE,
} from '../../constants';
import {TextTrail} from './TextTrail';

export const About = () => {
	return (
		<AbsoluteFill>
			<Sequence durationInFrames={100}>
				<NoisePunch />
			</Sequence>
			<Sequence from={85} durationInFrames={40}>
				<RippleTransition color={REACT_INDIA_BLUE} />
				<RippleTransition color={REACT_INDIA_ORANGE} delay={5} />
				<RippleTransition color={REACT_INDIA_GREEN} delay={10} />
			</Sequence>
			<Sequence from={110}>
				<TextTrail />
			</Sequence>
		</AbsoluteFill>
	);
};