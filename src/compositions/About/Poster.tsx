import {
	AbsoluteFill,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';

const images = [
	'delhi-metro.jpg',
	'kerala.jpg',
	'rajasthan.jpg',
	'mumbai.jpg',
	'beach-photo.jpg',
];

export const Poster = () => {
	const frame = useCurrentFrame();
	const index = interpolate(frame, [0, 25], [0, 4], {
		extrapolateRight: 'clamp',
	});

	const roundedIndex = Math.round(index);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Img
				src={staticFile(images[roundedIndex])}
				style={{
					width: '500px',
					height: '660px',
					objectFit: 'cover',
					objectPosition: 'center',
				}}
			/>
		</AbsoluteFill>
	);
};
