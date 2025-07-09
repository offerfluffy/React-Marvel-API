import {
  CharacterSearchWrapper,
  Title,
  Input,
  Error,
} from "./character-search-styled";
import { Button } from "../../style/button/button-styled.js";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const CharacterSearch = () => {
  return (
    <CharacterSearchWrapper>
      <Title>Or find a character by name:</Title>
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
          onSubmit={() => {}}
        >
          <Form>
            <Field
              as={Input}
              type="text"
              placeholder="Enter name"
              name="name"
            />
            <Button as="button" $type="main" type="submit">
              <div className="inner">FIND</div>
            </Button>
            <ErrorMessage component={Error} name="name" />
          </Form>
        </Formik>
      </div>
    </CharacterSearchWrapper>
  );
};

export default CharacterSearch;
