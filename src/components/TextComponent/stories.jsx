import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
     Dignissimos laboriosam repudiandae perspiciatis accusamus veritatis eveniet,
     esse, doloribus, dolore est optio ducimus vel deleniti architecto!
     Ullam doloribus quis asperiores reiciendis eveniet.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
