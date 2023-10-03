import {AbsoluteFill, Sequence} from 'remotion';
import IconNoise from '../../layers/IconNoise';
import {PopText} from './PopText';
import {REACT_INDIA_BLUE, REACT_INDIA_ORANGE} from '../../constants';
import {LottieLoader} from '../../layers/LottieLoader';

export const NoisePunch = () => {
	return (
		<AbsoluteFill style={{background: REACT_INDIA_ORANGE}}>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
				}}
			>
				<LottieLoader loop name="pattern.json" speed={0.9} />
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
