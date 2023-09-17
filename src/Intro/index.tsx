import {Sequence} from 'remotion';
import {HelloWorld} from '../compositions/HelloWorld';
import {Transition} from '../layers/Transition';
import {About} from '../compositions/About';
import {REACT_INDIA_YELLOW} from '../constants';
import {Numbers} from '../compositions/Numbers';
import {LottieTransition} from '../layers/LottieTransition';
import {Twitter} from '../compositions/Twitter';

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
				<Twitter />
			</Sequence>
			<Sequence from={600}>
				<LottieTransition />
			</Sequence>
		</>
	);
};

export default Intro;
