## Dear Reader,

This repository serves as demo for representing weak Android performances while using Reanimated animations:

Running `transform` style animation will cause JS and UI frame drops only on Android devices/emulators.

## Reproduction footages:

- [iOS and Android comparison](https://drive.google.com/file/d/1FjPFnLqj-cVgKprMrBMnQdMdpPzOqm3u/view?usp=sharing).
- [Android component profiling](https://drive.google.com/file/d/1rquYH0F2Y2O9p_DLPO3djmGiyWYrlXGi/view?usp=sharing).

## Notes:

- While observing the footages constant frame drops are in place on Android emulator.
- At the end of the Android component profiling footage JS thread reaches 0 FPS without running any expensive background calculation (except animation ones).

## How to run the project:

1. Have ready React Native environment for application development.
2. In the console enter the `yarn build` command. It will install dependencies.
3. After that Metro bundler can be started with `yarn start` command.
4. In another terminal build the projects for Android and/or iOS emulators/simulators with `yarn android` and `yarn ios` commands.
