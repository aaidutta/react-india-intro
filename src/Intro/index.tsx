import { Sequence} from 'remotion';
import {HelloWorld} from '../compositions/HelloWorld';
import {Transition} from '../layers/Transition';
import {About} from '../compositions/About';

const Intro = () => {
	return (
		<>
			<Sequence durationInFrames={120}>
				<HelloWorld titleColor="#fbfadf" titleText="Welcome to React India" />
			</Sequence>

			<Sequence from={110} durationInFrames={400}>
				<Transition type="in">
				<About />
				</Transition>
			</Sequence>
		</>
	);
};

export default Intro;
