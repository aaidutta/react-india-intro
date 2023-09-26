import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Syne';

const {fontFamily} = loadFont();

const title: React.CSSProperties = {
	fontFamily,
	fontWeight: 'bold',
	fontSize: 100,
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'row',
};

const word: React.CSSProperties = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};

export const IntroText: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = titleText.split(' ');

	return (
		<AbsoluteFill style={title}>
			{words.map((t, i) => {
				const delay = i * 2.5;

				const scale = spring({
					fps: videoConfig.fps,
					frame: frame - delay,
					config: {
						damping: 200,
					},
				});

				return (
					<span
						key={t}
						style={{
							...word,
							color: titleColor,
							transform: `scale(${scale})`,
						}}
					>
						{t}
					</span>
				);
			})}
		</AbsoluteFill>
	);
};
