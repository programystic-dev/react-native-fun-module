import { NativeModules } from 'react-native';

type FunModuleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { FunModule } = NativeModules;

export default FunModule as FunModuleType;
