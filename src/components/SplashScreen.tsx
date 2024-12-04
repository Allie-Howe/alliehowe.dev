import { Dispatch, SetStateAction } from 'react'
import AccountIcon from 'mdi-react/AccountIcon'
import PhoneIcon from 'mdi-react/PhoneIcon'
import { PressableButton } from './PressableButton'
import { Screen } from '../App'
import { pinks } from './ShuffleButton'
import { MdiReactIconComponentType } from 'mdi-react'

interface SplashScreenProps {
  screen: Screen
  setScreen: Dispatch<SetStateAction<Screen>>
}
export const SplashScreen = (props: SplashScreenProps) => <div className='flex justify-center'>
  <div>
    <p className='text-9xl' style={{filter: 'drop-shadow(0 0 0.8rem black)'}}>allie.</p>
    <div className='w-full flex justify-around'>
      <ToggleableButtons {...props} Icon={AccountIcon} buttonScreen={Screen.About} />
      <ToggleableButtons {...props} Icon={PhoneIcon} buttonScreen={Screen.Contact} />
    </div>
  </div>
</div>

interface ToggleableButtonsProps extends SplashScreenProps {
  buttonScreen: Screen
  Icon: MdiReactIconComponentType
}
const ToggleableButtons = ({screen, setScreen, buttonScreen, Icon}: ToggleableButtonsProps) => {
  return <PressableButton
    className='h-10'
    onClick={() => setScreen(buttonScreen)}
    icon={<Icon {...screen !== buttonScreen && {style: {color: pinks[0]}} }/>}
    {...screen !== buttonScreen && {style: {backgroundColor: '#333'}} }
  />
}
