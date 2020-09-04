import { NativeModules } from 'react-native';

type AprilBeaconType = {
  multiply(a: number, b: number): Promise<number>;
};

const { AprilBeacon } = NativeModules;

export default AprilBeacon as AprilBeaconType;
