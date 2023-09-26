import {AbsoluteFill, Sequence} from 'remotion';
import {LottieLoader} from '../../layers/LottieLoader';
import {CenteredText} from './CenteredText';

export const Numbers = () => {
	return (
		<AbsoluteFill
			style={{
				background: 'rgb(29,29,29)',
			}}
		>
			<LottieLoader loop name="background.json" speed={0.5} />
			<Sequence durationInFrames={20}>
				<CenteredText title="3 DAYS" subtitle="Of React" />
			</Sequence>
			<Sequence from={39} durationInFrames={20}>
				<CenteredText title="600+" subtitle="In Person Attendees" />
			</Sequence>
			<Sequence from={79} durationInFrames={20}>
				<CenteredText title="3K+" subtitle="React Devs for Remote Day" />
			</Sequence>
			<Sequence from={119} durationInFrames={20}>
				<CenteredText title="35+" subtitle="Front-end Speakers" />
			</Sequence>
		</AbsoluteFill>
	);
};
