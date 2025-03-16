import { Image, Text, View } from 'react-native';

interface InfoProps {
  title: string;
  subtitle?: string | '';
  showImage?: boolean | false;
}

export default function InfoCard({ title, subtitle, showImage }: InfoProps) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      {showImage && (
        <Image
          source={{
            uri: 'https://reactnative.dev/img/homepage/dissection-dark.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );
}
