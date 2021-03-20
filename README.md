# react-native-market-comment
### 打开ios和安卓各大应用市场
#### Installing
`npm install react-native-market-linking --save`
`yarn add react-native-market-linking`
#### Lingking Native Dependencies
##### if your RN Version < 0.6.0
`react-naitve link react-native-market-linking`
#### Usage
`import { openAppStore } from 'react-native-market-linking';`
```
didClickOpenButton = () => {
  openAppStore();
}
```
#### API
* openAppStore(yourAppIdOnAppStore)
