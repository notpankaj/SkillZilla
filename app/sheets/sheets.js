import {registerSheet} from 'react-native-actions-sheet';
import ExampleSheet from './ExampleSheet';

export const SHEETS = {
  ExampleSheet: 'ExampleSheet',
};

registerSheet(SHEETS.ExampleSheet, ExampleSheet);
