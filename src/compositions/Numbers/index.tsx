import {AbsoluteFill, Sequence} from 'remotion';
import {LottieLoader} from '../../layers/LottieLoader';
import {CenteredText} from './CenteredText';

export const Numbers = () => {
	return (
		<AbsoluteFill>
			<LottieLoader name="background.json" />
			<Sequence durationInFrames={45}>
				<CenteredText title="3 DAYS" subtitle="Of React" />
			</Sequence>
			<Sequence from={45} durationInFrames={45}>
				<CenteredText title="600+" subtitle="In Person Attendees" />
			</Sequence>
			<Sequence from={90} durationInFrames={45}>
				<CenteredText title="3K+" subtitle="React Devs for Remote Day" />
			</Sequence>
			<Sequence from={135} durationInFrames={45}>
				<CenteredText title="35+" subtitle="Front-end Speakers" />
			</Sequence>
		</AbsoluteFill>
	);
};
