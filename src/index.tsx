import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {CustomText, PlaybackSlider} from './components';
import {useAnimations} from './hooks';

const duration = 20 * 1000;

export const App: React.FC = () => {
  const {progressStyle, scrollTranslationStyle, startAnimation} =
    useAnimations(duration);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.playbackContainer}>
          <PlaybackSlider
            progressStyle={progressStyle}
            scrollTranslationStyle={scrollTranslationStyle}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <CustomText content="Start animation" onPress={startAnimation} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
