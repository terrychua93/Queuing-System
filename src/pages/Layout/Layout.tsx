import { Outlet, Link } from "react-router-dom";
import MainPage from "../../components/Main/MainPage";
import { Box, Button, Container, Stepper, useSteps } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MobileNumber from "../../components/Forms/MobileNumber/MobileNumber";




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

  return (
    <Container maxW='1000px'>
      <Header />
      <Stepper size='lg' colorScheme='red' index={activeStep}>
        {activeStep === 1 ? (<MainPage selectedOption={() => goToNext()} />) : <MobileNumber selectedOption={() => goToNext()} />}
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