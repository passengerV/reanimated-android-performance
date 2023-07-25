import {StyleSheet} from 'react-native';

const KNOB_BORDER = 4;
const SLIDER_HEIGHT = 4;
export const KNOB_SIZE = 16;
export const SLIDER_BORDER_WIDTH = 0.6;
const FOREGROUND_COLOR = '#0163E5';
const BACKGROUND = '#E6F1FF';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: SLIDER_HEIGHT,
    borderRadius: SLIDER_HEIGHT / 2,
    backgroundColor: BACKGROUND,
    border: `${SLIDER_BORDER_WIDTH} solid ${FOREGROUND_COLOR}`,
  },
  progressBar: {
    position: 'absolute',
    height: SLIDER_HEIGHT,
    borderRadius: SLIDER_HEIGHT / 2,
    backgroundColor: FOREGROUND_COLOR,
  },
  knob: {
    position: 'absolute',
    width: KNOB_SIZE,
    height: KNOB_SIZE,
    left: -SLIDER_BORDER_WIDTH,
    borderRadius: KNOB_SIZE / 2,
    backgroundColor: FOREGROUND_COLOR,
    border: `${KNOB_BORDER} solid ${FOREGROUND_COLOR}`,
  },
});
