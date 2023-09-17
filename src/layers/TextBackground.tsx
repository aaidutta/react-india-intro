import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {loadFont, fontFamily} from '@remotion/google-fonts/Kanit';
import {useFadeOut} from '../hooks/useFadeOut';

loadFont('italic', {
	weights: ['900'],
});

export const TextBackground: React.FC<{
	text: string;
}> = ({text}) => {
	const {fps, height} = useVideoConfig();
	const frame = useCurrentFrame();
	const modFrame = frame % 50;

	const {opacity} = useFadeOut(20, 5);

	const push1 = spring({
		fps,
		frame: modFrame,
		config: {
			damping: 200,
		},
		durationInFrames: 25,
	});

	const push2 = spring({
		fps,
		frame: modFrame,
		config: {
			damping: 200,
		},
		delay: 25,
	});

	const panelHeight = height / 3;

	return (
		<AbsoluteFill style={{opacity}}>
			{new Array(5).fill(true).map((_, i) => {
				return (
					<AbsoluteFill
						style={{
							height: panelHeight,
							top: panelHeight * i - panelHeight * push1 - panelHeight * push2,
							justifyContent: 'center',
							left: '100px',
						}}
					>
						<Text stroke={i % 2 === 0} text={text} />
					</AbsoluteFill>
				);
			})}
		</AbsoluteFill>
	);
};

const Text: React.FC<{
	stroke: boolean;
	text: string;
}> = ({stroke, text}) => {
	return (
		<div
			style={{
				fontFamily,
				color: stroke ? 'transparent' : '#ccc',
				fontSize: 400,
				lineHeight: 0.7,
				WebkitTextStroke: stroke ? '2px #ccc' : 'none',
			}}
		>
			{text}
		</div>
	);
};
