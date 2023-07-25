import React from 'react';
import {styles} from './styles';
import Animated, {AnimatedStyleProp} from 'react-native-reanimated';
import {View, ViewStyle} from 'react-native';

const HIT_SLOP = {bottom: 10, left: 5, right: 10, top: 10};

interface Props {
  scrollTranslationStyle: AnimatedStyleProp<ViewStyle>;
  progressStyle: AnimatedStyleProp<ViewStyle>;
  isDisabled?: boolean;
}

export const PlaybackSlider: React.FC<Props> = ({
  progressStyle,
  scrollTranslationStyle,
}) => {
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.progressBar, progressStyle]} />
      <Animated.View
        style={[styles.knob, scrollTranslationStyle]}
        hitSlop={HIT_SLOP}
      />
    </View>
  );
};
