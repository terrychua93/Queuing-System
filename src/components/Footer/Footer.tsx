import './Footer.css';
import logo from '../../utils/images/ParkwayHealthLaboratory.png'
import { Container, Image, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Container mt='10' mb='5' className="Header_Container" maxW='550px' centerContent>
      <footer className="chakra-stack css-fjmwcx">
        <Text fontSize={'0.9rem'}>Powerred by Granfossil 2005 - 2023. All Rights Reserved.</Text>
      </footer>
    </Container>

  );
};

export default Footer;