import './Header.css';
import logo from '../../utils/images/ParkwayHealthLaboratory.png'
import { Container, Image, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Container mt='10' mb='5' className="Header_Container" maxW='550px' centerContent>
      <Image className="Header_Image" src={logo} alt='Dan Abramov' style={{ width: '55%' }} />
      <Text className="Header_Text" fontSize='3xl' fontWeight='500' color='gray.500'>Welcome to Endoscopy Department</Text>
    </Container>

  );
};

export default Header;