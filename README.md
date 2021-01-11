# SpenTime

This repository holds the code 
for the ReactNative app of SpenTime, 
an app to track time spent on activities.

## Prerequisites

```bash
sudo yarn global add expo expo-cli
yarn install
```

## Running

Start expo server

```bash
expo start
```

## Releasing

### Android

Get APK for sideloading
```bash
cd android
./gradlew assembleBundle
```

Get AAB for Google Play Store releasing
```bash
cd android
./gradlew releaseBundle
```
