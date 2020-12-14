# Getting Started with Create React Native App

## Available Scripts

In the project directory, you can run:


### iOS setup

XCode is required with a simulator.

```
brew install node
brew install watchman
sudo gem install cocoapods
npx react-native init SwapApp
```

### Android setup

Android studio is required with a simulator.

```
brew install node
brew install watchman
brew cask install adoptopenjdk/openjdk/adoptopenjdk8
```

### Start Metro

```
npx react-native start
```
You will see any errors in the metro console.

### Start App

iOS:
```
npx react-native run-ios
```

Android:
```
npx react-native run-android
```

Runs the app in the configured simulator/device, and will reload if you make edits.

## Project Structure

- `/src` -> All source code
- `/ios` -> iOS app
- `/android` -> iOS app