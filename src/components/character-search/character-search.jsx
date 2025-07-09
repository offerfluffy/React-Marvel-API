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
            getCharacterByName(values.name).then((char) => setChar(char));
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

            {submitted && !char && !loading ? (
              <Error>
                The character was not found. Check the name and try again
              </Error>
            ) : char && !error ? (
              <Wrapper>
                <Match>
                  There is! Visit{" "}
                  <Link to={`/characters/${char.id}`}>{char.name}</Link> page?
                </Match>
                <Link to={`/characters/${char.id}`}>
                  <Button $type="secondary">
                    <div className="inner">TO PAGE</div>
                  </Button>
                </Link>
              </Wrapper>
            ) : null}
          </Form>
        </Formik>
      </div>
    </CharacterSearchWrapper>
  );
};

export default CharacterSearch;
