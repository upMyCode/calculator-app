import { Calculator, Header } from '../../components'

const MainPageFC = ({ handleButtonPressed }) => {
  return (
      <div>
        <Header />
        <Calculator handleButtonPressed={handleButtonPressed} />
      </div>
  );
};

export default MainPageFC;
