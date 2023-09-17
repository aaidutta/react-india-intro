import {AbsoluteFill, Sequence} from 'remotion';
import {REACT_INDIA_SKY} from '../../constants';
import {IntroText} from './IntroText';
import {LottieLoader} from '../../layers/LottieLoader';
export const Twitter = () => {
	return (
		<AbsoluteFill
			style={{
				background: REACT_INDIA_SKY,
			}}
		>
			<Sequence from={45} durationInFrames={45}>
				<IntroText titleText="The React Party Has Started" titleColor="white" />
			</Sequence>
			<Sequence from={100} durationInFrames={25}>
				<IntroText titleText="&" titleColor="white" />
			</Sequence>
			<Sequence from={135} durationInFrames={45}>
				<IntroText titleText="𝕏 Is Buzzing" titleColor="white" />
			</Sequence>
			<Sequence from={190} durationInFrames={45}>
				<IntroText titleText="With Your Responses" titleColor="white" />
			</Sequence>
			<Sequence from={235} durationInFrames={100}>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<LottieLoader name="twitter-like.json" />
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
