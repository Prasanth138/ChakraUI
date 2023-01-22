import { Tooltip, Button, Stack, HStack } from "@chakra-ui/react";

function MyTooltip() {
  return (
    <Stack >
      <HStack display="flex" justifyContent="center">
        <Tooltip label="I close on click">
          <Button>Close on Click - true(default)</Button>
        </Tooltip>
      </HStack>
      <HStack display="flex" justifyContent="center">
        <Tooltip label="I don't close on click" closeOnClick={false}>
          <Button>Close on Click - false</Button>
        </Tooltip>
      </HStack>
      <HStack display="flex" justifyContent="center">
        <Tooltip label="Opened after 500ms" openDelay={500}>
          <Button>Delay Open - 500ms</Button>
        </Tooltip>
      </HStack>
      <HStack display="flex" justifyContent="center">
        <Tooltip label="Closed after 500ms" closeDelay={500}>
          <Button>Delay Close - 500ms</Button>
        </Tooltip>
      </HStack>
      <HStack display="flex" justifyContent="center">
        <Tooltip label="I have 15px arrow" hasArrow arrowSize={15}>
          <Button>Arrow size - 15px</Button>
        </Tooltip>
      </HStack>
      <HStack display="flex" justifyContent="center">
        <Tooltip label="Auto start" placement="auto-start">
          <Button>Auto-Start</Button>
        </Tooltip>
      </HStack>
      <HStack display="flex" justifyContent="center">
        <Tooltip label="Right end" placement="right-end">
          <Button>Right-End</Button>
        </Tooltip>
      </HStack>
      {/* <Wrap spacing={3} style={{flexWrap: "wrap"}}>
        <WrapItem>
          <Tooltip label="I close on click">
            <Button>Close on Click - true(default)</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I don't close on click" closeOnClick={false}>
            <Button>Close on Click - false</Button>
          </Tooltip>
        </WrapItem>



        <WrapItem>
          <Tooltip label="Opened after 500ms" openDelay={500}>
            <Button>Delay Open - 500ms</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="Closed after 500ms" closeDelay={500}>
            <Button>Delay Close - 500ms</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I have 15px arrow" hasArrow arrowSize={15}>
            <Button>Arrow size - 15px</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="Auto start" placement="auto-start">
            <Button>Auto-Start</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="Right end" placement="right-end">
            <Button>Right-End</Button>
          </Tooltip>
        </WrapItem>
      </Wrap> */}
    </Stack>
  );
}
export default MyTooltip;
