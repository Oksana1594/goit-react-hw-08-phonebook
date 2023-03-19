import { useState, useCallback } from 'react';
import initialState from './initialState';

import css from './register-form.module.css'
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const RegisterForm = ({ onSubmit }) => {
  const [store, setState] = useState({ ...initialState });
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...store });
    setState({ ...initialState });
  };

  const { name, email, password } = store;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <FormControl
        boxSize="500"
        display="flex"
        flexDirection="column"
        isRequired
      >
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input className={css.input}
          focusBorderColor="green.300"
          size="md"
          id="name"
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
          value={name}
          name="name"
          pattern="[A-Za-z0-9]+"
          title="Please enter a name using only latin letters and numbers"
        />
        <FormLabel mt="4" htmlFor="email">
          Email
        </FormLabel>
        <Input className={css.input}
          focusBorderColor="green.300"
          size="md"
          id="email"
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={email}
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Password must be include @  and ."
        />
        <FormLabel mt="4" htmlFor="password">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input className={css.input}
            focusBorderColor="green.300"
            size="md"
            id="password"
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            onChange={handleChange}
            value={password}
            name="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$"
            title="Password must be at least 7 characters long, include letters and numbers"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="md" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button className={css.btn} type="submit" mr="auto" ml="auto" mt="20" colorScheme="green">
          Register
        </Button>
      </FormControl>
    </form>
  );
};
export default RegisterForm;
