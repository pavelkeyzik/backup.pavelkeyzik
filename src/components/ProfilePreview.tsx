import { MouseEvent, useRef } from 'react';
import styled from '@emotion/styled';
import { PlusIcon } from './icons/PlusIcon';
import { PartialEllipse } from './icons/PartialEllipse';
import { animated, useSpring } from 'react-spring';
import { useTheme } from '@emotion/react';

function translate1(x: number, y: number) {
  return `scale(1.25) translate(${x * 40}px, ${y * 40}px)`;
}

function translate2(x: number, y: number) {
  return `scale(1) translate(${x * 120}px, ${y * 120}px)`;
}

function translate3(x: number, y: number) {
  return `scale(1.75) translate(${x * 20}px, ${y * 20}px)`;
}

function translate4(x: number, y: number) {
  return `scale(1.5) translate(${x * 50}px, ${y * 50}px)`;
}

function ProfilePreview() {
  const ref = useRef<HTMLDivElement>(null);
  const [props, set] = useSpring(() => ({ xyPosition: [0, 0] }));
  const theme = useTheme();

  function updateIconsPosition(
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const height = ref.current.clientHeight;
      const x = event.pageX - ref.current.offsetLeft;
      const y = event.pageY - ref.current.offsetTop;

      const xTransition = x / width;
      const yTransition = y / height;

      set({
        xyPosition: [xTransition, yTransition],
      });
    }
  }

  return (
    <Root ref={ref} onMouseMove={updateIconsPosition}>
      <Content>
        <h2>Hi! My name's Pavel</h2>
        <span>I'm a Front-end Engineer since Sep 2018</span>
        <animated.div
          style={{
            position: 'absolute',
            top: 0,
            left: '105%',
            color: theme.color.profilePreviewShape1,
            // @ts-expect-error
            transform: props.xyPosition.interpolate(translate1),
          }}
        >
          <PlusIcon />
        </animated.div>
        <animated.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '-30%',
            color: theme.color.profilePreviewShape2,
            // @ts-expect-error
            transform: props.xyPosition.interpolate(translate2),
          }}
        >
          <PartialEllipse />
        </animated.div>
        <animated.div
          style={{
            position: 'absolute',
            top: '-50%',
            left: '130%',
            color: theme.color.profilePreviewShape3,
            // @ts-expect-error
            transform: props.xyPosition.interpolate(translate3),
          }}
        >
          <PartialEllipse />
        </animated.div>
        <animated.div
          style={{
            position: 'absolute',
            top: 0,
            left: '-60%',
            color: theme.color.profilePreviewShape4,
            // @ts-expect-error
            transform: props.xyPosition.interpolate(translate4),
          }}
        >
          <PlusIcon />
        </animated.div>
      </Content>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 40px;
`;

export { ProfilePreview };
