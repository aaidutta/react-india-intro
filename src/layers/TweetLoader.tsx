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
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 10], [0, 1]);

	return (
		<div style={{opacity}}>
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
