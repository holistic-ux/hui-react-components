import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Loader from '../index';

const cssPrefix = 'hui-loader';
describe('<Loader> HUI Loader', () => {
  test('should render HUI Loader', () => {
    const { container, unmount } = render(<Loader />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render HUI Loader custom kind', () => {
    const { container, unmount } = render(<Loader kind="secondary" />);
    expect(
      container.firstChild.classList.contains(`${cssPrefix}--secondary`)
    ).toBe(true);
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render HUI Loader custom size', () => {
    const { container, unmount } = render(<Loader size="bigger" />);
    expect(
      container.firstChild.classList.contains(`${cssPrefix}--bigger-size`)
    ).toBe(true);
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render HUI Loader custom velocity', () => {
    const { container, unmount } = render(<Loader velocity="fast" />);
    expect(
      container.firstChild.classList.contains(`${cssPrefix}--fast-velocity`)
    ).toBe(true);
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render HUI Loader custom animation', () => {
    const { container, unmount } = render(<Loader animation="ease-in-out" />);
    expect(
      container.firstChild.classList.contains(
        `${cssPrefix}--ease-in-out-timing-function`
      )
    ).toBe(true);
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });

  test('should render HUI Loader custom css classes', () => {
    const customCSSClass = 'my-custom-class-name';
    const { container, unmount } = render(
      <Loader className={customCSSClass} />
    );
    expect(container.firstChild.classList.contains(customCSSClass)).toBe(true);
    unmount();
    expect(container.innerHTML).toBeFalsy();
  });
});
