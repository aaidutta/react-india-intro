import {FC} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Syne';

export const PopText: FC<{text: string; textColor: string}> = ({
	text,
	textColor,
}) => {
	const frame = useCurrentFrame();
	const scaleValue = interpolate(frame, [0, 2], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const {fontFamily} = loadFont();

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1
				style={{
					fontFamily: `${fontFamily}`,
					textTransform: 'uppercase',
					fontSize: '150px',
					fontWeight: '900',
					color: textColor,
					transform: `scale(${scaleValue})`,
				}}
			>
				{text}
			</h1>
		</AbsoluteFill>
	);
};
