import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid Two Columns',
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing el
    Praesentium qui recusandae saepe necessitatibus commodi minima
    iste perferendis dolor vero soluta modi et quod, consequatur totam ut
    nisi sunt maiores tempore.`,
    srcImg: 'assets/images/javascript.svg'
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
