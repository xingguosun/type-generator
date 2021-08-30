import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

it("should equal to a address string", async () => {
  const { getByRole } = render(<App />);
  //select `String` and input `address`
  userEvent.selectOptions(getByRole("combobox", {name: 'select type'}), 'String');
  userEvent.type(getByRole("textbox", { name: 'input name'}), 'address');

  const targetCode = 'type address = string';
  await waitFor(() => expect(getByRole("document")).toHaveTextContent(targetCode));
});

it("should equal to a user object string", async () => {
  const { getByRole, getAllByRole, queryAllByRole } = render(<App />);
  //First item: select `Object` and input `user`
  userEvent.selectOptions(getByRole("combobox", {name: 'select type'}), 'Object');
  userEvent.type(getByRole("textbox", {name: 'input name'}), 'user');
  const addButton = getByRole("button", { name: 'add property'});
  userEvent.click(addButton);

  //Second item: select `String` and input `name`
  userEvent.selectOptions(queryAllByRole("combobox", {name: 'select type'})[1], 'String');
  userEvent.type(getAllByRole("textbox")[1], 'name');
  userEvent.click(addButton);

  //Thrid item: select `Number` and input `age`
  userEvent.selectOptions(queryAllByRole("combobox")[2], 'Number');
  userEvent.type(getAllByRole("textbox")[2], 'age');

  const targetCode = `type user = { name : string , age : number }`;
  await waitFor(() => expect(getByRole("document")).toHaveTextContent(targetCode));
});