export const SplashScreen = ({ show }: {show: boolean}) => {
  return (
    <div className='flex items-center justify-center flex-1 transition-all duration-500' style={{ opacity: show ? 1 : 0 }}>
    <p className='text-9xl'>allie.</p>
    </div>
  )
};
