import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import Button from '../index';

describe('<Button> HUI Button', () => {
  test('should render button without props', () => {
    const { container, unmount } = render(
      <Button>Hello World without props</Button>
    );
    expect(screen.getByText('Hello World without props')).toBeInTheDocument();
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render button with typeStyle', () => {
    const { container, unmount } = render(
      <Button typeStyle="decorated">Hello World</Button>
    );
    expect(
      container.firstChild.classList.contains('hui-button--decorated-type')
    ).toBe(true);
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render block button', () => {
    const { container, unmount } = render(<Button block>Hello World</Button>);
    expect(container.firstChild.classList.contains('hui-button--block')).toBe(
      true
    );
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render button with icon', async () => {
    const { container, unmount } = render(
      <Button iconTitle="Icon from button" icon="archive">
        Hello World
      </Button>
    );
    expect(await screen.findByText('Hello World')).toBeInTheDocument();
    expect(await screen.findByTitle('Icon from button')).toBeInTheDocument();
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render button with icon without text', async () => {
    const { container, unmount } = render(
      <Button iconTitle="Icon from button" icon="archive" onlyIcon>
        Hello World
      </Button>
    );
    await waitFor(() => {
      expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
    });
    expect(await screen.findByTitle('Icon from button')).toBeInTheDocument();
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render disabled button', () => {
    const { container, unmount } = render(
      <Button disabled>Hello World</Button>
    );
    expect(container.firstChild.disabled).toBe(true);
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render loading button', async () => {
    const { container, unmount } = render(<Button loading>Hello World</Button>);
    expect(await screen.findByTitle('Loader')).toBeInTheDocument();
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render loading ghost button', () => {
    const { container, unmount } = render(
      <Button loading typeStyle="ghost">
        Hello World
      </Button>
    );
    expect(
      container.firstChild.classList.contains('hui-button--ghost-type')
    ).toBe(true);
    unmount();
    expect(container.innerHTML).toBeFalsy();

  });

  test('should render button with another classnames', () => {
    const customCSSClass = 'my-custom-class-name';
    const { container, unmount } = render(
      <Button className={customCSSClass}>Hello World</Button>
    );
    expect(container.firstChild.classList.contains(customCSSClass)).toBe(true);
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });
});
