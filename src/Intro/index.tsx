import {Sequence} from 'remotion';
import {HelloWorld} from '../compositions/HelloWorld';
import {Transition} from '../layers/Transition';
import {About} from '../compositions/About';
import {REACT_INDIA_YELLOW} from '../constants';

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
			<Sequence from={100} durationInFrames={250}>
				<Transition>
					<About />
				</Transition>
			</Sequence>
		</>
	);
};

export default Intro;
