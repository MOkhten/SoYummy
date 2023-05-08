import { ColorRing } from 'react-loader-spinner';
import { useState } from 'react';

import {
  DeleteIconStyled,
  RecipeItem,
  RecipeImgWrapper,
  RecipeImg,
  RecipeWrapper,
  RecipeTitle,
  DeleteButton,
  RecipeAbout,
  RecipeTime,
  SeeRecipeBtn,
  LinkStyled,
} from './MyRecipesItem.styled';

export const MyRecipesItem = props => {
  const [loading, setLoading] = useState(false);
  const { title, time, description, imageURL, _id, category } = props.recipe;

  const isImgDefault = imageURL.includes('default');
  const deleteRecipe = () => {
    setLoading(true);
    props.onDelete();
  };

  return (
    <RecipeItem>
      <RecipeImgWrapper>
        {!isImgDefault && <RecipeImg src={imageURL} alt={title} />}
        {isImgDefault && (
          <RecipeImg
            src={require('../../images/recipeImg/default-img.png')}
            alt={title}
          />
        )}
      </RecipeImgWrapper>
      <RecipeWrapper>
        <RecipeTitle>{title}</RecipeTitle>
        <DeleteButton type="button" onClick={deleteRecipe}>
          {loading ? (
            <ColorRing
              visible={true}
              ariaLabel="blocks-loading"
              height="40px"
              width="40px"
              colors={['#2a2c36', '#92f6f4', '#FcBC00', '#7c94dd', '#31e04c']}
            />
          ) : (
            <DeleteIconStyled id="icon-trash" />
          )}
        </DeleteButton>
        <RecipeAbout>{description}</RecipeAbout>
        <RecipeTime>{time} min</RecipeTime>
        <SeeRecipeBtn to={`/recipes/${_id}`}>See recipe</SeeRecipeBtn>
        <LinkStyled to={`/categories/${category}`}>
          Category: {category}
        </LinkStyled>
      </RecipeWrapper>
    </RecipeItem>
  );
};
