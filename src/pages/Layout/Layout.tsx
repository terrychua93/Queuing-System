import { Outlet, Link } from "react-router-dom";
import MainPage from "../../components/Main/MainPage";
import { Box, Button, Container, Stepper, useSteps } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MobileNumber from "../../components/Forms/MobileNumber/MobileNumber";
import { useReducer } from "react";
import PassportNumber from "../../components/Forms/PassportNumber/PassportNumber";




const Layout = () => {

  const steps = [
    { title: 'First', description: 'Main Page' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
  ]

  const { goToNext, goToPrevious, activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })


  const StepperReducer = (type: string) => {
    switch (type) {
      case 'next':
        goToNext();
        break;
      case 'prev':
        goToPrevious();
        break;
      case 'skip':
        break;
      default:
        throw new Error();
    }
  }



  return (
    <Container maxW='1000px'>
      <Header />
      <Stepper size='lg' colorScheme='red' index={activeStep}>
        {activeStep === 1 ? (<MainPage selectedOption={() => StepperReducer('next')} />) :
          activeStep === 2 ? (<MobileNumber selectedOption={() => StepperReducer('next')} />) :
            (<PassportNumber selectedOption={() => StepperReducer('next')} />)}
      </Stepper>

      <p >{activeStep}</p>

      <Footer />
    </Container>
    //   <Button
    //   onClick={() => {
    //     goToNext();
    //   }}
    // >
    //   Forward
    // </Button>
    // <Button
    //   onClick={() => {
    //     goToPrevious();
    //   }}
    // >
    //   Previous
    // </Button>
  )
};

export default Layout;