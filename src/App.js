import React from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Annonate from "./Components/Annonate";
import Card from "./Components/Card";
import DrawerE from "./Components/Drawer";
import MyForm from "./Components/Form";
import Modal from "./Components/Modal";
import Popover from "./Components/Popover";
import Tooltip from "./Components/Tooltip";

const App = () => {
  return (
    <ChakraProvider>
      <Box>
        <Box my="2em" textAlign="center">
          <Heading as="h1" size="xl">
            Welcome to Chakra UI
          </Heading>
        </Box>
        <Flex
          minWidth="max-content"
          alignItems="center"
          justifyContent="center"
          flexDirection={["column", "column", "row"]}
        >
          <Accordion
            allowToggle
            maxW={["100%", "100%", "700px"]}
            borderWidth="1px"
          >
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                  <Box as="span" flex="1" textAlign="center">
                    Form Components
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} whiteSpace="normal">
                <MyForm />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                  <Box as="span" flex="1" textAlign="center">
                    Drawer
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} whiteSpace="normal">
                <DrawerE />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                  <Box as="span" flex="1" textAlign="center">
                    Card
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} whiteSpace="normal">
                <Card />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                  <Box as="span" flex="1" textAlign="center">
                    Annonate
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} whiteSpace="normal">
                <Annonate />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                  <Box as="span" flex="1" textAlign="center">
                    Modal
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} whiteSpace="normal">
                <Modal />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                  <Box as="span" flex="1" textAlign="center">
                    Popover
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} whiteSpace="normal">
                <Popover />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                  <Box as="span" flex="1" textAlign="center">
                    Tooltip
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} whiteSpace="normal">
                <Tooltip />
              </AccordionPanel>
            </AccordionItem>

          </Accordion>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default App;
