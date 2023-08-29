import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';


const meta = {
    title: "Library/Switches/Toggle",
    component: Toggle,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered'
    },
    args: {
        ToggleColor: 'indigo',
        OutsideText: true,
        OutsideLeft: 'on',
        OutsideRight: 'off',
        ToggleSize: 'small',
        disabled: false,
        
    }

} satisfies Meta<typeof Toggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    
}
