import {FC, useState} from 'react';
import TweetEmbed from 'react-tweet-embed';
import {
	continueRender,
	delayRender,
	interpolate,
	useCurrentFrame,
} from 'remotion';

export const TweetLoader: FC<{id: string}> = ({id}) => {
	const [handle] = useState(() => delayRender('Loading Twitter Cards'));
	const frames = useCurrentFrame();
	const scale = interpolate(frames, [0, 15], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity = interpolate(frames, [45, 60], [1, 0], {
		extrapolateLeft: 'clamp',
	});
	return (
		<div
			style={{
				width: '550px',
				transform: `scale(${scale})`,
				opacity,
			}}
		>
			<TweetEmbed
				tweetId={id}
				options={{
					cards: 'hidden',
					theme: 'dark',
				}}
				onTweetLoadSuccess={() => continueRender(handle)}
			/>
		</div>
	);
};
