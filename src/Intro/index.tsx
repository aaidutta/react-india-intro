import {Sequence} from 'remotion';
import {HelloWorld} from '../compositions/HelloWorld';
import {Transition} from '../layers/Transition';
import {About} from '../compositions/About';
import {REACT_INDIA_YELLOW} from '../constants';
import {Numbers} from '../compositions/Numbers';
import {LottieTransition} from '../layers/LottieTransition';
import {TwitterIntro} from '../compositions/TwitterIntro';
import {DisplayTweets} from '../compositions/DisplayTweets';

const Intro = () => {
	return (
		<>
			<Sequence durationInFrames={120}>
				<HelloWorld
					titleColor={REACT_INDIA_YELLOW}
					titleText="Welcome to React India"
				/>
			</Sequence>
			{/* Slide in Transition from frame 110 */}
			<Sequence from={100} durationInFrames={335}>
				<Transition>
					<About />
				</Transition>
			</Sequence>
			<Sequence from={435} durationInFrames={180}>
				<Numbers />
			</Sequence>
			<Sequence from={615} durationInFrames={335}>
				<TwitterIntro />
			</Sequence>
			<Sequence from={600} durationInFrames={65}>
				<LottieTransition />
			</Sequence>
			<Sequence from={930} durationInFrames={400}>
				<Transition type="up">
					<DisplayTweets />
				</Transition>
			</Sequence>
		</>
	);
};

export default Intro;
