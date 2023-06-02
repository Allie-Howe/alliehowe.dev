export const SplashScreen = ({ show }: {show: boolean}) => {
  return (<div className='transition-all duration-500' style={{ opacity: show ? 1 : 0 }}>
    {/* TODO: Add animation for text pop-in */}
    <p className='text-9xl'>allie.</p>
  </div>)
};
