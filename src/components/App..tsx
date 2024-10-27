import {
  Container,
  Panel,
  Rect,
  ScreenContainer,
  StateContainer,
} from 'App.style';
import classNames from 'classnames';
import { Board } from './Board';
import { Clock } from './Clock';
import { Decoration } from './Decoration';
import { Keyboard } from './Keyboard';
import { Level } from './Level';
import { Line } from './Line';
import { Logo } from './Logo';
import { Music } from './Music';
import { NextPiece } from './NextPiece';
import { Pause } from './Pause';
import { Point } from './Point';
import { Social } from './Social';
import { MatrixUtil } from 'helpers';
import useInterval from 'hooks/useInterval';
import { GameStatus } from 'models/gameStatus';
import React, { CSSProperties, useRef } from 'react';
import {
  keyDownEventHandler,
  keyUpEventHandler,
} from 'services/keyboardService';
import { update } from 'services/tetrisService';
import { useStore } from 'store';
import LeaderBoard from './LeaderBoard/LeaderBoard';

function Game() {
  const store = useStore();
  const ref = useRef(store);
  ref.current = store;

  useInterval(
    () => {
      update(ref.current);
    },
    ref.current.paused || ref.current.status !== GameStatus.Started
      ? null
      : MatrixUtil.getSpeedDelay(ref.current.speed),
  );

  function onKeyDown({ key }: React.KeyboardEvent) {
    keyDownEventHandler(key, ref.current);
  }

  function onKeyUp({ key }: React.KeyboardEvent) {
    keyUpEventHandler(key, ref.current);
  }

  let filling = 0;
  const w = document.documentElement.clientWidth;
  const h = document.documentElement.clientHeight;
  const ratio = h / w;
  let scale;
  let css: CSSProperties = {};
  let cssScale: CSSProperties = {};
  cssScale.transform = `scale(0.85)`;
  if (ratio < 1.5) {
    scale = h / 960;
  } else {
    scale = w / 640;
    filling = (h - 960 * scale) / scale / 3;
    css = {
      paddingTop: Math.floor(filling) + 42,
      paddingBottom: Math.floor(filling),
      marginTop: Math.floor(-480 - filling * 1.5),
    };
  }
  css.transform = `scale(${scale})`;
  css.display = "flex"
  css.flexDirection = "row"
  css.justifyContent ="center"
  css.alignItems = "center"
  css.paddingBottom = "20px"
  const scores = [
    { name: 'Player1', points: 1500 },
    { name: 'Player2', points: 1200 },
    { name: 'Player3', points: 900 },
    { name: 'Player3', points: 900 },
  ];

  return (
    <div style={cssScale}>
      <div
        role="button"
        style={{ width: '100vw', height: '100vh' }}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      >
        <Container style={css}>
          <div>
            <Rect
              className={classNames({
                drop:
                  store.isKeyDropActive && store.status === GameStatus.Started,
              })}>
              <Decoration />
              <ScreenContainer>
                <Panel>
                  <Board />
                  <Logo />
                  <StateContainer className="state">
                    <Point />
                    <Line />
                    <Level />
                    <NextPiece />
                    <div className="last-row">
                      <Clock />
                      <Pause />
                      <Music />
                    </div>
                  </StateContainer>
                </Panel>
              </ScreenContainer>
            </Rect>
          <Keyboard />
          <LeaderBoard scores={scores} />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Game;
