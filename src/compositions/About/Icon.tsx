import {FC} from 'react';
import {Img, staticFile} from 'remotion';

export const Icon: FC<{src: string}> = ({src}) => {
	return (
		<Img
			src={staticFile(src)}
			style={{
				width: '150px',
				height: '150px',
			}}
		/>
	);
};
