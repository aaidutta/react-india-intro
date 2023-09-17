import {AbsoluteFill, Sequence} from 'remotion';
import {REACT_INDIA_GREEN, REACT_INDIA_YELLOW} from '../../constants';
import {Trail} from '@remotion/motion-blur';
import {PopText} from './PopText';
import {TextBackground} from '../../layers/TextBackground';

export const TextTrail = () => {
	return (
		<AbsoluteFill
			style={{
				background: REACT_INDIA_GREEN,
			}}
		>
			<Trail layers={50} lagInFrames={0.1} trailOpacity={0.5}>
				<Sequence durationInFrames={20}>
					<PopText textColor={REACT_INDIA_YELLOW} text="In" />
				</Sequence>
			</Trail>
			<Sequence from={30} durationInFrames={100}>
				<TextBackground text="INDIA" />
			</Sequence>
		</AbsoluteFill>
	);
};
