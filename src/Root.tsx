import {Composition} from 'remotion';
import Intro from './Intro';

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="Intro"
			durationInFrames={1000}
			fps={30}
			width={1920}
			height={1080}
			component={Intro}
		/>
	);
};
