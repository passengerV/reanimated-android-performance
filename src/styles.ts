import {StyleSheet} from 'react-native';

const BUTTON_PADDING = 15;
const BORDER_RADIUS = 30;
const BUTTON_COLOR = '#328094';
const PLAYBACK_CONTAINER_BOTTOM = 10;
export const PLAYBACK_CONTAINER_PADDING = 20;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: BUTTON_PADDING,
    backgroundColor: BUTTON_COLOR,
    borderRadius: BORDER_RADIUS,
  },
  playbackContainer: {
    height: '10%',
    width: '100%',
    padding: PLAYBACK_CONTAINER_PADDING,
    marginBottom: PLAYBACK_CONTAINER_BOTTOM,
  },
});
