import {FC} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {REACT_INDIA_BLUE} from '../../constants';
import {loadFont} from '@remotion/google-fonts/Syne';

export const PopText: FC<{text: string}> = ({text}) => {
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
					color: `${REACT_INDIA_BLUE}`,
					transform: `scale(${scaleValue})`,
				}}
			>
				{text}
			</h1>
		</AbsoluteFill>
	);
};
