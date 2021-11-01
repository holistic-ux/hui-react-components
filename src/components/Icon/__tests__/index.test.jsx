import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Icon from '../index';

describe('<Icon> HUI Icon', () => {
  test('should render HUI Icon', async () => {
    const { container, unmount } = render(
      <Icon role="img" name="adjustments" />
    );
    expect(await screen.findByRole('img')).toBeInTheDocument();
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render HUI Icon with custom title', async () => {
    const { container, unmount } = render(
      <Icon title="Adjustments Icon" name="adjustments" />
    );
    expect(await screen.findByTitle('Adjustments Icon')).toBeInTheDocument();
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render HUI Icon with hover', async () => {
    const { container, unmount } = render(
      <Icon title="Adjustments Icon" name="adjustments" hoverTransition />
    );
    expect(await screen.findByTitle('Adjustments Icon')).toBeInTheDocument();
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render HUI Icon with custom class names', async () => {
    const customCSSClass = 'my-custom-classnames';
    const { container, unmount } = render(
      <Icon
        title="Adjustments Icon"
        name="adjustments"
        className={customCSSClass}
      />
    );
    expect(await screen.findByTitle('Adjustments Icon')).toBeInTheDocument();
    expect(container.firstChild.classList.contains(customCSSClass)).toBe(true);
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render HUI Icon with specific size', async () => {
    const size = '200px';
    const { container, unmount } = render(
      <Icon title="Adjustments Icon" name="adjustments" specificSize={size} />
    );
    expect(await screen.findByTitle('Adjustments Icon')).toBeInTheDocument();
    expect(container.firstChild.style.width).toEqual(size);
    expect(container.firstChild.style.height).toEqual(size);
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render HUI Icon with solid style', async () => {
    const { container, unmount } = render(
      <Icon title="Adjustments Icon" name="adjustments" solid />
    );
    expect(await screen.findByTitle('Adjustments Icon')).toBeInTheDocument();
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });
});
