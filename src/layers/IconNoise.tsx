import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {Icon} from '../compositions/About/Icon';
import {FC} from 'react';
import {noise2D} from '@remotion/noise';

const OVERSCAN_MARGIN = 100;
const ROWS = 10;
const COLS = 10;

const IconNoise: FC<{icons: string[]; speed: number}> = ({icons, speed}) => {
	const frame = useCurrentFrame();
	const {height, width} = useVideoConfig();

	const transformNoiseToInteger = (noiseValue: number) => {
		const mappedValue = (noiseValue + 1) / 2;
		const transformedValue = mappedValue * 5;
		const integerResult = Math.floor(transformedValue); // Use Math.round for rounding to the nearest integer

		return integerResult;
	};

	return (
		<AbsoluteFill>
			{new Array(COLS).fill(0).map((_, i) =>
				new Array(ROWS).fill(0).map((__, j) => {
					const x = i * ((width + OVERSCAN_MARGIN) / COLS) + 30;
					const y = j * ((height + OVERSCAN_MARGIN) / ROWS) + 30;

					const originalNoise = noise2D(i, j, frame * speed);
					const transformedNoise = transformNoiseToInteger(originalNoise);
					return (
						<AbsoluteFill
							style={{
								top: `${y}px`,
								left: `${x}px`,
							}}
						>
							<Icon src={icons[transformedNoise]} />
						</AbsoluteFill>
					);
				})
			)}
		</AbsoluteFill>
	);
};

export default IconNoise;
