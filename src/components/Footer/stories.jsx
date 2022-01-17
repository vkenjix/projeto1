import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://www.linkedin.com/in/vin%C3%ADcius-kenji-rodrigues-sakai-60a798128?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8rxScsd%2FQTG9MtXfqC9TbA%3D%3D">Feito com ❤ por Vinícius Kenji</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
