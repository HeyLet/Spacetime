import { StatusBar } from 'expo-status-bar'
import { ImageBackground, View } from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import NLWLogo from './src/assets/nlw-spacetime-logo.svg'
import { styled } from 'nativewind'

const StyledStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <NLWLogo />

        <View className="space-y-2">
        <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo

        </View>
      </View>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
