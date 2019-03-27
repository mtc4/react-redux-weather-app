import {StyleSheet} from 'react-native';
import { lightStyleSheet, darkStyleSheet } from "./themes/";

 export default function getStyleSheet(useDarkTheme){
     return useDarkTheme ? darkStyleSheet : lightStyleSheet;
 }