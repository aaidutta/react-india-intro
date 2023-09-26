import {AbsoluteFill, Sequence} from 'remotion';
import {TweetLoader} from '../../layers/TweetLoader';
import {LottieLoader} from '../../layers/LottieLoader';
import {REACT_INDIA_BLUE, REACT_INDIA_YELLOW} from '../../constants';
import {loadFont} from '@remotion/google-fonts/Syne';
export const DisplayTweets = () => {
	const x = [
		'1701264175807262972',
		'1701601629823484383',
		'1700213609798758825',
		'1699758076390474201',
		'1702525145620050238',
	];

	const {fontFamily} = loadFont();

	return (
		<AbsoluteFill
			style={{
				background: REACT_INDIA_BLUE,
			}}
		>
			{x.map((num, index) => {
				return (
					<Sequence from={index * 60} durationInFrames={60}>
						<AbsoluteFill
							style={{
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<TweetLoader id={num} />
						</AbsoluteFill>
					</Sequence>
				);
			})}
			<Sequence from={x.length * 60}>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<h1
						style={{
							fontFamily,
							fontWeight: 'bold',
							fontSize: 150,
							color: REACT_INDIA_YELLOW,
						}}
					>
						#ReactIndia2023
					</h1>
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
