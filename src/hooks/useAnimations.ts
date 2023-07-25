import {useCallback} from 'react';
import {
  AnimationCallback,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {Dimensions} from 'react-native';

const PLAYBACK_CONTAINER_PADDING = 20;
const RESET_DELAY = 500;
const RESET_DURATION = 500;
const TO_START = 0;
const KNOB_SIZE = 16;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDER_BORDER_WIDTH = 0.6;
const maxRange =
  SCREEN_WIDTH -
  2 * PLAYBACK_CONTAINER_PADDING -
  KNOB_SIZE +
  SLIDER_BORDER_WIDTH;

export const useAnimations = (durationMs: number) => {
  const offsetX = useSharedValue(0);

  const scrollTranslationStyle = useAnimatedStyle(() => {
    return {transform: [{translateX: offsetX.value}]};
  }, []);

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: offsetX.value + KNOB_SIZE / 2,
    };
  }, []);

  const handleAnimationEnd: AnimationCallback = useCallback(
    (isFinished?: boolean) => {
      'worklet';
      if (!isFinished) {
        return;
      }

      offsetX.value = withDelay(
        RESET_DELAY,
        withTiming(TO_START, {duration: RESET_DURATION}),
      );
    },
    [offsetX],
  );

  const startAnimation = useCallback(() => {
    offsetX.value = withTiming(
      maxRange,
      {
        duration: durationMs,
        easing: Easing.linear,
      },
      handleAnimationEnd,
    );
  }, [offsetX, durationMs, handleAnimationEnd]);

  return {startAnimation, progressStyle, scrollTranslationStyle};
};
