import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

/**
 * Fade out helper
 * @param startFrom frame from the end in which fadeout starts
 * @param endFrom frame from the end in which fadeout ends. Default 0
 * @returns values between 0 to 1
 */
export const useFadeOut = (
	startFrom: number,
	endFrom = 0
): {opacity: number} => {
	const currentFrame = useCurrentFrame();

	const {durationInFrames} = useVideoConfig();

	// Fade out the animation at the end
	const opacity = interpolate(
		currentFrame,
		[durationInFrames - startFrom, durationInFrames - endFrom],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return {opacity};
};
