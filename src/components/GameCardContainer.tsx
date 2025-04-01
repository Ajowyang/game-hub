import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardSkeletonProps {
  children: ReactNode;
}
const GameCardContainer = ({ children }: GameCardSkeletonProps) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
