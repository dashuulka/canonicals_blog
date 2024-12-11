import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

const handleClick = () => {
	console.log('Кнопка нажата!');
};

export const ArrowButtonStory: Story = {
	render: () => {
		return (
			<>
				<ArrowButton isOpen={false} onClick={handleClick} />
			</>
		);
	},
};