import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam harum mollitia corrupti reiciendis saepe cum dicta,
          aut beatae laborum doloremque cupiditate sint,
          veniam itaque minus, nisi impedit debitis officiis sequi!
        </p>
      </div>

    )
  },

  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
