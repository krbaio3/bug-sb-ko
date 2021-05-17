import { LabelPosition, SlideComponent as SliderComponent } from 'projects/components/src/public-api';

import { moduleMetadata, Story, Meta  } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export default {
  title: 'Componentes/Slide',
  component: SliderComponent,
  decorators: [
    moduleMetadata({
      declarations: [SliderComponent],
      imports: [CommonModule, MatSlideToggleModule],
    }),
  ],
} as Meta;

const Template: Story<SliderComponent> = (args: SliderComponent) => ({
  // component: SliderComponent,
  props: args,
});

export const Slide = Template.bind({});
Slide.args = {
  label: 'Slide Me',
  ariaLabel: 'Slide',
  disabled: false,
  labelPosition: LabelPosition.After
};
