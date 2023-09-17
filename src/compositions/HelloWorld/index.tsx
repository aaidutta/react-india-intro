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

/**
 * Sequence(120 frames):
 * 1) Random noise background - Frame 0
 * 2) Logo pops - Frame 30 - 50
 * 3) Logo moves to top - Frame 50 - 70
 * 4) Text Starts Appearing Frame 70 onwards
 * 5) Fade from Frame 90 - 100
 */
export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const {opacity} = useFadeOut(25, 20);

	// Animate from 0 to 1 after 50 frames in 20 frames
	const logoTranslationProgress = spring({
		frame: frame - 50,
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
				<Sequence from={30}>
					<AbsoluteFill style={{transform: `translateY(${logoTranslation}px)`}}>
						<Logo />
					</AbsoluteFill>
				</Sequence>
				<Sequence from={70}>
					<Title titleText={propOne} titleColor={propTwo} />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
