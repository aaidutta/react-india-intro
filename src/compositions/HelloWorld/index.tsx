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
import {Logo} from './Logo';
import Background from '../../layers/NoiseBackground';
import {REACT_INDIA_BLUE} from '../../constants';
import {useFadeOut} from '../../hooks/useFadeOut';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const {opacity} = useFadeOut(25, 20);

	// Animate from 0 to 1 after 50 frames in 20 frames
	const logoTranslationProgress = spring({
		frame: frame - 59,
		fps,
		config: {
			damping: 100,
		},
		durationInFrames: 20,
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -150]
	);

	return (
		<AbsoluteFill
			style={{
				background: REACT_INDIA_BLUE,
			}}
		>
			<AbsoluteFill style={{opacity}}>
				<Background speed={0.01} maxOffset={50} circleRadius={5} />
				<Sequence from={39}>
					<AbsoluteFill style={{transform: `translateY(${logoTranslation}px)`}}>
						<Logo />
					</AbsoluteFill>
				</Sequence>
				<Sequence from={69}>
					<Title titleText={propOne} titleColor={propTwo} />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
