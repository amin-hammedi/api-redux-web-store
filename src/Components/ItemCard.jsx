import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  WrapItem,
} from "@chakra-ui/react";
import { handledelete } from "../redux/actions";
const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card maxW="sm" className="card">
        <CardBody>
          <Image
            className="img"
            src={item.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.title}</Heading>
            <Text className="desc">{item.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              {item.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="ghost" colorScheme="blue">
              Info{" "}
            </Button>
            <WrapItem>
              <Button
                onClick={() => dispatch(handledelete(item.id))}
                colorScheme="red"
              >
                delete
              </Button>
            </WrapItem>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemCard;
