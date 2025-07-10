import {
  CharacterSearchWrapper,
  Text,
  Input,
  Error,
  Match,
  Wrapper,
} from "./character-search-styled";
import { Button } from "../../style/button/button-styled.js";

import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { useState } from "react";
import { Link } from "react-router-dom";

import useMarvelService from "../../services/marvel-service.js";

const CharacterSearch = () => {
  const { loading, error, getCharacterByName, clearError } = useMarvelService();
  const [char, setChar] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const capitalizeEachWord = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <CharacterSearchWrapper>
      <Text>Or find a character by name:</Text>
      <div>
        <Formik
          initialValues={{
            name: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(1, "Too Short!")
              .max(20, "Too Long!")
              .required("This field is required"),
          })}
          onSubmit={(values) => {
            setSubmitted(true);
            clearError();
            const name = capitalizeEachWord(values.name.trim());
            getCharacterByName(name).then((char) => setChar(char));
          }}
        >
          <Form>
            <Wrapper>
              <Field
                as={Input}
                type="text"
                placeholder="Enter name"
                name="name"
              />
              <Button as="button" $type="main" type="submit">
                <div className="inner">FIND</div>
              </Button>
            </Wrapper>

            <ErrorMessage component={Error} name="name" />
          </Form>
        </Formik>
        {submitted && !char && !loading ? (
          <Error>
            The character was not found. Check the name and try again
          </Error>
        ) : char && !error ? (
          <Wrapper>
            <Match>
              There is! Visit{" "}
              <Link to={`/character/${char.id}`}>{char.name}</Link> page?
            </Match>
            <Button as={Link} to={`/character/${char.id}`} $type="secondary">
              <div className="inner">TO PAGE</div>
            </Button>
          </Wrapper>
        ) : null}
      </div>
    </CharacterSearchWrapper>
  );
};

export default CharacterSearch;
