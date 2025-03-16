import InfoCard from '@/components/InfoCard';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <InfoCard title="Hello" />
      <InfoCard title="Hello" subtitle="World" />
      <InfoCard title="Hello" subtitle="World" showImage />
      <InfoCard title="Hello" showImage />
    </View>
  );
}
