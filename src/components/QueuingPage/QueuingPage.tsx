import './QueuingPage.css';
import { Box, Container, Text, Wrap, WrapItem, ScaleFade, Divider } from '@chakra-ui/react'
import moment from 'moment';
import { useEffect, useState } from 'react';


interface QueuingPageProps {
  mobileNumber: string;
  passportNumber: string;
}

const QueuingPage = (props: QueuingPageProps) => {
  const [queueNumber, setQueueNumber] = useState<string>('');
  const generateRandomAlphabets = (length: number): string => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      result += alphabet[randomIndex];
    }
    return result;
  }

  const generateRandomNumbers = (length: number): string => {
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      result += randomDigit;
    }
    return result;
  }

  useEffect(() => {
    setQueueNumber(generateRandomAlphabets(3) + generateRandomNumbers(3))
  }, [props]);

  return (
    <Container mt='2' mb='5' className="QueuingPage_Container" maxW='510px'>
      <ScaleFade initialScale={0.9} in={true} style={{ width: '100%' }}>
        <Text mb='10' color={'gray'} fontWeight={'bolder'}>Issued on {moment().format('DD-MM-YYYY h:mm a')}</Text>

        <Wrap justify='center' spacing='5px' width={'100%'}>
          <WrapItem className='QueuingPage_WrapItem'>
            <Box borderRadius={'xl'} className="QueuingPage_BoxSelection" bg='#ffffff' w='440px' h='100%' p={3}>
              <Text fontSize={'1.5rem'} color={'black'} fontWeight={'bolder'}>Your Queue Number</Text>
              <Text fontSize={'4rem'} color={'#2189aa'} fontWeight={'bolder'}>{queueNumber}</Text>
              <Divider my='5' bg={'gray'} borderBottomWidth={'4px'} fontWeight={'bolder'} />
              <Text color={'gray'} fontWeight={'bolder'}>Estimated</Text>
              <Text fontSize={'2rem'} color={'#2189aa'} fontWeight={'bolder'}>{generateRandomNumbers(2)}</Text>
              <Text color={'gray'} fontWeight={'bolder'}>persons ahead of you</Text>
            </Box>
          </WrapItem>
        </Wrap>
        <Text my='5' color={'gray'} fontWeight={'bolder'}>Queue number may not be called in sequence</Text>
        <Text color={'red'} fontWeight={'bolder'}>You may want to take a screenshot of this page if you have not provided a mobile number</Text>

      </ScaleFade>
    </Container>

  );
};

export default QueuingPage;