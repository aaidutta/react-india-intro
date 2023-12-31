import {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Montserrat';
import {useAppearWithScaleAndBounce} from '../../hooks/useAppearWithScaleAndBounce';
import {REACT_INDIA_YELLOW} from '../../constants';

export const CenteredText: FC<{title: string; subtitle: string}> = ({
	title,
	subtitle,
}) => {
	const {fontFamily} = loadFont();
	const {scaleValue} = useAppearWithScaleAndBounce(25);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				transform: `scale(${scaleValue})`,
			}}
		>
			<div
				style={{
					textAlign: 'center',
					color: REACT_INDIA_YELLOW,
				}}
			>
				<h1
					style={{
						fontFamily,
						fontSize: 200,
						fontWeight: 800,
						lineHeight: 0.7,
						fontStyle: 'normal',
					}}
				>
					{title}
				</h1>
				<h2
					style={{
						fontFamily,
						fontSize: 50,
						lineHeight: 0.7,
						fontStyle: 'normal',
					}}
				>
					{subtitle}
				</h2>
			</div>
		</AbsoluteFill>
	);
};
