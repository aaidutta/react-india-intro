import {AbsoluteFill, Sequence} from 'remotion';
import {HelloWorld} from '../compositions/HelloWorld';
import {Transition} from '../layers/Transition';

const Intro = () => {
	return (
		<>
			<Sequence durationInFrames={120}>
				<HelloWorld titleColor="yellow" titleText="Welcome to React India" />
			</Sequence>

			<Sequence from={110}>
				<Transition type="in">
					<AbsoluteFill style={{background: 'red'}} />
				</Transition>
			</Sequence>
		</>
	);
};

export default Intro;
