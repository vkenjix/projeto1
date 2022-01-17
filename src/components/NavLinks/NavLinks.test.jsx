import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { NavLinks } from '.';
import { screen } from '@testing-library/react';
import mock from './mock';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should render styles', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByText(/Link10/).parentElement).
      toHaveStyleRule(
        'flex-flow',
        'column wrap',
        {
          media: theme.medias.lteMedio,
        },
      );
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
