import React from "react";
import "./Customertest.scss"
import leaf from './leaf.png'
import leafb from './leafb.png'
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import {
  Carousel,
  CarouselItem,
  useCarouselItem,
  CarouselItems,
  useCarousel
} from "chakra-framer-carousel";
import { ChevronLeft, ChevronRight } from "react-feather";

const testimonials = [
  {
    name: "Jane Cooper",
    title: "Customer",
    bg: "#ea8a76",
    src:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    heading: "Fast Delivery"
  },
  {
    name: "Kai Doe",
    title: "Customer",
    bg: "#ea8a76",
    src:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    heading: "Best Quality"
  },
  {
    name: "Gina Smith",
    title: "Customer",
    bg: "#ea8a76",
    src:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    heading: "Loved the Product"
  },
  {
    name: "Brad Watkins",
    title: "Customer",
    bg: "#ea8a76",
    src:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    heading: "Thank You so much Loved it"
  }
];

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color="gray.600">
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

function Testimonial({ bg, heading }) {
  const { onClickHandler, position } = useCarouselItem();
  const isCenter = position === "center";
  return (
    <Flex
      w={isCenter ? "375px" : "325px"}
      h={isCenter ? "250px" : "200px"}
      pos="relative"
      boxShadow="lg"
      align="center"
      as="button"
      onClick={onClickHandler}
      bg={bg}
      rounded="xl"
      justify="center"
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: bg,
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      <VStack p={10}>
        <TestimonialHeading>{heading}</TestimonialHeading>
        <Text
          fontSize="sm"
          textAlign="center"
          color="white"
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.`}</Text>
      </VStack>
    </Flex>
  );
}

function Arrow({ isLeft }) {
  const { onNext, onPrevious } = useCarousel();
  const onClickHandler = () => {
    if (isLeft) {
      onPrevious();
    } else {
      onNext();
    }
  };
  const pos = isLeft ? { left: "10px" } : { right: "10px" };
  return (
    <Flex pos="absolute" {...pos} top="35%">
      <Button size="lg" variant="solid" bgColor="#ea8a76"  color = "#f4d9b7"onClick={onClickHandler}>
        {isLeft ? <ChevronLeft /> : <ChevronRight />}
      </Button>
    </Flex>
  );
}

function TestimonialDemo() {
  return (
    <Flex flexDir="column">
      <Carousel>
        <Flex w="fit-content" pos="relative">
          <CarouselItems mx={2}>
            {testimonials.map(({ name, title, bg, src, heading }, index) => {
              return (
                <CarouselItem index={index} key={name}>
                  <Box p={10}>
                    <Testimonial heading={heading} bg={bg} />
                    <TestimonialAvatar src={src} name={name} title={title} />
                  </Box>
                </CarouselItem>
              );
            })}
          </CarouselItems>

          <Arrow isLeft />
          <Arrow isLeft={false} />
        </Flex>
      </Carousel>
      <div className="subscribe">
      <div className="subsin">
      <img class="tops" src={leaf} alt="leaf"/>
      <div className="ins">
      <div className="textfs">
      <h1>Floral Up your inbox</h1>
      <h2>Subscribe to get Discount</h2>
      </div>
      <button class="subs">Subsribe</button>
      </div>
      <img className="bottoms" src={leafb} alt="leaf"/>
      </div>
      </div>
    </Flex>
  );
}

function Customertest() {
  return (
    <Box p={10} h="full" w="full" bg="#f4d9b7">
      <Stack spacing={2} align={"center"}>
        <Heading color="#ea8a76">Customer Testimonials</Heading>
        <Text color="#ea8a76">
          We have been working with clients around the world
        </Text>
      </Stack>

      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <TestimonialDemo />
      </Container>
      <Flex>
      </Flex>
    </Box>
  );
}

export default Customertest;