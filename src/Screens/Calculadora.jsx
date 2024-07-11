import  { useState } from 'react';

import Calcular from '../Components/Calcular';
import NewInvestment from '../Components/NewInvestment';
import MyInvestments from '../Components/MyInvestments';
import MyFields from '../Components/MyFields';
import FAQ from '../Components/Faq';
import Help from '../Components/Help';





import Sidebar from '../Components/Sidebar'


const Calculadora = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const renderComponent = () => {
      switch (selectedIndex) {
        case 0:
          return <Calcular />;
        case 1:
          return <NewInvestment />;
        case 2:
          return <MyInvestments />;
        case 3:
          return <MyFields />;
        case 4:
          return <FAQ />;
        case 5:
          return <Help />;
        default:
          return <Calcular />;
      }
    };


  return (
    <>
    <br />
    <br />
    <br />
    <br />
    
    <div style={{ display: 'flex' }}>
      <Sidebar onSelect={setSelectedIndex} />
      <div style={{ flex: 1, padding: '20px' }}>
        {renderComponent()}
      </div>
    </div>
    </>
  )
}

export default Calculadora