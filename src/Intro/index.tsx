import {
	Audio,
	Sequence,
	interpolate,
	staticFile,
	useVideoConfig,
} from 'remotion';
import {HelloWorld} from '../compositions/HelloWorld';
import {Transition} from '../layers/Transition';

import {
	REACT_INDIA_BLUE,
	REACT_INDIA_GREEN,
	REACT_INDIA_ORANGE,
	REACT_INDIA_YELLOW,
} from '../constants';
import {Numbers} from '../compositions/Numbers';
import {LottieTransition} from '../layers/LottieTransition';
import {TwitterIntro} from '../compositions/TwitterIntro';
import {DisplayTweets} from '../compositions/DisplayTweets';
import {NoisePunch} from '../compositions/About/NoisePunch';
import {RippleTransition} from '../layers/RippleTransition';
import {TextTrail} from '../compositions/About/TextTrail';
import TickerTape from '../compositions/About/TickerTape';

const Intro = () => {
	const {durationInFrames} = useVideoConfig();
	return (
		<>
			<Sequence durationInFrames={130}>
				<HelloWorld
					titleColor={REACT_INDIA_YELLOW}
					titleText="Welcome to React India"
				/>
			</Sequence>

			<Sequence from={114} durationInFrames={85}>
				<Transition>
					<NoisePunch />
				</Transition>
			</Sequence>
			<Sequence from={194} durationInFrames={40}>
				<RippleTransition color={REACT_INDIA_BLUE} />
				<RippleTransition color={REACT_INDIA_ORANGE} delay={5} />
				<RippleTransition color={REACT_INDIA_GREEN} delay={10} />
			</Sequence>
			<Sequence from={234} durationInFrames={130}>
				<TextTrail />
			</Sequence>
			<Sequence from={364} durationInFrames={35}>
				<TickerTape />
			</Sequence>

			<Sequence from={399} durationInFrames={160}>
				<Numbers />
			</Sequence>
			<Sequence from={559} durationInFrames={160}>
				<TwitterIntro />
			</Sequence>
			{/* overlapped transition */}
			<Sequence from={529} durationInFrames={65}>
				<LottieTransition />
			</Sequence>

			<Sequence from={709}>
				<Transition type="up">
					<DisplayTweets />
				</Transition>
			</Sequence>
			<Audio
				src={staticFile('audio.wav')}
				volume={(f) =>
					interpolate(
						f,
						[durationInFrames - 30, durationInFrames - 10],
						[1, 0],
						{
							extrapolateLeft: 'clamp',
						}
					)
				}
			/>
		</>
	);
};

export default Intro;
