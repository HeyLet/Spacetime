import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text, View } from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'

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
      className="flex-1 items-center justify-center bg-zinc-950"
    >
      <Text className=" font-alt text-5xl font-bold text-zinc-50">Olá</Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
