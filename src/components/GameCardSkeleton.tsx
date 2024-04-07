import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card overflow="hidden" borderRadius="15px">
      <Skeleton height="14.3vw" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
