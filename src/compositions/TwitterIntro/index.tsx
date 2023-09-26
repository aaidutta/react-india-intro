import {AbsoluteFill, Sequence} from 'remotion';
import {REACT_INDIA_SKY} from '../../constants';
import {IntroText} from './IntroText';
import {LottieLoader} from '../../layers/LottieLoader';
export const TwitterIntro = () => {
	return (
		<AbsoluteFill
			style={{
				background: REACT_INDIA_SKY,
			}}
		>
			<Sequence from={99} durationInFrames={100}>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<LottieLoader name="twitter-like.json" />
				</AbsoluteFill>
			</Sequence>
			<Sequence durationInFrames={30}>
				<IntroText titleText="The React Party Has Started" titleColor="white" />
			</Sequence>
			<Sequence from={39} durationInFrames={30}>
				<IntroText titleText="&" titleColor="white" />
			</Sequence>
			<Sequence from={79} durationInFrames={30}>
				<IntroText titleText="𝕏 Is Buzzing" titleColor="white" />
			</Sequence>
			<Sequence from={119} durationInFrames={30}>
				<IntroText titleText="With Your Responses" titleColor="white" />
			</Sequence>
		</AbsoluteFill>
	);
};
