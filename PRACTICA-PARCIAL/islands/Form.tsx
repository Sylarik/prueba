import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type Contacto = {
  nombre1: string;
  email1: string;
};

export const Form: FunctionComponent = () => {
  const [nombre, setNombre] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [error, setError] = useState<string | undefined>();

  const addContact = () => {
    const exits = contactos.some((ct) => {
      if (ct.email1 === email) {
        return true;
      }
    });
    setContactos([...contactos, { nombre1: nombre, email1: email }]);

    setError("");
  };

  const submit = (): boolean => {
    if (
      (nombre === "") || email === "" || email.includes("@") === false ||
      email.includes(".") === false
    ) {
      setError("Hay una caja vacia");
      return false;
    }
    setEmail("");
    setNombre("");
    return true;
  };

  return (
    <>
      {contactos && (
        <div>
          {contactos.map((ct) => {
            return (
              <p>
                <p>{ct.nombre1}</p>
                <p>{ct.email1}</p>
              </p>
            );
          })}
        </div>
      )}

      {console.log(contactos)}

      <div class="uno">
        <h2>add contact</h2>

        <input
          type="text"
          name="nombre"
          placeholder="name"
          onBlur={(e) => {
            setNombre(e.currentTarget.value);
          }}
          onFocus={(e) => {
            setError("");
          }}
        >
        </input>
        <input
          type="email"
          name="nombre"
          placeholder="email"
          onBlur={(e) => {
            setEmail(e.currentTarget.value);
          }}
          onFocus={(e) => {
            setError("");
          }}
        >
        </input>

        <button
          onClick={(e) => {
            if (submit()) {
              addContact();
            }
          }}
        >
          Enviar
        </button>

        {error}
      </div>
    </>
  );
};
