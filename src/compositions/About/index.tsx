import {Sequence} from 'remotion'
import {AbsoluteFill} from 'remotion';
import IconNoise from '../../layers/IconNoise';
import { TextEffect } from './TextEffect';

export const About = () => {
	const icons = [
		'ball.png',
		'beach.png',
		'coconut.png',
		'flip-flop.png',
		'float.png',
		'umbrella.png',
	];
	return (
		<AbsoluteFill style={{background: '#ed5d26'}}>
			<AbsoluteFill>
				<IconNoise icons={icons} speed={0.01} />
        <Sequence from={40} durationInFrames={60}>
        <TextEffect titleColor="#fbfadf" titleText="The Biggest" />
        </Sequence>
        <Sequence from={130} durationInFrames={60}>
        <TextEffect titleColor="#fbfadf" titleText="React Conference" />
        </Sequence>
        <Sequence from={220} durationInFrames={60} >
        <TextEffect titleColor="#fbfadf" titleText="in India" />
        </Sequence>
        <Sequence from={310} durationInFrames={60} >
        <TextEffect titleColor="#fbfadf" titleText="is BACK!!" />
        </Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
