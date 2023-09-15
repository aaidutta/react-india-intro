import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {Title} from './Title';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import { Logo } from './Logo';
import Background from '../../layers/NoiseBackground';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame: frame - 35,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -150]
	);

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill style={{
			background: '#0b1337',
		}}>
			<AbsoluteFill style={{opacity}}>
			<Background speed={0.01} maxOffset={50} circleRadius={5} />
				<Sequence from={35}>
				<AbsoluteFill style={{transform: `translateY(${logoTranslation}px)`}}><Logo /></AbsoluteFill>
					<Title titleText={propOne} titleColor={propTwo} />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
