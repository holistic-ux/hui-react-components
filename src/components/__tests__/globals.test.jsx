import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Button, Icon, Loader } from '../../index';

describe('Test export and import every component', () => {
  test('<Button> must be render', () => {
    const { container, unmount } = render(<Button>Hello World</Button>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('<Loader> must be render', () => {
    const { container, unmount } = render(<Loader />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('<Icon> must be render', async () => {
    const { container, unmount } = render(<Icon title="Icon" name="archive" />);
    expect(await screen.findByTitle('Icon')).toBeInTheDocument();
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });
});
