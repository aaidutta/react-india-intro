import {Lottie, LottieAnimationData} from '@remotion/lottie';
import {FC, useEffect, useState} from 'react';
import {cancelRender, continueRender, delayRender, staticFile} from 'remotion';

export const LottieLoader: FC<{
	name: string;
	loop?: boolean;
	speed?: number;
}> = ({name, loop = false, speed = 1}) => {
	const [handle] = useState(() => delayRender('Loading Lottie animation'));
	const [animationData, setAnimationData] =
		useState<LottieAnimationData | null>(null);

	useEffect(() => {
		fetch(staticFile(name))
			.then((data) => data.json())
			.then((json) => {
				setAnimationData(json);
				continueRender(handle);
			})
			.catch((err) => {
				cancelRender(err);
			});
	}, [handle]);
	if (!animationData) {
		return null;
	}
	return (
		<Lottie animationData={animationData} loop={loop} playbackRate={speed} />
	);
};
