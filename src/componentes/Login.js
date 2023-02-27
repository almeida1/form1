import { useForm } from "react-hook-form";
import React, { useState } from "react";
const UserAddForm = () => {
  const { handleSubmit, register } = useForm();
  const handleSubmitData = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <h3> Form de Cadastro</h3>
      <form
        onSubmit={handleSubmit(handleSubmitData)}
        style={{
          minWidth: "260px",
          display: "flex",
          flexdirection: "column",
          gap: "8px", //distancia entre as colunas
          marginTop: "36px", //distancia entre as linhas
        }}
      >
        <input type="text" {...register("name")} placeholder="Nome" />
        <input type="text" {...register("address")} placeholder="Endereço" />
        <input type="text" {...register("cel")} placeholder="Telefone" />
        <button type="submit"> Salvar</button>
      </form>
    </>
  );
};
const UserEditForm = ({ id, defaultValues }) => {
  const { handleSubmit, register } = useForm({
    defaultValues: defaultValues ?? {},
  });
  const handleSubmitData = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <h3> Form de Edição</h3>
      <form
        onSubmit={handleSubmit(handleSubmitData)}
        style={{
          minWidth: "260px",
          display: "flex",
          flexdirection: "column",
          gap: "8px", //distancia entre as colunas
          marginTop: "36px", //distancia entre as linhas
        }}
      >
        <input type="text" {...register("name")} placeholder="Nome" />
        <input type="text" {...register("address")} placeholder="Endereço" />
        <input type="text" {...register("cell")} placeholder="Telefone" />
        <button type="submit"> Adicionar</button>
      </form>
    </>
  );
};
export default function Login() {
  const [isAddUser, setIsAddUser] = useState(false);
  const [isEditUser, setIsEditUser] = useState(false);

  const defaultValues = {
    name: "Jose",
    address: "Rua Nova",
    cell: "92929292",
  };

  const handleAddUser = () => {
    setIsEditUser(false);
    setIsAddUser(true);
  };
  const handleEditUser = () => {
    setIsAddUser(false);
    setIsEditUser(true);
  };
  return (
    <div>
      <button onClick={handleAddUser}> Adicionar</button>
      <button onClick={handleEditUser}> Editar</button>
      {isAddUser && <UserAddForm />}
      {isEditUser && <UserEditForm id={1} defaultValues={defaultValues} />}
    </div>
  );
}
