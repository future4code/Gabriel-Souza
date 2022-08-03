import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useForm } from "../hooks/useForm";

type FormType = {
  firstName: string,
  lastName: string,
  participation: string
};

type CreateContextType = {
  students: FormType[];
  addStudents: (e: any) => void;
  form: FormType; 
  onChange: (event: any) => void; 
  clearInputs: () => void;
};

type ContextGlobalProps = {
  children: ReactNode
};

export const ContextGlobal = createContext<CreateContextType>({} as CreateContextType);

export const ContextGlobalComponent = ({ children }: ContextGlobalProps) => {

  const [students, setStudents] = useState<any[]>([
    {firstName: "Gabriel", lastName: "Silva", participation: 50},
    {firstName: "Lany", lastName: "Santos", participation: 50}
  ]);

  const { form, onChange, clearInputs } = useForm({
    firstName: "",
    lastName: "",
    participation: ""
  });

  const addStudents = (e: any) => {
    e.preventDefault();
    setStudents([...students, form]);
  };

  const store: CreateContextType = {
    students, 
    addStudents,
    form,
    onChange,
    clearInputs
  };
    
    return (
        <ContextGlobal.Provider value={store}>
            { children }
        </ContextGlobal.Provider>
    );
};
