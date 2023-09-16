import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const RippleTransition: React.FC<{color: string; delay?: number}> = ({
	color,
	delay = 0,
}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const progress = spring({
		config: {
			damping: 80,
		},
		fps: videoConfig.fps,
		frame: frame - delay,
		durationInFrames: 60,
	});

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					background: `${color}`,
					borderRadius: '50%',
					height: '4000px',
					width: '4000px',
					scale: `${progress}`,
					position: 'absolute',
				}}
			/>
		</AbsoluteFill>
	);
};
