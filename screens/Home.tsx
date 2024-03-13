import { Button, Text, View, ScrollView, ActivityIndicator } from "react-native";
import styled from "@emotion/native";
import { ColorProps, color } from 'styled-system';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { foodSelector } from "../redux/store";
import { useEffect } from "react";
import { getFoodPending } from "../redux/food/foodSlice";
import { MaterialIcons } from '@expo/vector-icons';

interface HomeProp extends ColorProps { }

function HomeScreen({ navigation }: any) {
  const { foods, isLoading, errMsg, error } = useAppSelector(foodSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFoodPending());
    console.log('dispatched')
  }, [dispatch])

  if (isLoading) return (

  <LoadingContainer>
    <ActivityIndicator size="large" color="#000000"/>
  </LoadingContainer>
  )

  if (error) {
    return (
      <LoadingContainer>
        <Text>{errMsg}</Text>
        <Button
            title="Go back"
            onPress={() => navigation.navigate('Login')}
          />
      </LoadingContainer>
    )
  }

  return (
    <StyledScroll>
      <Container>
        <View>
          <Title>Enjoy your meal!
          </Title>

          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>

        <ContentContainer>

          {foods.map((food) => (
            <Card key={food.idMeal}>
              <StyledImage
                source={{
                  uri: `${food.strMealThumb}`,
                }}
              />
              <DescriptionContainer>
              <Text>{food.strMeal}</Text>
               <MaterialIcons name="favorite" size={24} color="red"/>
              </DescriptionContainer>
            </Card>

          ))}
        </ContentContainer>
      </Container>
    </StyledScroll>
  );
}

const StyledScroll = styled.ScrollView`
/* background-color: rebeccapurple; */
`;

const Container = styled.View<HomeProp>`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  ${color}
  padding: 10px;
  `;


const Title = styled.Text`
  font-size: 20px; 
  font-weight: 700;
`;

const ContentContainer = styled.View<HomeProp>`
width: 90%;
gap: 30px;
${color}
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 420px;
  border-radius: 10px;
  margin-bottom: 10px;
`;


const Card = styled.View`
  width: 100%;
  height: 500px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;;
  border-radius: 10px;
  flex: 1;
  border: 2px solid black;
  gap: 5px;
  padding: 10px;

`;

const LoadingContainer = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const DescriptionContainer = styled.View`
width: 100%;
flex: 1;
flex-direction: row;
justify-content: space-between;
align-items:  center;
padding: 0 5px;
`;


export default HomeScreen;