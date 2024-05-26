import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { icons } from '../constants';

const TabBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  background-color: #bdd8b0;
  box-shadow: 0 -1px 6px rgba(189, 216, 208, 1);
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const TabIcon = styled.img`
  width: 4vh;
  height: 4vh;
`;

const QRIcon = styled.img`
    width: 7vh;
    height: 7vh;
`

const TabButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${props => (props.active ? '#04315b' : '#3c9284')};
`;

function BottomTab() {
  const location = useLocation();

  const activeIconTint = (active) => ({
    filter: active
      ? 'brightness(0) saturate(100%) invert(11%) sepia(71%) saturate(2753%) hue-rotate(195deg) brightness(95%) contrast(97%)'
      : 'none',
  });

  return (
    <TabBar>
        <TabButton to="/rescale" active={location.pathname === '/rescale'}>
            <TabIcon 
            src={icons.xyzRescale} 
            alt="Rescale" 
            style={activeIconTint(location.pathname === '/rescale')}
            />
            <p className='font-hnroman text-xs'>Rescale</p>
        </TabButton>

        <TabButton to="/qr" active={location.pathname === '/qr'}>
            <div style={{
            position: 'absolute',
            top: "-6vh",
            width: "12vh",
            height: "12vh",
            borderRadius: "6vh",
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#04315b',
            display: 'flex',
            }}>
                <QRIcon src={icons.xyzQR} alt="QR"/>
            </div>
            <p className='text-primary'>⠀⠀⠀⠀</p>
        </TabButton>

        <TabButton to="/account" active={location.pathname === '/account'}>
            <TabIcon 
            src={icons.xyzAccount} 
            alt="Account"
            style={activeIconTint(location.pathname === '/account')}
            />
            <p className='font-hnroman text-xs'>Account</p>
        </TabButton>
    </TabBar>
  );
}

export default BottomTab;
