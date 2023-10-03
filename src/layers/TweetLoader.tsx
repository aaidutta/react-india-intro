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

	return (
		<div>
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
