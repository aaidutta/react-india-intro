import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Transition: React.FC<{
	children: React.ReactNode;
	type?: 'in' | 'up';
}> = ({children, type = 'in'}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const progress = spring({
		config: {
			damping: 80,
		},
		fps: videoConfig.fps,
		frame,
		durationInFrames: 10,
	});

	const percent = interpolate(progress, [0, 1], [100, 0]);

	return (
		<AbsoluteFill
			style={{
				transform: `translate${type === 'in' ? 'X' : 'Y'}(${percent}%)`,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
