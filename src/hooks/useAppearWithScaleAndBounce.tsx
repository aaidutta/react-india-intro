import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const useAppearWithScaleAndBounce = (
	duration?: number,
	delay = 0
): {scaleValue: number} => {
	const currentFrame = useCurrentFrame();

	const {fps} = useVideoConfig();

	const bounceAnimation = spring({
		frame: currentFrame - delay,
		from: 0,
		to: 1,
		fps,
		config: {damping: 10.5, stiffness: 160, mass: 0.6},
		durationInFrames: duration,
	});

	return {scaleValue: bounceAnimation};
};
